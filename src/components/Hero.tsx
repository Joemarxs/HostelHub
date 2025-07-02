
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Filter, Users, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Hero = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    roomType: '',
    priceRange: '',
    checkIn: '',
    checkOut: ''
  });

  const kenyanCities = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 
    'Malindi', 'Nyeri', 'Meru', 'Embu', 'Machakos', 'Kericho'
  ];

  const roomTypes = [
    'Single Room', 'Shared Room', 'Studio', 'One Bedroom', 'Bedsitter', 'Double Room'
  ];

  const priceRanges = [
    'KES 2,000 - 5,000', 'KES 5,000 - 10,000', 'KES 10,000 - 15,000', 
    'KES 15,000 - 20,000', 'KES 20,000+'
  ];

  const handleSearch = () => {
    console.log('Search initiated:', searchData);
    // Navigate to hostels page with search parameters
    const params = new URLSearchParams();
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.roomType) params.set('roomType', searchData.roomType);
    if (searchData.priceRange) params.set('priceRange', searchData.priceRange);
    
    navigate(`/hostels?${params.toString()}`);
  };

  return (
    <section className="relative bg-kenya-gradient bg-hero-pattern min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background overlay for better text readability */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-accent">Student Stay</span> in Kenya
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover verified, affordable hostels tailored for students across Kenya. 
            Safe, comfortable, and budget-friendly accommodations await you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/90 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>2000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-5 w-5" />
              <span>500+ Verified Hostels</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>15+ Cities</span>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Start Your Search
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, location: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {kenyanCities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Bed className="inline h-4 w-4 mr-1" />
                Room Type
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, roomType: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {roomTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="inline h-4 w-4 mr-1" />
                Price Range
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Any price" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range.toLowerCase()}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button 
                onClick={handleSearch}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg mt-7"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Hostels
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-primary border-primary hover:bg-primary/10"
              onClick={() => navigate('/hostels')}
            >
              View All Hostels
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-accent border-accent hover:bg-accent/10"
              onClick={() => navigate('/post-hostel')}
            >
              Post Your Hostel
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              onClick={() => navigate('/premium')}
            >
              Get Premium Listing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
