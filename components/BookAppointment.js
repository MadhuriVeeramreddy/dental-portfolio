"use client";

import { useState } from "react";

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with your backend or email service
  };

  const services = [
    "General Dental Consultation",
    "Teeth Cleaning & Scaling",
    "Dental Implants",
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Orthodontic Treatment",
    "Dental Crowns & Bridges",
    "Dentures",
    "Pediatric Dentistry",
    "Emergency Dental Care",
  ];

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium satoshi-font uppercase tracking-widest mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl lg:text-5xl font-normal text-dark satoshi-font mb-6">
              Book Your Dental Appointment
            </h2>
            <p className="text-xl text-gray-600 satoshi-font font-light max-w-2xl mx-auto">
              Schedule your visit with Dr. Surya Teja and experience world-class
              dental care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-semibold text-dark satoshi-font mb-8">
                  Contact Dr. Surya Teja
                </h3>

                {/* Location */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark satoshi-font mb-2">
                      Clinic Location
                    </h4>
                    <p className="text-gray-600 satoshi-font">
                      ProDontics Dental Care
                      <br />
                      Dr. Surya Teja S.
                      <br />
                      Kokapet, Hyderabad
                      <br />
                      Telangana 500075
                    </p>
                    <a
                      href="https://maps.google.com/?q=ProDontics+Kokapet+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-700 transition-colors duration-300 text-sm font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark satoshi-font mb-2">
                      Call Dr. Surya Teja
                    </h4>
                    <a
                      href="tel:+919100000000"
                      className="text-gray-600 satoshi-font hover:text-primary transition-colors duration-300 block"
                    >
                      +91 91000 00000
                    </a>
                    <a
                      href="tel:+914000000000"
                      className="text-gray-600 satoshi-font hover:text-primary transition-colors duration-300 block"
                    >
                      +91 40000 00000
                    </a>
                  </div>
                </div>

                {/* Email & Website */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark satoshi-font mb-2">
                      Connect With Us
                    </h4>
                    <a
                      href="mailto:dr.suryateja@prodontics.in"
                      className="text-gray-600 satoshi-font hover:text-primary transition-colors duration-300 block"
                    >
                      dr.suryateja@prodontics.in
                    </a>
                    <a
                      href="https://prodontics.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 satoshi-font hover:text-primary transition-colors duration-300 block"
                    >
                      www.prodontics.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-dark satoshi-font mb-4">
                    Clinic Hours
                  </h4>
                  <div className="space-y-2 text-gray-600 satoshi-font">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="text-sm text-primary font-medium mt-2">
                      Emergency services available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                      >
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                      >
                        <option value="">Select a dental service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                    >
                      Preferred Date & Time *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                      />
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font">
                        <option value="">Preferred Time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 satoshi-font mb-2"
                    >
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 satoshi-font"
                      placeholder="Any specific dental concerns, medical history, or questions for Dr. Surya Teja..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold satoshi-font text-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Book Appointment with Dr. Surya Teja
                  </button>

                  <p className="text-sm text-gray-500 text-center satoshi-font">
                    Dr. Surya Teja will contact you within 24 hours to confirm
                    your appointment
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
