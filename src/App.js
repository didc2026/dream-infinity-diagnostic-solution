import {
  FlaskConical,
  TestTube,
  Microscope,
  HeartPulse,
  ShieldPlus,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    title: "IVD Reagents",
    description:
      "High-quality in vitro diagnostic reagents for accurate laboratory testing.",
    icon: FlaskConical,
  },
  {
    title: "Rapid Test Kits",
    description:
      "Fast and reliable testing kits for clinical and diagnostic applications.",
    icon: TestTube,
  },
  {
    title: "Laboratory Consumables",
    description:
      "Premium laboratory consumables designed for professional healthcare environments.",
    icon: Microscope,
  },
  {
    title: "Diagnostic Equipment",
    description:
      "Advanced diagnostic instruments for modern laboratories and hospitals.",
    icon: Stethoscope,
  },
  {
    title: "Hematology Products",
    description:
      "Specialized hematology products ensuring precision and efficiency.",
    icon: HeartPulse,
  },
  {
    title: "Immunology Products",
    description:
      "Innovative immunology solutions for healthcare professionals.",
    icon: ShieldPlus,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            DREAM INFINITY Diagnostic Solution
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Trusted Healthcare, Diagnostic & Laboratory Solution Provider
            Since 2010
          </p>

        </div>
      </section>

      {/* ABOUT COMPANY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              About Our Company
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              DREAM INFINITY Diagnostic Solution was established in 2010
              with the vision of delivering world-class diagnostic,
              healthcare, and laboratory solutions across Bangladesh.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We provide high-quality IVD reagents, rapid test kits,
              laboratory consumables, diagnostic equipment, hematology,
              and immunology products for hospitals, laboratories,
              diagnostic centers, and healthcare professionals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to quality, innovation, reliability, and
              customer satisfaction has made us a trusted name in the
              healthcare and diagnostic industry.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-blue-50 rounded-3xl p-10 shadow-xl">

            <h3 className="text-4xl font-bold text-gray-900 mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 w-7 h-7 mt-1" />

                <div>
                  <p className="text-gray-500 text-sm">
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
                  <p className="text-gray-500 text-sm">
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
                  <p className="text-gray-500 text-sm">
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
                  <p className="text-gray-500 text-sm">
                    Office Location
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
              Our commitment towards healthcare excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* MISSION */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                Our Mission
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                To provide reliable, innovative, and high-quality
                diagnostic and laboratory solutions that support
                healthcare professionals in delivering accurate and
                efficient patient care.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-700 mb-6">
                Our Vision
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                To become one of the leading healthcare and diagnostic
                solution providers in Bangladesh through innovation,
                quality service, and long-term customer trust.
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
              Delivering innovative diagnostic and healthcare solutions
              with precision, reliability, and international standards.
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

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800">
                  Learn More →
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-8 text-center">

        <h3 className="text-2xl font-semibold text-white mb-3">
          DREAM INFINITY Diagnostic Solution
        </h3>

        <p className="mb-2">
          Established in 2010 | Trusted Diagnostic & Healthcare Partner
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>
  );
}