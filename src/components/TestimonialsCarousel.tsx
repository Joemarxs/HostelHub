
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "University of Nairobi Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "HostelHub made finding accommodation so easy! I found my perfect hostel within days. The verification process gave me confidence in my choice."
    },
    {
      id: 2,
      name: "John Kimani",
      role: "JKUAT Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "Great platform with genuine listings. The search filters helped me find exactly what I was looking for within my budget. Highly recommended!"
    },
    {
      id: 3,
      name: "Grace Achieng",
      role: "Strathmore University Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "The best student accommodation platform in Kenya. Clean interface, verified hostels, and excellent customer support. Found my dream hostel!"
    },
    {
      id: 4,
      name: "Peter Mwangi",
      role: "KU Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "HostelHub saved me so much time and stress. The detailed descriptions and photos helped me make the right choice without visiting multiple places."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students across Kenya say about HostelHub.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary/20 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
