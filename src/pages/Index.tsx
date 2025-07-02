
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedHostels from '@/components/FeaturedHostels';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import WhyHostelHub from '@/components/WhyHostelHub';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedHostels />
      <TestimonialsCarousel />
      <WhyHostelHub />
      <Footer />
    </div>
  );
};

export default Index;
