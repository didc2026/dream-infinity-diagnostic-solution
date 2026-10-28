"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";
import {
  FlaskConical,
  TestTube,
  HeartPulse,
  ShieldPlus,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Dna,
  ChevronDown,
  ArrowRight,
  PackageCheck,
  Truck,
  Stethoscope,
  Search,
  Grid2X2,
  Droplet,
  Microscope,
  Eye,
  Menu,
  X,
  SlidersHorizontal,
} from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    title: "Product Supply",
    text: "Supply of laboratory equipment, reagents, diagnostic kits, consumables and healthcare products.",
  },
  {
    icon: Truck,
    title: "Import & Distribution",
    text: "Import, trading, distribution and supply support for medical and laboratory products.",
  },
  {
    icon: Stethoscope,
    title: "Laboratory Solutions",
    text: "Practical product solutions for hospitals, laboratories and healthcare professionals.",
  },
];

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

const PHONE = "+8801332601180";
const WHATSAPP = "8801332601180";
const EMAIL = "dilsinfo2010@gmail.com";

function quoteWhatsApp(productName?: string) {
  const message = productName
    ? `Hello Dream Infinity Laboratory Solution (DILS), I would like to request a quotation for ${productName}. Please share the current price, availability and delivery details.`
    : "Hello Dream Infinity Laboratory Solution (DILS), I would like to request a quotation for laboratory products. Please contact me.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function quoteEmail(productName?: string) {
  const subject = productName
    ? `Quotation Request - ${productName}`
    : "Quotation Request - Laboratory Products";
  const body = productName
    ? `Dear DILS Team,\n\nPlease provide a quotation for: ${productName}.\nPlease confirm the current price, availability and delivery details.\n\nRegards`
    : "Dear DILS Team,\n\nPlease provide a quotation for my laboratory product requirements. Please confirm current prices, availability and delivery details.\n\nRegards";
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ProductPackVisual({ name }: { name: string }) {
  const hue = name.toLowerCase().includes("blood") ? "#0f766e" : name.toLowerCase().includes("rapid") ? "#7c3aed" : "#2563eb";
  return (
    <div className="flex h-[150px] w-full items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-blue-100 sm:h-[170px]">
      <svg viewBox="0 0 180 110" role="img" aria-label={`${name} product illustration`} className="h-full w-full max-w-[190px]">
        <ellipse cx="91" cy="96" rx="62" ry="7" fill="#cbd5e1" opacity=".55" />
        <g transform="translate(28 13)">
          <path d="M5 4 L61 4 L69 12 L69 74 L5 74 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.4" />
          <path d="M61 4 L69 12 L61 12 Z" fill="#e2e8f0" />
          <rect x="5" y="14" width="64" height="13" fill={hue} />
          <rect x="12" y="34" width="43" height="4" rx="2" fill="#94a3b8" />
          <rect x="12" y="42" width="35" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="12" y="49" width="39" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="12" y="59" width="23" height="7" rx="2" fill={hue} opacity=".2" />
        </g>
        <g transform="translate(101 43)">
          <rect x="8" y="0" width="17" height="8" rx="2" fill="#1e293b" />
          <rect x="5" y="7" width="23" height="44" rx="5" fill="#e2e8f0" stroke="#94a3b8" />
          <rect x="7" y="18" width="19" height="20" rx="2" fill="#ffffff" />
          <rect x="7" y="18" width="19" height="5" fill={hue} />
          <rect x="10" y="27" width="13" height="2" rx="1" fill="#94a3b8" />
          <rect x="10" y="32" width="10" height="2" rx="1" fill="#cbd5e1" />
        </g>
        <g transform="translate(132 52)">
          <rect x="5" y="0" width="13" height="6" rx="2" fill="#334155" />
          <rect x="2" y="5" width="19" height="34" rx="4" fill="#f8fafc" stroke="#94a3b8" />
          <rect x="4" y="15" width="15" height="15" rx="2" fill="#ffffff" />
          <rect x="4" y="15" width="15" height="4" fill="#dc2626" />
        </g>
      </svg>
    </div>
  );
}

const categoryTiles = [
  { name: "All Products", icon: Grid2X2 },
  { name: "Clinical Biochemistry", icon: FlaskConical },
  { name: "Serology", icon: ShieldPlus },
  { name: "Immunology", icon: HeartPulse },
  { name: "Hematology Products", icon: HeartPulse },
  { name: "Coagulation", icon: Droplet },
  { name: "Molecular Biology", icon: Dna },
  { name: "Urinalysis", icon: TestTube },
  { name: "Microbiology", icon: Microscope },
  { name: "Other Laboratory Products", icon: PackageCheck },
];

type CatalogProduct = { id?: string; name: string; category: string; brand: string; pack: string; imageUrl?: string; description?: string; active?: boolean };

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [firestoreProducts, setFirestoreProducts] = useState<CatalogProduct[] | null>(null);
  const [expandedProductName, setExpandedProductName] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getDocs(collection(db, "products")).then((snapshot) => {
      if (cancelled) return;
      const items = snapshot.docs
        .map((item) => ({ id: item.id, ...item.data() } as CatalogProduct))
        .filter((item) => item.active !== false && Boolean(item.name));
      setFirestoreProducts(items);
    }).catch((error) => { console.error("Could not load Firestore product catalog:", error); });
    return () => { cancelled = true; };
  }, []);

  // Keep every original website product. Firestore values override matching products by name,
  // while new Admin-created products are appended instead of replacing the original catalog.
  const catalogProducts: CatalogProduct[] = useMemo(() => {
    const savedProducts = (firestoreProducts ?? []).map((product) => ({
      ...product,
      category: product.category === "Serology & Immunology" ? "Serology" : product.category,
    }));
    const normalizeName = (name: string) => name.trim().toLocaleLowerCase();
    const savedByName = new Map(savedProducts.map((product) => [normalizeName(product.name), product]));
    const originalNames = new Set(quoteProducts.map((product) => normalizeName(product.name)));
    const originalWithEdits = quoteProducts.map((original) => {
      const saved = savedByName.get(normalizeName(original.name));
      return saved ? { ...original, ...saved } : original;
    });
    const adminOnlyProducts = savedProducts.filter((product) => !originalNames.has(normalizeName(product.name)));
    return [...originalWithEdits, ...adminOnlyProducts];
  }, [firestoreProducts]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    const found = catalogProducts.filter((product) => {
      // Normalize old saved category labels so the two categories remain separate.
      const productCategory = product.category === "Serology & Immunology" ? "Serology" : product.category;
      const categoryMatch = category === "All Products" || productCategory === category;
      const searchMatch = `${product.name} ${product.brand} ${product.pack} ${productCategory}`
        .toLocaleLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });
    if (sortBy === "name") return [...found].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "category") return [...found].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    // While typing, exact/prefix matches appear first, then partial matches.
    if (query) return [...found].sort((a, b) => {
      const aText = `${a.name} ${a.brand} ${a.pack} ${a.category}`.toLocaleLowerCase();
      const bText = `${b.name} ${b.brand} ${b.pack} ${b.category}`.toLocaleLowerCase();
      const aStarts = a.name.toLocaleLowerCase().startsWith(query) ? 0 : aText.startsWith(query) ? 1 : 2;
      const bStarts = b.name.toLocaleLowerCase().startsWith(query) ? 0 : bText.startsWith(query) ? 1 : 2;
      return aStarts - bStarts || a.name.localeCompare(b.name);
    });
    return found;
  }, [catalogProducts, category, search, sortBy]);

  const searchSuggestions = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    if (!query) return [];
    return catalogProducts
      .filter((product) => `${product.name} ${product.brand} ${product.pack} ${product.category}`.toLocaleLowerCase().includes(query))
      .sort((a, b) => {
        const aName = a.name.toLocaleLowerCase();
        const bName = b.name.toLocaleLowerCase();
        const aRank = aName.startsWith(query) ? 0 : `${a.brand} ${a.pack}`.toLocaleLowerCase().startsWith(query) ? 1 : 2;
        const bRank = bName.startsWith(query) ? 0 : `${b.brand} ${b.pack}`.toLocaleLowerCase().startsWith(query) ? 1 : 2;
        return aRank - bRank || a.name.localeCompare(b.name);
      })
      .slice(0, 7);
  }, [catalogProducts, search]);

  const chooseSearchSuggestion = (product: CatalogProduct) => {
    setSearch(product.name);
    setShowSearchSuggestions(false);
    setShowAllProducts(true);
    window.setTimeout(() => document.getElementById("product-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const displayedProducts = search.trim() || showAllProducts ? filteredProducts : filteredProducts.slice(0, 12);
  const expandedProduct = expandedProductName ? catalogProducts.find((product) => product.name === expandedProductName && product.imageUrl) : undefined;

  return (
    <main className="min-h-screen bg-[#f3f7fc] text-slate-800 selection:bg-sky-100 selection:text-blue-900">
      <div className="hidden border-b border-slate-200 bg-slate-950 text-slate-200 sm:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2 text-[11px] font-medium tracking-wide lg:px-8">
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-cyan-300" /> Laboratory & IVD supply solutions across Bangladesh</span>
          <div className="flex items-center gap-5"><a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-white"><Phone className="h-3.5 w-3.5" /> +880 1332-601180</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white"><Mail className="h-3.5 w-3.5" /> {EMAIL}</a></div>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_5px_22px_rgba(15,23,42,0.045)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-[78px] max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 xl:gap-5 xl:py-0">
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Dream Infinity Laboratory Solution home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-teal-700 text-white shadow-lg shadow-blue-950/15"><FlaskConical className="h-5 w-5" /></span>
            <span className="leading-none"><span className="block whitespace-nowrap text-[13px] font-black tracking-[0.08em] text-slate-950 sm:text-[15px]">DREAM INFINITY</span><span className="mt-1.5 block whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.07em] text-teal-700 sm:text-[9px] sm:tracking-[0.12em]">LABORATORY SOLUTION <span className="font-black text-blue-900">(DILS)</span></span></span>
          </a>

          {/* Desktop: search sits inside the main header for a premium B2B layout */}
          <form onSubmit={(event) => { event.preventDefault(); setShowSearchSuggestions(false); document.getElementById("product-results")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="mx-auto hidden min-w-[230px] max-w-[370px] flex-1 xl:flex">
            <div className="relative w-full">
              <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-1.5 transition duration-200 focus-within:border-teal-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-teal-600/10 hover:border-slate-300">
                <Search className="ml-2 h-[18px] w-[18px] shrink-0 text-slate-400" />
                <input value={search} onFocus={() => setShowSearchSuggestions(true)} onChange={(event) => { setSearch(event.target.value); setShowAllProducts(false); setShowSearchSuggestions(true); }} type="search" placeholder="Search products, brand or pack size" aria-label="Search laboratory products" aria-expanded={showSearchSuggestions && searchSuggestions.length > 0} className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-[12px] text-slate-800 outline-none placeholder:text-slate-400 2xl:text-[13px]" />
                <button type="submit" aria-label="Search products" className="inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"><Search className="h-4 w-4" /></button>
              </div>
              {showSearchSuggestions && search.trim() && <div className="absolute left-0 right-0 top-full z-[70] mt-2 max-h-[420px] overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">{searchSuggestions.length ? searchSuggestions.map((product) => <button type="button" key={`desktop-suggestion-${product.category}-${product.name}`} onMouseDown={(event) => event.preventDefault()} onClick={() => chooseSearchSuggestion(product)} className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"><span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">{product.imageUrl ? <img src={product.imageUrl} alt="" className="h-full w-full object-contain p-1" loading="lazy" /> : <FlaskConical className="h-5 w-5 text-blue-700" />}</span><span className="min-w-0 flex-1"><span className="block truncate text-[12px] font-bold text-slate-900">{product.name}</span><span className="mt-0.5 block truncate text-[10px] text-slate-500">{product.brand || "Brand not specified"} · {product.pack || "Pack size not specified"}</span><span className="block truncate text-[10px] text-blue-700">{product.category}</span></span></button>) : <p className="px-3 py-4 text-xs text-slate-500">No matching products found.</p>}</div>}
            </div>
          </form>

          <nav className="hidden shrink-0 items-center gap-4 xl:flex 2xl:gap-5">
            <a href="#home" className="text-[13px] font-bold text-blue-900">Home</a>
            <a href="#products" className="text-[13px] font-semibold text-slate-600 transition hover:text-teal-700">Products <ChevronDown className="ml-1 inline h-3.5 w-3.5" /></a>
            <a href="#services" className="text-[13px] font-semibold text-slate-600 transition hover:text-teal-700">Services</a>
            <a href="#about" className="text-[13px] font-semibold text-slate-600 transition hover:text-teal-700">About</a>
            <a href="#contact" className="text-[13px] font-semibold text-slate-600 transition hover:text-teal-700">Contact</a>
          </nav>

          <a href="#contact" className="hidden shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-bold text-white shadow-md shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 xl:inline-flex 2xl:px-4 2xl:text-sm">Request a Quote <ArrowRight className="h-4 w-4" /></a>
          <button type="button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu" aria-expanded={mobileMenu} className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 xl:hidden">{mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>

        {/* Tablet/mobile search stays immediately below the main header */}
        <div className="border-t border-slate-100 bg-slate-50/75 px-4 py-3 xl:hidden sm:px-6">
          <form onSubmit={(event) => { event.preventDefault(); setShowSearchSuggestions(false); document.getElementById("product-results")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="mx-auto flex max-w-2xl">
            <div className="relative w-full">
              <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm transition focus-within:border-teal-600 focus-within:ring-4 focus-within:ring-teal-600/10">
                <Search className="ml-2 h-[18px] w-[18px] shrink-0 text-slate-400" />
                <input value={search} onFocus={() => setShowSearchSuggestions(true)} onChange={(event) => { setSearch(event.target.value); setShowAllProducts(false); setShowSearchSuggestions(true); }} type="search" placeholder="Search products, brand or pack size..." aria-label="Search laboratory products" aria-expanded={showSearchSuggestions && searchSuggestions.length > 0} className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400" />
                <button type="submit" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-slate-950 px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-teal-800 sm:px-4 sm:text-sm"><Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" /><span>Search</span></button>
              </div>
              {showSearchSuggestions && search.trim() && <div className="absolute left-0 right-0 top-full z-[70] mt-2 max-h-[65vh] overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">{searchSuggestions.length ? searchSuggestions.map((product) => <button type="button" key={`mobile-suggestion-${product.category}-${product.name}`} onMouseDown={(event) => event.preventDefault()} onClick={() => chooseSearchSuggestion(product)} className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"><span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">{product.imageUrl ? <img src={product.imageUrl} alt="" className="h-full w-full object-contain p-1" loading="lazy" /> : <FlaskConical className="h-5 w-5 text-blue-700" />}</span><span className="min-w-0 flex-1"><span className="block truncate text-xs font-bold text-slate-900">{product.name}</span><span className="mt-0.5 block truncate text-[10px] text-slate-500">{product.brand || "Brand not specified"} · {product.pack || "Pack size not specified"}</span><span className="block truncate text-[10px] text-blue-700">{product.category}</span></span></button>) : <p className="px-3 py-4 text-xs text-slate-500">No matching products found.</p>}</div>}
            </div>
          </form>
        </div>

        {mobileMenu && <nav className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg xl:hidden">{[["Home", "#home"], ["Products", "#products"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMobileMenu(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-900">{label}</a>)}<a href="#contact" onClick={() => setMobileMenu(false)} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800">Request a Quote <ArrowRight className="h-4 w-4" /></a><div className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-500"><a href={`tel:${PHONE}`} className="flex items-center gap-2 px-3 py-2"><Phone className="h-3.5 w-3.5 text-teal-700" /> +880 1332-601180</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all px-3 py-2"><Mail className="h-3.5 w-3.5 text-teal-700" /> {EMAIL}</a></div></nav>}
      </header>

      <section id="home" className="relative overflow-hidden border-b border-slate-200/70 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:px-8 lg:py-14">
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-teal-800 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-teal-600" /> Laboratory & IVD Solutions</div>
            <h1 className="max-w-2xl text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-[52px]">Reliable products for <span className="text-teal-700">better laboratory</span> performance.</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Explore diagnostic reagents, IVD kits, laboratory equipment and essential consumables for hospitals, diagnostic centres and laboratories across Bangladesh.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3"><a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-teal-800">Explore Products <ArrowRight className="h-4 w-4" /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50">Talk to Our Team <MessageCircle className="h-4 w-4 text-teal-700" /></a></div>
            <div className="mt-7 grid max-w-lg grid-cols-3 gap-3 border-t border-slate-200 pt-5"><div><p className="text-lg font-black text-slate-950 sm:text-xl">IVD</p><p className="mt-0.5 text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">Diagnostic solutions</p></div><div><p className="text-lg font-black text-slate-950 sm:text-xl">B2B</p><p className="mt-0.5 text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">Business supply</p></div><div><p className="text-lg font-black text-slate-950 sm:text-xl">Nationwide</p><p className="mt-0.5 text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">Bangladesh support</p></div></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-teal-100 via-blue-100 to-slate-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-[#f7fbfc] via-white to-[#eaf4f7] p-5 shadow-[0_24px_70px_rgba(15,45,65,0.12)] sm:p-7">
              <div className="flex items-center justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-800">Your laboratory partner</p><p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">Products. Supply. Support.</p></div><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-800 shadow-sm ring-1 ring-slate-200"><ShieldPlus className="h-5 w-5" /></div></div>
              <div className="relative mt-5 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-2 sm:min-h-[340px] sm:p-3 lg:min-h-[390px]">
                <img
                  src="/dils-laboratory-partner.png"
                  alt="DILS laboratory partner product range: GenBioCal reagent kits and Rapid Labs diagnostic products"
                  className="relative z-10 block max-h-[420px] min-h-[250px] w-full rounded-xl object-contain sm:min-h-[300px] lg:min-h-[340px]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={(event) => {
                    const image = event.currentTarget;
                    // The screenshot showed the image inside a same-named folder under public.
                    // Try the standard public-root path as a fallback.
                    if (!image.dataset.fallbackTried) {
                      image.dataset.fallbackTried = "true";
                      image.src = "/dils-laboratory-partner.png/dils-laboratory-partner.png";
                    } else {
                      image.style.display = "none";
                      const fallback = image.parentElement?.querySelector<HTMLElement>('[data-hero-image-fallback]');
                      if (fallback) fallback.style.display = "flex";
                    }
                  }}
                />
                <div data-hero-image-fallback="true" className="absolute inset-3 hidden flex-col items-center justify-center rounded-xl border border-dashed border-sky-200 bg-white/90 p-5 text-center">
                  <FlaskConical className="mb-3 h-10 w-10 text-blue-700" />
                  <p className="text-sm font-extrabold text-slate-900">DILS Laboratory Products</p>
                  <p className="mt-1 max-w-xs text-xs leading-5 text-slate-600">Add the banner image to the public folder as dils-laboratory-partner.png to display it here.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2"><div className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center"><FlaskConical className="mx-auto h-4 w-4 text-teal-700" /><p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">Reagents & Kits</p></div><div className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center"><Microscope className="mx-auto h-4 w-4 text-blue-800" /><p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">Lab Equipment</p></div><div className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center"><PackageCheck className="mx-auto h-4 w-4 text-teal-700" /><p className="mt-1.5 text-[10px] font-bold text-slate-700 sm:text-xs">Consumables</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-[#f5f8fb] py-5 sm:py-7">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mb-2 mt-0 flex items-center justify-between gap-3 px-1">
            <div>
              <p className="text-sm font-extrabold text-slate-900 sm:text-base">Browse by Category</p>
              <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">Choose a category to filter products.</p>
            </div>
            <span className="hidden rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[11px] font-bold text-sky-800 sm:inline-flex">10 Categories</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto rounded-xl border border-slate-200/80 bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)] [scrollbar-width:thin]">
            {categoryTiles.map((tile) => {
              const Icon = tile.icon;
              const active = category === tile.name;
              return <button key={tile.name} type="button" onClick={() => { setCategory(tile.name); setShowAllProducts(false); }} className={`group flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-left transition duration-200 sm:min-h-[50px] ${active ? "border-teal-800 bg-slate-950 text-white shadow-sm" : "border-transparent bg-slate-50 text-slate-700 hover:border-teal-200 hover:bg-teal-50"}`}><Icon className={`h-4 w-4 shrink-0 ${active ? "text-teal-200" : "text-teal-800"}`} /><span className="whitespace-nowrap text-[10px] font-bold sm:text-[11px]">{tile.name}</span></button>;
            })}
          </div>

          <div id="product-results" className="scroll-mt-28 pt-7 sm:pt-9">
            <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[2px] text-sky-700">Product Portfolio</p><h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">{category}</h2><p className="mt-1 text-xs text-slate-500 sm:text-sm">{filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} available for quotation</p></div>
              <label className="flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 sm:self-auto"><SlidersHorizontal className="h-4 w-4" /><span>Sort by:</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-transparent font-semibold text-slate-800 outline-none"><option value="default">Default</option><option value="name">Product Name</option><option value="category">Category</option></select></label>
            </div>

            {filteredProducts.length > 0 ? <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProducts.map((product) => <article key={`${product.category}-${product.name}`} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_38px_rgba(15,23,42,0.13)]">
                  <div className="bg-gradient-to-br from-[#edf5ff] via-white to-[#e8f8f5] p-3 sm:p-4">
                    <div className="mb-3 flex min-h-7 items-center justify-between gap-2">
                      <span className="inline-flex max-w-[72%] items-center rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-blue-900 shadow-sm sm:text-[10px]">{product.category}</span>
                      <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-extrabold text-emerald-800 sm:text-[10px]">For quotation</span>
                    </div>
                    {product.imageUrl ? <button type="button" onClick={() => setExpandedProductName((current) => current === product.name ? null : product.name)} aria-pressed={expandedProductName === product.name} aria-label={expandedProductName === product.name ? `Show normal image size for ${product.name}` : `Enlarge image of ${product.name}`} className={`group/product relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-sky-100 bg-white p-2 text-left transition-[height] duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:p-3 ${expandedProductName === product.name ? "h-[390px] sm:h-[450px] lg:h-[480px]" : "h-[245px] sm:h-[275px] lg:h-[290px]"}`}><img src={product.imageUrl} alt={`${product.name} product packaging`} onError={(event) => { const image = event.currentTarget; image.style.display = "none"; const fallback = image.parentElement?.querySelector<HTMLElement>("[data-product-image-fallback]"); if (fallback) fallback.style.display = "flex"; }} className={`h-full w-full object-contain transition-transform duration-300 ${expandedProductName === product.name ? "scale-[1.02]" : "group-hover/product:scale-[1.04]"}`} loading="lazy" decoding="async" fetchPriority="low" /><div data-product-image-fallback="true" className="absolute inset-2 hidden items-center justify-center sm:inset-3"><ProductPackVisual name={product.name} /></div><span className="absolute bottom-2 right-2 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow-sm"><Eye className="mr-1 inline h-3.5 w-3.5" /> {expandedProductName === product.name ? "Enlarged" : "Click to enlarge"}</span></button> : <div className="flex h-[245px] w-full items-center justify-center overflow-hidden rounded-xl border border-sky-100 bg-white p-2 sm:h-[275px] lg:h-[290px]"><ProductPackVisual name={product.name} /></div>}
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="min-h-12 text-[16px] font-extrabold leading-6 text-slate-950 transition group-hover:text-blue-800 sm:text-[17px]">{product.name}</h3>
                    <div className="mt-3 space-y-0 rounded-xl border border-blue-100 bg-[#f3f7ff] px-3.5 py-2.5 text-sm">
                      <div className="flex items-start justify-between gap-3 py-1.5"><span className="shrink-0 text-[12px] font-bold text-[#0F766E]">Brand</span><span className="max-w-[65%] break-words text-right text-[13px] font-extrabold text-[#115E59]">{product.brand || "Please confirm"}</span></div>
                      <div className="h-px bg-blue-100" />
                      <div className="flex items-start justify-between gap-3 py-1.5"><span className="shrink-0 text-[12px] font-bold text-[#A16207]">Pack size</span><span className="max-w-[65%] break-words text-right text-[13px] font-extrabold text-[#854D0E]">{product.pack || "Please confirm"}</span></div>
                    </div>
                    <div className="mt-auto grid grid-cols-1 gap-2 pt-4">
                      <a href={quoteWhatsApp(product.name)} target="_blank" rel="noreferrer" style={{ backgroundColor: "#C8B66A", border: "1px solid #C8B66A", color: "#243044", opacity: 1, filter: "none" }} className="!inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[13px] font-extrabold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#C8B66A] focus:ring-offset-2"><MessageCircle className="h-4 w-4 shrink-0" /> Request a Quote <ArrowRight className="h-4 w-4 shrink-0" /></a>
                      <a href={quoteEmail(product.name)} style={{ backgroundColor: "#087443", border: "1px solid #087443", color: "#ffffff", opacity: 1, filter: "none" }} className="!inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[13px] font-extrabold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#087443] focus:ring-offset-2"><Mail className="h-4 w-4 shrink-0" /> Email Enquiry</a>
                    </div>
                  </div>
                </article>)}
              </div>
              {filteredProducts.length > 12 && <div className="mt-7 text-center"><button type="button" onClick={() => setShowAllProducts(!showAllProducts)} className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900">{showAllProducts ? "Show Less" : `View More Products (${filteredProducts.length - 12})`}<ChevronDown className={`h-4 w-4 transition ${showAllProducts ? "rotate-180" : ""}`} /></button></div>}
            </> : <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center"><FlaskConical className="mx-auto mb-3 h-8 w-8 text-slate-400" /><p className="font-semibold text-slate-800">No products found</p><p className="mt-1 text-sm text-slate-500">Try another search term or category.</p></div>}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200/70 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-700 sm:text-sm">About DILS</p><h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Dream Infinity Laboratory Solution</h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">Dream Infinity Laboratory Solution (DILS) supplies diagnostic, medical and laboratory products to hospitals, laboratories, diagnostic centres and healthcare professionals across Bangladesh.</p><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">Our business focuses on import, export, trading, distribution and supply of laboratory equipment, reagents, kits, consumables and healthcare products.</p></div>
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 sm:rounded-3xl sm:p-8"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-800 text-white"><FlaskConical className="h-6 w-6" /></div><h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Our Product Range</h3><div className="mt-5 grid gap-2 sm:grid-cols-2">{["Diagnostic & IVD Products", "Medical & Laboratory Equipment", "Reagents and Kits", "Laboratory Consumables", "Import & Distribution", "Healthcare Product Supply"].map((item) => <div key={item} className="flex items-center gap-3 rounded-lg bg-white/90 px-3 py-3 text-sm font-semibold text-slate-700 shadow-sm"><span className="h-2 w-2 shrink-0 rounded-full bg-cyan-600" />{item}</div>)}</div></div>
        </div>
      </section>

      <section id="services" className="bg-[#f5f8fb] py-12 sm:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mx-auto mb-8 max-w-3xl text-center"><p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-blue-700">What We Do</p><h2 className="text-2xl font-extrabold text-slate-900 sm:text-4xl">Our Business Solutions</h2><p className="mt-3 text-sm leading-6 text-slate-600">Professional product supply and laboratory support for the healthcare sector.</p></div><div className="grid gap-4 md:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <div key={service.title} className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-7"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-bold text-slate-900 sm:text-xl">{service.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p></div>; })}</div></div></section>

      <section id="contact" className="bg-slate-950 py-12 text-white sm:py-16"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-cyan-300">Contact DILS</p><h2 className="text-2xl font-extrabold sm:text-4xl">Request a Quotation</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Send us your product list and required quantities. We will confirm pricing, availability and delivery details.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><a href={quoteWhatsApp()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"><MessageCircle className="h-5 w-5" /> WhatsApp</a><a href={quoteEmail()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"><Mail className="h-5 w-5" /> Email Enquiry</a></div></div><div className="rounded-2xl bg-white p-5 text-slate-800 shadow-xl sm:p-7"><h3 className="mb-4 text-xl font-extrabold">Contact Information</h3><div className="space-y-3"><a href={`tel:${PHONE}`} className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50"><Phone className="mt-1 h-5 w-5 shrink-0 text-blue-700" /><div><p className="text-xs text-slate-500">Mobile Number</p><p className="mt-1 text-sm font-bold text-slate-900">+880 1332-601180</p></div></a><a href={`mailto:${EMAIL}`} className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50"><Mail className="mt-1 h-5 w-5 shrink-0 text-blue-700" /><div className="min-w-0"><p className="text-xs text-slate-500">Email Address</p><p className="mt-1 break-all text-sm font-bold text-slate-900">{EMAIL}</p></div></a><a href={quoteWhatsApp()} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50"><MessageCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-600" /><div><p className="text-xs text-slate-500">WhatsApp</p><p className="mt-1 text-sm font-bold text-emerald-600">Chat on WhatsApp</p></div></a><div className="flex items-start gap-3 rounded-xl p-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" /><div><p className="text-xs text-slate-500">Office Location</p><p className="mt-1 text-sm font-bold text-slate-900">Dhaka, Bangladesh</p></div></div></div></div></div></section>

      <footer className="bg-black py-8 text-slate-400 sm:py-10"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-10"><div><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white"><FlaskConical className="h-5 w-5" /></div><div><h3 className="font-extrabold text-white">DREAM INFINITY</h3><p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-cyan-400">Laboratory Solution</p></div></div><p className="mt-4 max-w-md text-sm leading-6">Dream Infinity Laboratory Solution (DILS) supplies diagnostic, medical and laboratory products across Bangladesh.</p></div><div><h3 className="mb-3 font-bold text-white">Quick Links</h3><div className="flex flex-col gap-2.5 text-sm"><a href="#about" className="hover:text-white">About Company</a><a href="#products" className="hover:text-white">Product Catalog</a><a href="#services" className="hover:text-white">Our Services</a><a href="#contact" className="hover:text-white">Contact</a></div></div><div><h3 className="mb-3 font-bold text-white">Contact</h3><div className="space-y-2.5 text-sm"><a href={`tel:${PHONE}`} className="block hover:text-white">+880 1332-601180</a><a href={`mailto:${EMAIL}`} className="block break-all hover:text-white">{EMAIL}</a><p>Dhaka, Bangladesh</p><a href="https://www.dilsinfobd.com" target="_blank" rel="noreferrer" className="block hover:text-white">www.dilsinfobd.com</a></div></div></div><div className="mt-7 border-t border-slate-800 pt-5 text-center text-xs text-slate-500 sm:mt-9 sm:pt-6 sm:text-sm">© 2026 Dream Infinity Laboratory Solution (DILS). All Rights Reserved.</div></div></footer>
      {expandedProduct?.imageUrl && (
        <div
          className="fixed inset-0 z-[2147482000] flex cursor-zoom-out items-center justify-center bg-slate-950/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image of ${expandedProduct.name}`}
          onClick={() => setExpandedProductName(null)}
        >
          <button
            type="button"
            onClick={() => setExpandedProductName(null)}
            aria-label="Close enlarged product image"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white text-slate-900 shadow-lg hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex max-h-[94vh] w-full max-w-6xl flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
            <img
              src={expandedProduct.imageUrl}
              alt={`${expandedProduct.name} enlarged product packaging`}
              className="max-h-[82vh] w-full cursor-zoom-out rounded-xl bg-white object-contain p-2 sm:p-4"
              onClick={() => setExpandedProductName(null)}
              decoding="async"
            />
            <p className="rounded-full bg-white px-4 py-2 text-center text-sm font-bold text-slate-900">{expandedProduct.name} · Click image or outside to close</p>
          </div>
        </div>
      )}
      {/* Persistent WhatsApp button: inline fixed positioning keeps it visible while scrolling. */}
      <a
        href={quoteWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DILS on WhatsApp"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "20px",
          zIndex: 2147483000,
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          whiteSpace: "nowrap",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,.35)",
          backgroundColor: "#16a34a",
          color: "#ffffff",
          padding: "12px 16px",
          boxShadow: "0 12px 35px rgba(22,163,74,.35)",
          textDecoration: "none",
        }}
      >
        <span aria-hidden="true" style={{ position: "relative", display: "inline-flex", width: "10px", height: "10px", flexShrink: 0, borderRadius: "50%", backgroundColor: "#ffffff", boxShadow: "0 0 0 4px rgba(255,255,255,.18)" }} />
        <MessageCircle aria-hidden="true" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
        <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: ".02em" }}>Chat with us</span>
      </a>
    </main>
  );
}
