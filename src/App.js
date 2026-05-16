export default function App() {
  const products = [
    "IVD Reagents",
    "Rapid Test Kits",
    "Laboratory Consumables",
    "Diagnostic Equipment",
    "Hematology Products",
    "Immunology Products",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-950 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl md:text-6xl font-bold">
            DREAM INFINITY
          </h1>

          <p className="text-2xl mt-4 text-blue-100">
            Diagnostic Solution
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Professional healthcare and diagnostic solutions for laboratories,
            hospitals and healthcare institutions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold">
              Contact Us
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              Our Products
            </button>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Us
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              DREAM INFINITY Diagnostic Solution provides reliable
              laboratory reagents, diagnostic products, and healthcare
              support solutions with quality and professionalism.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-semibold mb-6">
              Why Choose Us
            </h3>

            <div className="space-y-4">

              <div className="bg-blue-50 rounded-xl p-4">
                Trusted Diagnostic Supply
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                Quality Healthcare Products
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                Technical Support
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                Fast Delivery Service
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Product Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-6">🧪</div>

                <h3 className="text-2xl font-semibold mb-4">
                  {product}
                </h3>

                <p className="text-gray-600 leading-7">
                  Professional healthcare and diagnostic solutions.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-blue-950 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Contact Us
          </h2>

          <div className="space-y-4 text-lg">

            <p>📍 161/4/11, Paikpara, Mirpur-1, Dhaka</p>

            <p>📞 +880 1332-601180</p>

            <p>✉️ dids2004@gmail.com</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-6 text-center">
        © 2026 DREAM INFINITY Diagnostic Solution
      </footer>

    </div>
  );
}