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
} from "lucide-react";

const products = [
  {
    title: "Rapid Test Kit",
    description:
      "High-quality ICT based rapid diagnostic test kits for hospitals, laboratories, and diagnostic centers.",

    subcategories: [
      "Abbott ICT Devices",
      "Abbott Rapid Diagnostic Kits",
      "ACON ICT Devices",
      "Pregnancy Test Kit",
      "Dengue NS1 Test",
      "Malaria Test Kit",
      "Typhoid Test Kit",
      "HCV Rapid Test",
      "HBsAg Rapid Test",
      "HIV Rapid Test",
      "COVID-19 Rapid Test",
    ],

    icon: TestTube,
  },

  {
    title: "Clinical Biochemistry Product",
    description:
      "Advanced clinical biochemistry reagents and laboratory solutions for precise diagnostic analysis.",

    icon: FlaskConical,
  },

  {
    title: "Immunology Product",
    description:
      "Innovative immunology products developed for dependable diagnostic and healthcare applications.",

    icon: ShieldPlus,
  },

  {
    title: "Hematology Product",
    description:
      "Professional hematology products ensuring accurate blood analysis and laboratory efficiency.",

    icon: HeartPulse,
  },

  {
    title: "Molecular Biology Product",
    description:
      "Modern molecular biology solutions for advanced research, PCR, and diagnostic laboratory applications.",

    icon: Dna,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600 text-white overflow-hidden">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8">
            <p className="text-sm tracking-widest uppercase text-blue-100">
              Established Since 2010
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            DREAM INFINITY
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-cyan-100 mb-8">
            Diagnostic Solution
          </h2>

          <p className="text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10">
            Trusted Healthcare, Diagnostic & Laboratory Solution Provider
            delivering advanced medical technologies, laboratory excellence,
            and reliable diagnostic products across Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="https://wa.me/8801332601180"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:dimsinfo2010@gmail.com"
              className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300"
            >
              Contact by Email
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT COMPANY */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              About Our Company
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              DREAM INFINITY Diagnostic Solution was established in 2010
              with the commitment to providing reliable, innovative,
              and high-quality healthcare, laboratory, and diagnostic
              solutions throughout Bangladesh.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We supply advanced rapid test kits, clinical biochemistry
              products, immunology products, hematology products,
              molecular biology products, laboratory consumables,
              and diagnostic equipment for hospitals, laboratories,
              diagnostic centers, and healthcare professionals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our company focuses on quality, accuracy, innovation,
              and customer satisfaction to support modern healthcare
              and laboratory excellence.
            </p>

          </div>

          {/* CONTACT CARD */}
          <div className="bg-blue-50 rounded-3xl p-10 shadow-xl">

            <h3 className="text-4xl font-bold text-gray-900 mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">

                <Phone className="text-blue-600 w-7 h-7 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Mobile Number
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800">
                    +8801332601180
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail className="text-blue-600 w-7 h-7 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Email Address
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800">
                    dimsinfo2010@gmail.com
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <MessageCircle className="text-green-600 w-7 h-7 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/8801332601180"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-semibold text-green-600 hover:text-green-800"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="text-red-500 w-7 h-7 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Office Address
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800">
                    Dhaka, Bangladesh
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>

            <p className="text-xl text-gray-600">
              Dedicated to innovation, quality, and healthcare excellence.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                Our Mission
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver dependable, innovative, and high-quality
                diagnostic and laboratory products that help healthcare
                professionals ensure accurate diagnosis and efficient
                patient care.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                Our Vision
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                To become one of the most trusted diagnostic and
                healthcare solution providers in Bangladesh through
                quality service, innovation, and long-term customer trust.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCT SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering innovative healthcare and laboratory products
              with reliability, precision, and international quality standards.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <item.icon className="text-blue-600 w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* SUB CATEGORY */}
                {item.subcategories && (
                  <div className="space-y-2">

                    {item.subcategories.map((sub, i) => (
                      <div
                        key={i}
                        className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium"
                      >
                        {sub}
                      </div>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 pt-16 pb-10">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          {/* COMPANY INFO */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-5">
              DREAM INFINITY
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Trusted healthcare, laboratory, and diagnostic solution
              provider delivering advanced medical technologies and
              reliable laboratory products since 2010.
            </p>

            <div className="space-y-3 text-gray-400">

              <p>📞 +8801332601180</p>

              <p>✉️ dimsinfo2010@gmail.com</p>

              <p>📍 Dhaka, Bangladesh</p>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white transition">
                About Company
              </li>

              <li className="hover:text-white transition">
                Mission & Vision
              </li>

              <li className="hover:text-white transition">
                Product Categories
              </li>

              <li className="hover:text-white transition">
                Contact Information
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-5">
              Connect With Us
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Contact us anytime for healthcare and laboratory solutions.
            </p>

            <div className="flex flex-col gap-4">

              <a
                href="https://wa.me/8801332601180"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition"
              >
                WhatsApp Support
              </a>

              <a
                href="mailto:dimsinfo2010@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition"
              >
                Send Email
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">

          <p>
            © 2026 DREAM INFINITY Diagnostic Solution | All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
}