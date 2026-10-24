"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
    addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
type Product = {
    id: string;
    name?: string;
    category?: string;
    brand?: string;
    pack?: string;
    description?: string;
    imageUrl?: string;
};

const quoteProducts = [
    { name: "Probe Cleanser", category: "Hematology Products", brand: "Please confirm", pack: "50 mL" },
    { name: "VDRL / RPR Latex Reagent", category: "Serology", brand: "Rapid Lab", pack: "Complete kit" },
    { name: "Welfelix Set (OX2, OXK, OX19)", category: "Serology", brand: "Rapid Lab", pack: "100T" },
    { name: "Widal Set (TO, TH, AH, BH)", category: "Serology", brand: "Rapid Lab", pack: "100T" },
    { name: "HCG Latex Reagent", category: "Serology", brand: "Please confirm", pack: "2 mL" },
    { name: "CRP Latex Reagent", category: "Serology", brand: "Please confirm", pack: "100T" },
    { name: "RF/RA Latex Reagent", category: "Serology", brand: "Please confirm", pack: "100T" },
    { name: "ASO Latex Reagent", category: "Serology", brand: "Please confirm", pack: "100T" },
    { name: "CRP Complete Kit", category: "Serology", brand: "Please confirm", pack: "100T" },
    { name: "RF/RA Latex Complete Kit", category: "Serology", brand: "GenBioCal", pack: "100T" },
    { name: "ASO Latex Complete Kit", category: "Serology", brand: "GenBioCal", pack: "100T" },
    { name: "LDH Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Zinc Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Magnesium Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Ammonia Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "25 mL" },
    { name: "ADA Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "30 mL" },
    { name: "Lactate Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "20 mL" },
    { name: "Gamma GT Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "D-Dimer Turbilatex Kit", category: "Coagulation", brand: "GenBioCal", pack: "20 mL" },
    { name: "APTT Kit", category: "Coagulation", brand: "GenBioCal", pack: "5 mL" },
    { name: "Prothrombin Time (PT) Kit", category: "Coagulation", brand: "GenBioCal", pack: "50 mL" },
    { name: "CK-NAC Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "48 mL" },
    { name: "CK-MB Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "48 mL" },
    { name: "Potassium Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "50 mL" },
    { name: "Sodium Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "50 mL" },
    { name: "Hemoglobin Reagent", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "TIBC Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "24 mL" },
    { name: "Serum Iron Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Calcium Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Lipase Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "24 mL" },
    { name: "Triglyceride Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "LDL Direct Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "40 mL" },
    { name: "HDL Direct Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "80 mL" },
    { name: "Blood Grouping Reagent – ABO System", category: "Other Laboratory Products", brand: "Rapid Lab", pack: "Set" },
    { name: "Glucose Reagent", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "1000 mL" },
    { name: "Alkaline Phosphatase Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "100 mL" },
    { name: "Alpha Amylase Kit", category: "Clinical Biochemistry", brand: "GenBioCal", pack: "50 mL" },
    { name: "Urinalysis Test Strips", category: "Urinalysis", brand: "Please confirm", pack: "Please confirm" },
    { name: "Microbiology Consumables", category: "Microbiology", brand: "Please confirm", pack: "Please confirm" },
];

const CATEGORIES = [
    "Clinical Biochemistry", "Serology", "Immunology", "Hematology Products",
    "Coagulation", "Molecular Biology", "Urinalysis", "Microbiology",
    "Other Laboratory Products",
];

export default function AdminPage() {
    const router = useRouter();
    const adminUid = process.env.NEXT_PUBLIC_DILS_ADMIN_UID;
    const [authorized, setAuthorized] = useState(false);
    const [checking, setChecking] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [productSearch, setProductSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [brand, setBrand] = useState("");
    const [pack, setPack] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [uploadingImage, setUploadingImage] = useState(false);

    async function handleImageUpload(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
            setError("শুধু JPG, PNG বা WebP ছবি নির্বাচন করুন।");
            event.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("ছবির সাইজ সর্বোচ্চ 5 MB হতে পারবে।");
            event.target.value = "";
            return;
        }

        setUploadingImage(true);
        setError("");
        setMessage("");

        try {
            const cloudName =
                process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
            const uploadPreset =
                process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

            if (!cloudName || !uploadPreset) {
                throw new Error(
                    "Cloudinary সেটিংস পাওয়া যায়নি। .env.local পরীক্ষা করুন।"
                );
            }

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);

            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result?.error?.message || "Cloudinary upload failed"
                );
            }

            if (!result?.secure_url) {
                throw new Error("Cloudinary থেকে ছবির URL পাওয়া যায়নি।");
            }

            setImageUrl(result.secure_url);
            setMessage("ছবি Cloudinary-তে আপলোড হয়েছে। এবার Save Changes চাপুন।");
        } catch (error) {
            console.error("Cloudinary image upload failed:", error);
            setError(
                error instanceof Error
                    ? `ছবি আপলোড হয়নি: ${error.message}`
                    : "ছবি আপলোড হয়নি। Cloudinary সেটিংস পরীক্ষা করুন।"
            );
        } finally {
            setUploadingImage(false);
            event.target.value = "";
        }
    }

    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [importing, setImporting] = useState(false);

    useEffect(() => {
        if (!adminUid) {
            setError("Admin UID সেট করা হয়নি। .env.local ফাইলে NEXT_PUBLIC_DILS_ADMIN_UID যোগ করুন, তারপর server restart করুন।");
            setChecking(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.replace("/admin/login");
                return;
            }
            if (user.uid !== adminUid) {
                await signOut(auth);
                router.replace("/admin/login");
                return;
            }
            setAuthorized(true);
            setChecking(false);
        });
        return () => unsubscribe();
    }, [adminUid, router]);

    const loadProducts = useCallback(async () => {
        if (!authorized) return;
        setLoading(true);
        setError("");
        try {
            const snapshot = await getDocs(collection(db, "products"));
            const list = snapshot.docs.map((item) => ({
                id: item.id, ...item.data(),
            })) as Product[];
            list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
            setProducts(list);
        } catch (e) {
            console.error(e);
            setError("পণ্য লোড করা যায়নি। Firestore তৈরি হয়েছে এবং Rules-এ Admin UID অনুমোদিত কি না দেখুন।");
        } finally {
            setLoading(false);
        }
    }, [authorized]);

    useEffect(() => { void loadProducts(); }, [loadProducts]);

    const filteredProducts = products.filter((product) => {
        const query = productSearch.trim().toLowerCase();

        const matchesSearch =
            !query ||
            [product.name, product.brand, product.category, product.pack]
                .some((value) => value?.toLowerCase().includes(query));

        const matchesCategory =
            categoryFilter === "All" || product.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    function startEdit(product: Product) {
        setEditingId(product.id);
        setName(product.name || "");
        setCategory(product.category || CATEGORIES[0]);
        setBrand(product.brand || "");
        setPack(product.pack || "");
        setImageUrl(product.imageUrl || "");
        setDescription(product.description || "");
        setError(""); setMessage("");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function resetForm() {
        setEditingId(null); setName(""); setCategory(CATEGORIES[0]); setBrand(""); setPack(""); setImageUrl(""); setDescription("");
    }

    async function importWebsiteProducts() {
        if (!window.confirm("ওয়েবসাইটের মূল তালিকার পণ্যগুলো Admin-এ আনতে চান? একই নামের পণ্য আগে থেকেই থাকলে সেটি আবার যোগ হবে না বা তার তথ্য পরিবর্তন হবে না।")) return;
        setImporting(true); setError(""); setMessage("");
        try {
            const snap = await getDocs(collection(db, "products"));
            const names = new Set(snap.docs.map((d) => String(d.data().name || "").trim().toLowerCase()));
            let added = 0;
            for (const product of quoteProducts) {
                if (names.has(product.name.trim().toLowerCase())) continue;
                await addDoc(collection(db, "products"), { ...product, imageUrl: "", description: "", active: true, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
                names.add(product.name.trim().toLowerCase()); added++;
            }
            setMessage(`${added}টি নতুন পণ্য Firestore-এ যোগ হয়েছে। এখন Manage Products তালিকায় প্রতিটি পণ্যের পাশে Edit বোতাম থাকবে। আগে থেকে থাকা একই নামের পণ্যের তথ্য অপরিবর্তিত রাখা হয়েছে।`);
            await loadProducts();
        } catch (e) { console.error(e); setError("বর্তমান পণ্য ইমপোর্ট করা যায়নি। Firestore Rules পরীক্ষা করুন।"); }
        finally { setImporting(false); }
    }

    async function addProduct(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setMessage("");
        if (!name.trim()) {
            setError("পণ্যের নাম লিখুন।");
            return;
        }
        setSaving(true);
        try {
            const productData = {
                name: name.trim(), category, brand: brand.trim(), pack: pack.trim(),
                imageUrl: imageUrl.trim(), description: description.trim(), active: true,
                updatedAt: serverTimestamp(),
            };
            if (editingId) {
                await updateDoc(doc(db, "products", editingId), productData);
                setMessage("পণ্যের তথ্য সফলভাবে আপডেট হয়েছে।");
            } else {
                await addDoc(collection(db, "products"), { ...productData, createdAt: serverTimestamp() });
                setMessage("পণ্য সফলভাবে যোগ হয়েছে।");
            }
            resetForm();
            await loadProducts();
        } catch (e) {
            console.error(e);
            setError("পণ্য যোগ করা যায়নি। Firestore Rules এবং database setup পরীক্ষা করুন।");
        } finally {
            setSaving(false);
        }
    }

    async function removeProduct(product: Product) {
        if (!window.confirm(`“${product.name || "এই পণ্য"}” মুছে ফেলতে চান?`)) return;
        setError(""); setMessage("");
        try {
            await deleteDoc(doc(db, "products", product.id));
            setProducts((old) => old.filter((item) => item.id !== product.id));
            setMessage("পণ্য মুছে ফেলা হয়েছে।");
        } catch (e) {
            console.error(e);
            setError("পণ্য মুছে ফেলা যায়নি। Firestore Rules পরীক্ষা করুন।");
        }
    }

    async function logout() {
        await signOut(auth);
        router.replace("/admin/login");
    }

    if (checking) {
        return <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">Admin access যাচাই করা হচ্ছে...</main>;
    }

    if (!adminUid) {
        return (
            <main className="mx-auto min-h-screen max-w-2xl bg-slate-50 p-6 sm:p-10">
                <section className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                    <h1 className="text-xl font-bold">DILS Admin Setup প্রয়োজন</h1>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{error}</p>
                    <p className="mt-3 text-sm text-slate-600">Firebase Console → Authentication → Users থেকে Admin account-এর সম্পূর্ণ User UID কপি করুন।</p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-white">NEXT_PUBLIC_DILS_ADMIN_UID=আপনার_সম্পূর্ণ_FIREBASE_USER_UID</pre>
                    <p className="mt-3 text-xs leading-5 text-slate-500">এই লাইনটি project root-এর .env.local ফাইলে যোগ করে terminal-এ server বন্ধ করুন (Ctrl+C), তারপর npm run dev চালান।</p>
                </section>
            </main>
        );
    }

    if (!authorized) return <main className="p-8">Admin account যাচাই করা হচ্ছে...</main>;

    return (
        <main className="min-h-screen bg-slate-100 text-slate-800">
            <header className="border-b bg-white">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Dream Infinity Laboratory Solution</p>
                        <h1 className="mt-1 text-2xl font-black">DILS Admin Dashboard</h1>
                        <p className="mt-1 text-sm text-slate-500">Product catalog management — no public prices.</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => router.push("/")} className="rounded-lg border px-4 py-2 text-sm font-semibold">View Website</button>
                        <button onClick={logout} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Sign Out</button>
                    </div>
                </div>
            </header>

            <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:px-8">
                <section className="h-fit rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                    <h2 className="text-lg font-extrabold">{editingId ? "Edit Product" : "Add New Product"}</h2>
                    <p className="mt-1 text-sm text-slate-500">Price field নেই।</p>
                    <form onSubmit={addProduct} className="mt-5 space-y-4">
                        <label className="block text-sm font-semibold">Product Name *
                            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Alkaline Phosphatase Kit" className="mt-1.5 w-full rounded-lg border px-3 py-2.5 font-normal outline-none focus:border-blue-600" />
                        </label>
                        <label className="block text-sm font-semibold">Category
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 font-normal">
                                {CATEGORIES.map((item) => <option key={item}>{item}</option>)}
                            </select>
                        </label>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm font-semibold">Brand
                                <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand name" className="mt-1.5 w-full rounded-lg border px-3 py-2.5 font-normal" />
                            </label>
                            <label className="block text-sm font-semibold">Pack Size
                                <input value={pack} onChange={(e) => setPack(e.target.value)} placeholder="e.g. 2 × 50 mL" className="mt-1.5 w-full rounded-lg border px-3 py-2.5 font-normal" />
                            </label>
                        </div>
                        <label className="block text-sm font-semibold">Product Image URL (optional)
                            <label className="mt-3 block text-sm font-semibold">
                                অথবা কম্পিউটার থেকে ছবি আপলোড করুন

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={uploadingImage}
                                    className="mt-2 block w-full rounded-lg border p-3 text-sm"
                                />

                                <span className="mt-1 block text-xs font-normal text-slate-500">
                                    JPG, PNG বা WebP; সর্বোচ্চ 5 MB।
                                </span>
                            </label>

                            {uploadingImage && (
                                <p className="text-sm text-blue-700">
                                    ছবি আপলোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
                                </p>
                            )}

                            {imageUrl && (
                                <div className="mt-3">
                                    <p className="mb-2 text-sm font-semibold">ছবির Preview</p>
                                    <img
                                        src={imageUrl}
                                        alt="Product preview"
                                        className="h-36 w-36 rounded-xl border bg-white object-contain p-2"
                                    />
                                </div>
                            )}
                            <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." className="mt-1.5 w-full rounded-lg border px-3 py-2.5 font-normal" />
                            <span className="mt-1 block text-xs font-normal text-slate-500">ছবি আপলোড করলে URL স্বয়ংক্রিয়ভাবে বসবে; চাইলে URL সরাসরিও দিতে পারবেন।</span>
                        </label>
                        <label className="block text-sm font-semibold">Description
                            <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional product details" className="mt-1.5 w-full rounded-lg border px-3 py-2.5 font-normal" />
                        </label>
                        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
                        {message && <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
                        <button disabled={saving} className="w-full rounded-lg bg-blue-800 px-4 py-3 text-sm font-bold text-white disabled:opacity-60">{saving ? "Saving..." : editingId ? "Save Changes" : "Add Product"}</button>
                        {editingId && <button type="button" onClick={resetForm} className="w-full rounded-lg border px-4 py-2.5 text-sm font-semibold">Cancel Edit</button>}
                    </form>
                </section>

                <section className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-extrabold">Manage Products</h2>
                            <p className="mt-1 text-sm text-slate-500">{products.length} product(s) in Firestore</p>
                        </div>
                        <div className="flex flex-wrap gap-2"><button onClick={() => void importWebsiteProducts()} disabled={importing || loading} className="rounded-lg bg-teal-700 px-3 py-2 text-sm font-semibold text-white disabled:opacity-60">{importing ? "Importing..." : "Import Existing Website Products"}</button><button onClick={() => void loadProducts()} disabled={loading} className="rounded-lg border px-3 py-2 text-sm font-semibold disabled:opacity-60">{loading ? "Loading..." : "Refresh"}</button></div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div className="relative">
                            <input
                                type="search"
                                value={productSearch}
                                onChange={(e) => setProductSearch(e.target.value)}
                                placeholder="Search name, brand, category, pack size..."
                                aria-label="Search products"
                                className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            aria-label="Filter products by category"
                            className="w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                        >
                            <option value="All">All Categories</option>
                            {CATEGORIES.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <p className="mt-2 text-xs text-slate-500" aria-live="polite">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>

                    {loading ? <p className="py-10 text-center text-sm text-slate-500">Products loading...</p> :
                        products.length === 0 ? <div className="mt-5 rounded-xl border border-dashed p-8 text-center"><p className="font-semibold">No products in database yet</p><p className="mt-1 text-sm text-slate-500">বাম পাশের ফর্ম দিয়ে পণ্য যোগ করুন।</p></div> :
                            filteredProducts.length === 0 ? <div className="mt-5 rounded-xl border border-dashed p-8 text-center"><p className="font-semibold">No matching products found</p><p className="mt-1 text-sm text-slate-500">Search term বা category পরিবর্তন করে আবার চেষ্টা করুন।</p><button type="button" onClick={() => { setProductSearch(""); setCategoryFilter("All"); }} className="mt-3 rounded-lg border px-3 py-2 text-sm font-semibold hover:bg-slate-50">Clear filters</button></div> :
                            <div className="mt-5 space-y-3">
                                {filteredProducts.map((product) => (
                                    <article key={product.id} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <h3 className="break-words font-bold">{product.name || "Unnamed product"}</h3>
                                            <p className="mt-1 text-xs font-semibold text-blue-700">{product.category || "Uncategorized"}</p>
                                            {product.brand && <p className="mt-1 text-sm text-slate-600">Brand: {product.brand}</p>}
                                            {product.pack && <p className="mt-1 text-sm text-slate-600">Pack: {product.pack}</p>}
                                            {product.imageUrl && <a href={product.imageUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block break-all text-xs text-blue-700 underline">Open product image</a>}
                                            {product.description && <p className="mt-2 text-sm text-slate-600">{product.description}</p>}
                                        </div>
                                        <div className="flex shrink-0 gap-2"><button onClick={() => startEdit(product)} className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">Edit</button><button onClick={() => void removeProduct(product)} className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">Delete</button></div>
                                    </article>
                                ))}
                            </div>
                    }
                </section>
            </div>
        </main>
    );
}
