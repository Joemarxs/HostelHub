import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Wifi, Car, Utensils, Shield, Grid, List } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchFilters from '@/components/SearchFilters';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hostels = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const allHostels = [
    {
      id: 1,
      name: "Sunrise Student Lodge",
      location: "Westlands, Nairobi",
      rating: 4.8,
      reviews: 124,
      price: "KES 8,500",
      originalPrice: "KES 10,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: true,
      amenities: ["WiFi", "Parking", "Kitchen", "Security", "Laundry", "Study Room"],
      description: "Modern student accommodation with fully furnished rooms and excellent amenities. Located near major universities with easy access to public transport.",
      roomTypes: ["Single Room", "Shared Room"],
      availability: "Available",
      verified: true,
      city: "nairobi",
      priceValue: 8500
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
      amenities: ["WiFi", "Gym", "Kitchen", "Laundry", "Security"],
      description: "Premium student housing with modern facilities and study areas.",
      roomTypes: ["Studio", "One Bedroom"],
      availability: "Limited",
      verified: true,
      city: "nairobi",
      priceValue: 12000
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
      description: "Affordable and comfortable student accommodation near major universities.",
      roomTypes: ["Shared Room", "Bedsitter"],
      availability: "Available",
      verified: true,
      city: "nairobi",
      priceValue: 6800
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
      description: "Beautiful student residence with panoramic views and modern amenities.",
      roomTypes: ["Single Room", "Double Room"],
      availability: "Available",
      verified: true,
      city: "kiambu",
      priceValue: 9200
    },
    {
      id: 5,
      name: "Student Palace",
      location: "Thika Road, Nairobi",
      rating: 4.3,
      reviews: 92,
      price: "KES 7,500",
      period: "per month",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: false,
      amenities: ["WiFi", "Security", "Kitchen"],
      description: "Comfortable student accommodation with basic amenities at affordable prices.",
      roomTypes: ["Shared Room", "Single Room"],
      availability: "Available",
      verified: true,
      city: "nairobi",
      priceValue: 7500
    },
    {
      id: 6,
      name: "Green Valley Hostel",
      location: "Ngong Road, Nairobi",
      rating: 4.4,
      reviews: 67,
      price: "KES 8,800",
      period: "per month",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      premium: false,
      amenities: ["WiFi", "Parking", "Common Area", "Security"],
      description: "Peaceful hostel environment perfect for focused studying.",
      roomTypes: ["Single Room", "Bedsitter"],
      availability: "Available",
      verified: true,
      city: "nairobi",
      priceValue: 8800
    }
  ];

  const handleSearch = (filters: {
    query: string;
    location: string;
    priceRange: string;
    roomType: string;
  }) => {
    setIsSearching(true);
    
    let filtered = allHostels.filter(hostel => {
      // Text search
      if (filters.query && !hostel.name.toLowerCase().includes(filters.query.toLowerCase()) && 
          !hostel.location.toLowerCase().includes(filters.query.toLowerCase())) {
        return false;
      }
      
      // Location filter
      if (filters.location && hostel.city !== filters.location) {
        return false;
      }
      
      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(p => parseInt(p.replace('+', '')));
        if (filters.priceRange.includes('+')) {
          if (hostel.priceValue < min) return false;
        } else {
          if (hostel.priceValue < min || hostel.priceValue > max) return false;
        }
      }
      
      return true;
    });
    
    setFilteredHostels(filtered);
    setTimeout(() => setIsSearching(false), 500);
  };

  const handleViewDetails = (hostelId: number) => {
    navigate(`/hostel/${hostelId}`);
  };

  const handleContact = (hostelId: number) => {
    // For now, navigate to details page where contact options are available
    navigate(`/hostel/${hostelId}`);
  };

  const displayHostels = filteredHostels.length > 0 || isSearching ? filteredHostels : allHostels;

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

  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'limited':
        return 'bg-yellow-100 text-yellow-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Student Accommodation
          </h1>
          <p className="text-gray-600 mb-8">
            Search from thousands of verified hostels across Kenya
          </p>
        </div>
        
        <SearchFilters onSearch={handleSearch} />
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {isSearching ? 'Searching...' : `${displayHostels.length} hostels found`}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isSearching ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for hostels...</p>
          </div>
        ) : displayHostels.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No hostels found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search filters.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {displayHostels.map((hostel) => (
              <div key={hostel.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                  <img 
                    src={hostel.image} 
                    alt={hostel.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
                  />
                  {hostel.premium && (
                    <Badge className="absolute top-3 left-3 bg-accent text-white">
                      Premium
                    </Badge>
                  )}
                  {hostel.verified && (
                    <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                      Verified
                    </Badge>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{hostel.rating}</span>
                  </div>
                </div>

                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {hostel.name}
                    </h3>
                    <Badge className={`ml-2 ${getAvailabilityColor(hostel.availability)}`}>
                      {hostel.availability}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {hostel.location}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {hostel.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hostel.amenities.slice(0, 4).map((amenity) => (
                      <div key={amenity} className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
                        {getAmenityIcon(amenity)}
                        <span className="text-xs text-gray-600">{amenity}</span>
                      </div>
                    ))}
                    {hostel.amenities.length > 4 && (
                      <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                        <span className="text-xs text-gray-600">+{hostel.amenities.length - 4} more</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{hostel.price}</span>
                        {hostel.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{hostel.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-gray-600 text-sm">/{hostel.period}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {hostel.reviews} reviews
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => handleViewDetails(hostel.id)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={() => handleContact(hostel.id)}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Hostels;
