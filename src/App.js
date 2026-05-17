import { useState } from "react";

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
  ChevronUp,
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

    subcategories: [
      "Biochemistry Analyzer",
      "Clinical Chemistry Reagents",
      "Calibrator",
      "Quality Control Serum",
    ],

    icon: FlaskConical,
  },

  {
    title: "Immunology Product",
    description:
      "Innovative immunology products developed for dependable diagnostic and healthcare applications.",

    subcategories: [
      "ELISA Kits",
      "Hormone Test Kits",
      "Tumor Marker Kits",
      "Immunology Reagents",
    ],

    icon: ShieldPlus,
  },

  {
    title: "Hematology Product",
    description:
      "Professional hematology products ensuring accurate blood analysis and laboratory efficiency.",

    subcategories: [
      "Hematology Analyzer",
      "CBC Reagents",
      "Blood Control",
      "Diluent & Cleaner",
    ],

    icon: HeartPulse,
  },

  {
    title: "Molecular Biology Product",
    description:
      "Modern molecular biology solutions for advanced research, PCR, and diagnostic laboratory applications.",

    subcategories: [
      "PCR Kits",
      "DNA Extraction Kits",
      "RNA Extraction Kits",
      "Real-Time PCR Reagents",
    ],

    icon: Dna,
  },
];

export default function App() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-600 text-white overflow-hidden">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-7">
            <p className="text-xs tracking-[3px] uppercase text-blue-100 font-medium">
              Established Since 2010
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            DREAM INFINITY
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-cyan-100 mb-6">
            Diagnostic Solution
          </h2>

          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Trusted Healthcare, Diagnostic & Laboratory Solution Provider
            delivering advanced medical technologies, laboratory excellence,
            and reliable diagnostic products across Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/8801332601180"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:dimsinfo2010@gmail.com"
              className="bg-white text-blue-800 hover:bg-blue-100 px-7 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
            >
              Contact by Email
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT COMPANY */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7">
              About Our Company
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
              DREAM INFINITY Diagnostic Solution was established in 2010
              with the commitment to providing reliable, innovative,
              and high-quality healthcare, laboratory, and diagnostic
              solutions throughout Bangladesh.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
              We supply advanced rapid test kits, clinical biochemistry
              products, immunology products, hematology products,
              molecular biology products, laboratory consumables,
              and diagnostic equipment for hospitals, laboratories,
              diagnostic centers, and healthcare professionals.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our company focuses on quality, accuracy, innovation,
              and customer satisfaction to support modern healthcare
              and laboratory excellence.
            </p>

          </div>

          {/* CONTACT CARD */}
          <div className="bg-blue-50 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">

              <div className="flex items-start gap-4">

                <Phone className="text-blue-600 w-6 h-6 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Mobile Number
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800">
                    +8801332601180
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail className="text-blue-600 w-6 h-6 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Email Address
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800">
                    dimsinfo2010@gmail.com
                  </h4>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <MessageCircle className="text-green-600 w-6 h-6 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/8801332601180"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-green-600 hover:text-green-800"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="text-red-500 w-6 h-6 mt-1" />

                <div>
                  <p className="text-sm text-gray-500">
                    Office Address
                  </p>

                  <h4 className="text-lg font-semibold text-gray-800">
                    Dhaka, Bangladesh
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCT SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click any product category to explore available diagnostic products.
            </p>

          </div>

          <div className="space-y-6">

            {products.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden"
              >

                {/* HEADER */}
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-blue-50 transition-all"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <item.icon className="text-blue-600 w-7 h-7" />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <div>
                    {openIndex === index ? (
                      <ChevronUp className="text-blue-600 w-6 h-6" />
                    ) : (
                      <ChevronDown className="text-blue-600 w-6 h-6" />
                    )}
                  </div>

                </button>

                {/* SUB CATEGORY */}
                {openIndex === index && (

                  <div className="px-8 pb-8">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                      {item.subcategories.map((sub, i) => (

                        <div
                          key={i}
                          className="bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium hover:bg-blue-100 transition"
                        >
                          {sub}
                        </div>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 pt-14 pb-8">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-2xl font-bold text-white mb-4">
              DREAM INFINITY
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
              Trusted healthcare, laboratory, and diagnostic solution
              provider delivering advanced medical technologies and
              reliable laboratory products since 2010.
            </p>

            <div className="space-y-2 text-gray-400 text-sm">

              <p>📞 +8801332601180</p>

              <p>✉️ dimsinfo2010@gmail.com</p>

              <p>📍 Dhaka, Bangladesh</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li className="hover:text-white transition">
                About Company
              </li>

              <li className="hover:text-white transition">
                Product Categories
              </li>

              <li className="hover:text-white transition">
                Contact Information
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Us
            </h3>

            <p className="text-gray-400 mb-5 leading-relaxed text-sm">
              Contact us anytime for healthcare and laboratory solutions.
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://wa.me/8801332601180"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-center transition"
              >
                WhatsApp Support
              </a>

              <a
                href="mailto:dimsinfo2010@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold text-center transition"
              >
                Send Email
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">

          <p>
            © 2026 DREAM INFINITY Diagnostic Solution | All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
}