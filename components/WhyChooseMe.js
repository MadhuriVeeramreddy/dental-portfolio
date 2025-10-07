"use client";

export default function WhyChooseMe() {
  const credentials = [
    { text: "B.D.S. (Dentistry)", color: "bg-[#E6F6FB] text-[#096F9A]" },
    {
      text: "Mastership in Oral Implantology",
      color: "bg-[#E6F6FB] text-[#096F9A]",
    },
    { text: "Chief Dental Surgeon", color: "bg-[#E6F6FB] text-[#096F9A]" },
    { text: "15+ Years Experience", color: "bg-[#E6F6FB] text-[#096F9A]" },
    {
      text: "Advanced Implantology Specialist",
      color: "bg-[#E6F6FB] text-[#096F9A]",
    },
  ];
  return (
    <section className="bg-gray-50 py-20 lg:py-28 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="lg:w-[53%] relative">
            <div className="relative">
              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/WhyChoose.jpg"
                  alt="Dr. Surya Teja performing dental procedure"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Signature Text Below Image */}
              <div className="text-center mt-6">
                <p
                  className="text-2xl lg:text-3xl text-primary"
                  style={{ fontFamily: "Give Your Glory, cursive" }}
                >
                  Dr. Surya Teja
                </p>
              </div>

              {/* Social Media Icons - Top Left */}
              <div className="absolute top-4 left-4 flex flex-col space-y-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-[47%]">
            {/* Badge */}
            <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-xs font-medium mb-4 satoshi-font uppercase tracking-wider">
              Meet Your Dentist
            </span>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-dark leading-tight mb-6 satoshi-font">
              Why Choose Me For Your Dental Care?
            </h2>

            {/* Description */}
            <p
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed satoshi-font"
              style={{ lineHeight: "1.8" }}
            >
              I believe your dental care should be precise, painless, and
              personalized. My expertise in Oral Implantology, cosmetic
              dentistry, root canal therapy, and more ensures you get treatments
              tailored just for you. Most importantly, I listen to your concerns
              and explain every step so you feel confident and comfortable.
            </p>

            {/* Credentials Tags */}
            <div className="flex flex-wrap gap-3">
              {credentials.map((credential, index) => (
                <span
                  key={index}
                  className={`${credential.color} px-4 py-2 rounded-full text-xs font-medium satoshi-font inline-flex items-center`}
                >
                  <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                  {credential.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
