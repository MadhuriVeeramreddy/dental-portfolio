"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      text: "Dr. Surya Teja is an excellent dentist. He explains the procedure very well and makes you feel comfortable. The staff is very cooperative and the clinic is hygienic.",
      name: "Srinivas K",
      company: "Dental Implant Patient",
      stars: "★★★★★",
    },
    {
      id: 2,
      rating: 5.0,
      text: "Best dental clinic in Kokapet! Dr. Surya Teja is very professional and caring. The root canal treatment was completely painless. Highly recommended!",
      name: "Priya Sharma",
      company: "Root Canal Patient",
      stars: "★★★★★",
    },
    {
      id: 3,
      rating: 5.0,
      text: "Excellent service and quality treatment. Dr. Surya takes time to explain everything clearly. The clinic maintains high standards of hygiene.",
      name: "Rahul Mehta",
      company: "Regular Patient",
      stars: "★★★★★",
    },
    {
      id: 4,
      rating: 5.0,
      text: "Very professional and friendly dentist. My tooth extraction was quick and painless. The entire staff is well-trained and courteous.",
      name: "Anjali Reddy",
      company: "Tooth Extraction",
      stars: "★★★★★",
    },
    {
      id: 5,
      rating: 5.0,
      text: "Outstanding dental care! Dr. Surya Teja is highly skilled and the clinic uses advanced technology. My smile makeover results are amazing!",
      name: "Karthik N",
      company: "Smile Makeover",
      stars: "★★★★★",
    },
    {
      id: 6,
      rating: 5.0,
      text: "The best dental experience I've ever had. Dr. Surya is very patient and explains each step. The clinic is modern and well-maintained.",
      name: "Deepika P",
      company: "Cosmetic Dentistry",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D8DC4' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div> */}
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-24">
            {/* Tooth Icon */}
            {/* <div className="flex justify-center mb-8">
              <svg
                className="w-16 h-16 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div> */}

            {/* Section Label */}
            <span className="bg-white text-primary px-4 py-2 rounded-full text-xs font-medium satoshi-font uppercase mb-4">
              Patient Testimonials
            </span>

            {/* Main Title */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-dark leading-tight mb-6 satoshi-font">
              Loved by Our Patients
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Here's what our patients are saying about their experience at
              ProDontics Dental Care
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 group transform hover:-translate-y-2"
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary satoshi-font">
                      {testimonial.rating}
                    </span>
                    <div className="flex text-yellow-400 text-xl">
                      {testimonial.stars}
                    </div>
                  </div>
                  {/* Small Tooth Icon */}
                  <svg
                    className="w-7 h-7 text-primary/40 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-700 satoshi-font leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark satoshi-font text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 satoshi-font text-base">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto shadow-lg border border-gray-100">
              <div className="flex justify-center mb-8">
                {/* <svg
                  className="w-12 h-12 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg> */}
              </div>
              <h3 className="text-xl sm:text-3xl font-normal text-gray-900 mb-3 sm:mb-5">
                Rated 5.0 on Google Reviews
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8 sm:mb-12">
                Join thousands of satisfied patients who trust Prodontics for
                their dental care needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center ">
                <a
                  href="#"
                  className="book-btn text-base px-8 py-3 satoshi-font inline-block"
                >
                  Book Your Appointment
                </a>
                <a
                  href="https://g.page/r/CUqBvB0w_XG-EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary border-2 border-primary book-btn text-base px-8 py-3 satoshi-font inline-block hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Write a Review
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-primary satoshi-font mb-3">
                5.0
              </div>
              <div className="text-gray-600 satoshi-font text-lg">
                Google Rating
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-primary satoshi-font mb-3">
                200+
              </div>
              <div className="text-gray-600 satoshi-font text-lg">
                5-Star Reviews
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-primary satoshi-font mb-3">
                15+
              </div>
              <div className="text-gray-600 satoshi-font text-lg">
                Years Experience
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-primary satoshi-font mb-3">
                3000+
              </div>
              <div className="text-gray-600 satoshi-font text-lg">
                Happy Patients
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-12 h-12 bg-primary/5 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary/15 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div> */}
    </section>
  );
}
