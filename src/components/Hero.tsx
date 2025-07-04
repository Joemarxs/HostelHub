
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
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-700 min-h-[80vh] flex items-center overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Your Perfect Student Housing Awaits
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
              Student Stay
            </span> in Kenya
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover verified, affordable hostels tailored for students across Kenya. 
            <br className="hidden md:block" />
            Safe, comfortable, and budget-friendly accommodations await you.
          </p>
          
          {/* Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white/95 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Users className="h-6 w-6 text-accent" />
              <span className="font-semibold">2000+ Students</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Bed className="h-6 w-6 text-accent" />
              <span className="font-semibold">500+ Verified Hostels</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="font-semibold">15+ Cities</span>
            </div>
          </div>
        </div>

        {/* Enhanced Search Form */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10 max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Start Your Search
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <MapPin className="inline h-5 w-5 mr-2 text-primary" />
                Location
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, location: value})}>
                <SelectTrigger className="h-14 text-lg border-2 border-gray-200 hover:border-primary transition-colors">
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
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Bed className="inline h-5 w-5 mr-2 text-primary" />
                Room Type
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, roomType: value})}>
                <SelectTrigger className="h-14 text-lg border-2 border-gray-200 hover:border-primary transition-colors">
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
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <Filter className="inline h-5 w-5 mr-2 text-primary" />
                Price Range
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                <SelectTrigger className="h-14 text-lg border-2 border-gray-200 hover:border-primary transition-colors">
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
                className="w-full h-14 bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-bold text-lg rounded-xl mt-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="h-6 w-6 mr-3" />
                Search Hostels
              </Button>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-primary border-2 border-primary hover:bg-primary/10 font-semibold px-8"
              onClick={() => navigate('/hostels')}
            >
              View All Hostels
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-accent border-2 border-accent hover:bg-accent/10 font-semibold px-8"
              onClick={() => navigate('/post-hostel')}
            >
              Post Your Hostel
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 font-semibold px-8"
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