import BookAppointmentForm from "../components/BookAppointment";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PortfolioStats from "../components/PortfolioStats";
import Services from "../components/Services";
import TestimonialsSection from "../components/Testimonial";
import Vision from "../components/Vission";
import WhyChooseMe from "../components/WhyChooseMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Vision />
      <WhyChooseMe />
      <PortfolioStats />
      <Services />
      <TestimonialsSection />
      <BookAppointmentForm />
      <Footer />
    </div>
  );
}
