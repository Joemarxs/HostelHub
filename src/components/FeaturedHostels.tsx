
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Utensils, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useHostels } from '@/contexts/HostelContext';

const FeaturedHostels = () => {
  const navigate = useNavigate();
  const { hostels } = useHostels();

  const defaultHostels = [
    {
      id: 1,
      name: "Sunrise Student Lodge",
      location: "Westlands, Nairobi",
      rating: 4.8,
      reviews: 124,
      price: "KES 8,500",
      period: "per month",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: true,
      amenities: ["WiFi", "Parking", "Kitchen", "Security"],
      description: "Modern student accommodation with fully furnished rooms and excellent amenities."
    },
    {
      id: 2,
      name: "University Heights",
      location: "Karen, Nairobi",
      rating: 4.6,
      reviews: 89,
      price: "KES 12,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: true,
      amenities: ["WiFi", "Gym", "Kitchen", "Laundry"],
      description: "Premium student housing with modern facilities and study areas."
    },
    {
      id: 3,
      name: "Scholar's Haven",
      location: "Kiambu Road, Nairobi",
      rating: 4.5,
      reviews: 156,
      price: "KES 6,800",
      period: "per month",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: false,
      amenities: ["WiFi", "Security", "Common Area"],
      description: "Affordable and comfortable student accommodation near major universities."
    },
    {
      id: 4,
      name: "Campus View Residence",
      location: "Kikuyu, Kiambu",
      rating: 4.7,
      reviews: 78,
      price: "KES 9,200",
      period: "per month",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: true,
      amenities: ["WiFi", "Parking", "Kitchen", "Study Room"],
      description: "Beautiful student residence with panoramic views and modern amenities."
    }
  ];

  // Combine posted hostels with default ones
  const userPostedHostels = hostels.map(hostel => ({
    id: parseInt(hostel.id),
    name: hostel.name,
    location: hostel.location,
    rating: 4.0, // Default rating for new hostels
    reviews: 0,
    price: hostel.price,
    period: "per month",
    image: hostel.images[0] || "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    premium: false,
    amenities: hostel.amenities,
    description: hostel.description
  }));

  const allHostels = [...userPostedHostels, ...defaultHostels];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      case 'kitchen':
        return <Utensils className="h-4 w-4" />;
      case 'security':
        return <Shield className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const handleViewDetails = (hostelId: number) => {
    navigate(`/hostel/${hostelId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Premium</span> Hostels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated student accommodations across Kenya. These verified hostels 
            offer the best combination of comfort, affordability, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {allHostels.slice(0, 4).map((hostel) => (
            <div key={hostel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
              <div className="relative">
                <img 
                  src={hostel.image} 
                  alt={hostel.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {hostel.premium && (
                  <Badge className="absolute top-3 left-3 bg-accent text-white">
                    Premium
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{hostel.rating}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {hostel.name}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  {hostel.location}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {hostel.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hostel.amenities.slice(0, 3).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                      {getAmenityIcon(amenity)}
                      <span className="text-xs text-gray-600">{amenity}</span>
                    </div>
                  ))}
                  {hostel.amenities.length > 3 && (
                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                      <span className="text-xs text-gray-600">+{hostel.amenities.length - 3} more</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-primary">{hostel.price}</span>
                    <span className="text-gray-600 text-sm">/{hostel.period}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {hostel.reviews} reviews
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 mt-auto"
                  onClick={() => handleViewDetails(hostel.id)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => navigate('/hostels')}
          >
            View All Featured Hostels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHostels;
