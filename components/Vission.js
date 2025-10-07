"use client";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaKitMedical } from "react-icons/fa6";
import { RiInfinityLine } from "react-icons/ri";
import { GiTooth } from "react-icons/gi";
export default function LegacySection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 satoshi-font uppercase tracking-wide">
            Vision
          </span>

          {/* Main Text with Icons */}
          <h2
            className="text-2xl lg:text-3xl xl:text-4xl font-normal text-gray-600 leading-relaxed satoshi-font"
            style={{ lineHeight: "1.7" }}
          >
            My legacy is the everlasting signature in your{" "}
            <span className="inline-flex items-center">
              smile
              <FaRegSmileBeam className="ml-2 text-[#0D8DC4] w-8 h-8 lg:w-10 lg:h-10" />
            </span>
            — a mark of trust, love, quality, and{" "}
            <span className="inline-flex items-center">
              surgical
              <GiTooth className="ml-2 text-primary w-6 h-6 lg:w-7 lg:h-7" />
            </span>{" "}
            expertise. With world-class specialists, advanced technology, and
            global dental labs, we create results that truly{" "}
            <span className="inline-flex items-center">
              last.
              <RiInfinityLine className="ml-2 text-primary w-6 h-6 lg:w-7 lg:h-7" />
            </span>
          </h2>

          {/* Optional Subtext */}
          {/* <p className="text-lg lg:text-xl text-dark mt-8 leading-relaxed satoshi-font font-light">
            For 15+ years, every patient's story has been my proudest
            accomplishment — and many more are yet to come.
          </p> */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
    </section>
  );
}
