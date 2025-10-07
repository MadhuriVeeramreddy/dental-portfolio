"use client";

import { useEffect, useRef, useState } from "react";

export default function Services() {
  const timelineProgressRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(new Set());
  const [activeItems, setActiveItems] = useState(new Set());

  const services = [
    {
      id: 1,
      position: "left",
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with advanced cosmetic procedures including teeth whitening, veneers, and smile makeovers that enhance your confidence and appearance.",
    },
    {
      id: 2,
      position: "right",
      title: "Dental Implants",
      description:
        "Restore missing teeth with permanent, natural-looking dental implants that function and feel like your own teeth, providing lasting solutions for tooth loss.",
    },
    {
      id: 3,
      position: "left",
      title: "Root Canal Treatment",
      description:
        "Save your natural teeth with pain-free root canal therapy that eliminates infection while preserving your tooth structure and oral health.",
    },
    {
      id: 4,
      position: "right",
      title: "Preventive Care",
      description:
        "Maintain optimal oral health with comprehensive preventive care including regular check-ups, cleanings, and personalized oral hygiene guidance.",
    },
    {
      id: 5,
      position: "left",
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with advanced cosmetic procedures including teeth whitening, veneers, and smile makeovers that enhance your confidence and appearance.",
    },
    {
      id: 6,
      position: "right",
      title: "Dental Implants",
      description:
        "Restore missing teeth with permanent, natural-looking dental implants that function and feel like your own teeth, providing lasting solutions for tooth loss.",
    },
    {
      id: 7,
      position: "left",
      title: "Root Canal Treatment",
      description:
        "Save your natural teeth with pain-free root canal therapy that eliminates infection while preserving your tooth structure and oral health.",
    },
    {
      id: 8,
      position: "right",
      title: "Preventive Care",
      description:
        "Maintain optimal oral health with comprehensive preventive care including regular check-ups, cleanings, and personalized oral hygiene guidance.",
    },
  ];

  useEffect(() => {
    const updateTimeline = () => {
      const timelineContainer = document.getElementById("timelineContainer");
      if (!timelineContainer || !timelineProgressRef.current) return;

      const scrollTop = window.scrollY;
      const containerTopAbs = timelineContainer.offsetTop;
      const containerHeight = timelineContainer.offsetHeight;
      const windowHeight = window.innerHeight;

      let progress =
        ((scrollTop + windowHeight - containerTopAbs) / containerHeight) * 100;
      progress = Math.min(Math.max(progress, 0), 100);
      timelineProgressRef.current.style.height = progress + "%";

      const newVisible = new Set();
      const newActive = new Set();

      serviceItemsRef.current.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemMiddle = itemRect.top + itemRect.height / 2;

        if (itemRect.top < windowHeight * 0.8) newVisible.add(index);
        if (itemMiddle > windowHeight * 0.2 && itemMiddle < windowHeight * 0.85)
          newActive.add(index);
      });

      const containerBottom = containerTopAbs + containerHeight;
      if (scrollTop + windowHeight >= containerBottom - 50) {
        newActive.clear();
        newActive.add(serviceItemsRef.current.length - 1);
      }

      setIsVisible(newVisible);
      setActiveItems(newActive);
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);

    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}

        <div className="flex flex-col items-center mb-24">
          {/* Badge */}
          <span className="bg-white text-primary px-4 py-2 rounded-full text-xs font-medium satoshi-font uppercase mb-4">
            My Services
          </span>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-dark leading-tight mb-6 satoshi-font">
            What Services Do I Provide?
          </h2>
        </div>

        {/* Timeline Container */}
        <div id="timelineContainer" className="relative py-12">
          {/* Timeline Line */}
          <div
            className="
              absolute 
              top-0 bottom-0 
              left-6 sm:left-1/2
              w-0.5 bg-gray-300 
              sm:transform sm:-translate-x-1/2
            "
          >
            <div
              ref={timelineProgressRef}
              className="absolute top-0 left-0 w-full bg-[#0D8DC4] transition-all duration-100 ease-out"
              style={{ height: "0%" }}
            />
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceItemsRef.current[index] = el)}
              className={`relative mb-12 transition-all duration-600 ease-out ${
                isVisible.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } 
              ${
                service.position === "left"
                  ? "sm:pr-1/2"
                  : "sm:pl-1/2 sm:text-left"
              }`}
            >
              {/* Service Dot */}
              <div
                className={`
                absolute top-1/2 transform -translate-y-1/2 z-10
                transition-all duration-300
                ${
                  activeItems.has(index)
                    ? "w-6 h-6 border-[#0D8DC4] shadow-[0_0_0_8px_rgba(13,141,196,0.2)]"
                    : "w-5 h-5 border-gray-300"
                }
                bg-white border-4 rounded-full
                left-[.9rem] sm:left-1/2 sm:-translate-x-1/2
              `}
              />

              {/* Connector */}
              <div
                className={`
                absolute top-1/2 h-0.5 transition-all duration-300
                left-[calc(1.5rem+12px)] sm:left-auto
                ${
                  service.position === "left"
                    ? "sm:right-1/2 sm:right-[calc(50%+50px)]"
                    : "sm:left-1/2 sm:left-[calc(50%+50px)]"
                }
                ${activeItems.has(index) ? "bg-blue-500" : "bg-gray-300"}
              `}
              />

              {/* Service Card */}
              <div
                className={`
                w-[85%] sm:w-[45%] bg-white p-6 sm:p-10 rounded-2xl shadow-lg 
                hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                ml-14 sm:ml-0
                ${service.position === "left" ? "sm:mr-auto" : "sm:ml-auto"}
              `}
              >
                <h3 className="text-xl sm:text-3xl font-normal text-gray-900 mb-3 sm:mb-5">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
