"use client";

export default function Hero() {
  const features = [
    { text: "Convenient", position: "top-4 right-4 lg:top-8 lg:right-10" },
    { text: "Caring", position: "top-1/3 left-4 lg:top-1/3 lg:left-8" },
    {
      text: "Trusthy",
      position: "bottom-12 right-4 lg:bottom-20 lg:right-16",
    },
  ];

  return (
    <section className="bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="lg:w-[45%]">
            {/* Badge */}
            <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 satoshi-font uppercase tracking-wide">
              Online Therapy
            </span>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-dark leading-tight mb-6 goodtimes-font">
              Welcome to My Dental Care Practice in Kokapet, Hyderabad
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed satoshi-font"
              style={{ lineHeight: "1.7" }}
            >
              Hello! I'm{" "}
              <strong className="font-semibold text-dark">
                Dr. Surya Teja S.
              </strong>
              , your trusted dental surgeon with over 15 years of experience in
              providing advanced dental care here in Kokapet and across
              Hyderabad. I'm glad you're considering me for your smile's health
              and transformation.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="book-btn text-base px-8 py-3 satoshi-font inline-block"
            >
              Book A Session
            </a>
          </div>

          {/* Hero Image */}
          <div className="lg:w-[55%] relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/hero.JPG"
                alt="Dr. Surya Teja S. - Dental Surgeon"
                className="w-full h-auto object-cover object-right min-h-[450px]"
              />

              {/* Floating Feature Tags */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute ${feature.position} bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg satoshi-font font-medium text-sm text-dark animate-float`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${3 + index * 0.5}s`,
                  }}
                >
                  {feature.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
