export default function DreamInfinityWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-950 to-green-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">
              DREAM INFINITY
            </h1>
            <p className="text-xl tracking-widest mt-1">
              Diagnostic Solution
            </p>
            <p className="italic text-sm mt-2 text-green-100">
              Accurate Testing, Infinite Care
            </p>
          </div>

          <div className="mt-5 md:mt-0 text-sm leading-7 text-right">
            <p>📍 161/4/11, Paikpara, Mirpur-1, Dhaka</p>
            <p>📞 +880 1332-601180</p>
            <p>✉ dids2004@gmail.com</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 text-[220px] font-bold flex items-center justify-center text-blue-900 pointer-events-none">
          DIDS
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-950 leading-tight">
              Modern IVD & Diagnostic Solutions
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Dream Infinity Diagnostic Solution delivers trusted laboratory reagents,
              diagnostic instruments, medical consumables, and healthcare support
              for hospitals, laboratories, and diagnostic centers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-blue-950 hover:bg-blue-900 text-white px-7 py-4 rounded-2xl shadow-lg transition-all">
                Request Quotation
              </button>

              <button className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-7 py-4 rounded-2xl transition-all">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[30px] shadow-2xl border border-gray-100 p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                ["🧪", "IVD Reagents"],
                ["🔬", "Lab Instruments"],
                ["🧬", "Diagnostic Kits"],
                ["💙", "Medical Support"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition"
                >
                  <div className="text-5xl mb-3">{item[0]}</div>
                  <p className="font-semibold text-blue-900">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Professional laboratory and diagnostic healthcare solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "IVD Reagents",
                icon: "🧪",
                desc: "High quality diagnostic reagents for accurate laboratory testing and disease detection.",
              },
              {
                title: "Laboratory Instruments",
                icon: "🔬",
                desc: "Advanced medical laboratory instruments and healthcare technologies.",
              },
              {
                title: "Technical Support",
                icon: "⚙️",
                desc: "Reliable technical consultation, customer support, and laboratory guidance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-gray-100 p-10 rounded-[30px] shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-950 mb-5">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-8 text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950">
              Featured Products
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Trusted diagnostic and laboratory products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "LIAISON Measles IgM",
              "LIAISON Measles IgG",
              "TB Gold Diagnostic Kit",
              "CLIA Reagents",
              "Laboratory Consumables",
              "Medical Accessories",
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-5">🧬</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {product}
                </h3>
                <p className="text-gray-600 leading-7">
                  Professional healthcare and laboratory diagnostic solution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 mb-8">
              About Dream Infinity
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Dream Infinity Diagnostic Solution is committed to delivering
              trusted medical and laboratory diagnostic solutions with quality,
              integrity, and professional customer service.
            </p>

            <div className="mt-10 space-y-4 text-lg">
              <p>✔ Trusted Diagnostic Partner</p>
              <p>✔ Quality Healthcare Products</p>
              <p>✔ Reliable Customer Support</p>
              <p>✔ Modern Laboratory Technologies</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-green-600 rounded-[35px] p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">
              Why Choose Us?
            </h3>

            <div className="space-y-6 text-lg leading-8">
              <p>
                We provide reliable IVD products, professional laboratory
                solutions, and excellent after-sales support for hospitals,
                clinics, and diagnostic centers.
              </p>

              <p>
                Our mission is to ensure accurate testing and quality healthcare
                support through modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 text-[200px] font-bold flex items-center justify-center text-blue-900 pointer-events-none">
          DIDS
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-blue-950 mb-12">
            Contact Us
          </h2>

          <div className="bg-white rounded-[35px] shadow-2xl p-12 text-left border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10 text-lg leading-8">
              <div>
                <p>
                  <span className="font-bold text-blue-900">Company:</span>
                  <br />
                  Dream Infinity Diagnostic Solution
                </p>

                <p className="mt-6">
                  <span className="font-bold text-blue-900">Address:</span>
                  <br />
                  161/4/11, Paikpara, Mirpur-1, Dhaka
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold text-blue-900">Phone:</span>
                  <br />
                  +880 1332-601180
                </p>

                <p className="mt-6">
                  <span className="font-bold text-blue-900">Email:</span>
                  <br />
                  dids2004@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl shadow-lg text-lg transition-all">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10 text-center">
        <h3 className="text-2xl font-bold">
          Dream Infinity Diagnostic Solution
        </h3>

        <p className="mt-3 text-gray-300 italic">
          Accurate Testing, Infinite Care
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © 2026 Dream Infinity Diagnostic Solution. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
