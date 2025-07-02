
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Wifi, Car, Utensils, Shield, Phone, Mail, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HostelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock hostel data with multiple images - in real app, this would come from API/context
  const hostel = {
    id: 1,
    name: "Sunrise Student Lodge",
    location: "Westlands, Nairobi",
    rating: 4.8,
    reviews: 124,
    price: "KES 8,500",
    originalPrice: "KES 10,000",
    period: "per month",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    premium: true,
    amenities: ["WiFi", "Parking", "Kitchen", "Security", "Laundry", "Study Room", "Gym", "Common Area"],
    description: "Modern student accommodation with fully furnished rooms and excellent amenities. Located near major universities with easy access to public transport. Perfect for students looking for a comfortable and secure living environment.",
    roomTypes: ["Single Room", "Shared Room"],
    availability: "Available",
    verified: true,
    ownerName: "John Doe",
    ownerPhone: "+254 700 123 456",
    ownerEmail: "john@example.com"
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-5 w-5" />;
      case 'parking':
        return <Car className="h-5 w-5" />;
      case 'kitchen':
        return <Utensils className="h-5 w-5" />;
      case 'security':
        return <Shield className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const handleContact = (method: string) => {
    switch (method) {
      case 'phone':
        window.open(`tel:${hostel.ownerPhone}`);
        break;
      case 'email':
        window.open(`mailto:${hostel.ownerEmail}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${hostel.ownerPhone.replace(/\s/g, '')}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Hostels
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {hostel.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image} 
                        alt={`${hostel.name} - Room ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {index + 1} / {hostel.images.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {hostel.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-16 object-cover rounded cursor-pointer opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Hostel Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{hostel.name}</h1>
                <div className="flex gap-2">
                  {hostel.premium && (
                    <Badge className="bg-accent text-white">Premium</Badge>
                  )}
                  {hostel.verified && (
                    <Badge className="bg-green-500 text-white">Verified</Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                {hostel.location}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{hostel.rating}</span>
                  <span className="text-gray-600">({hostel.reviews} reviews)</span>
                </div>
                <Badge className="bg-green-100 text-green-800">{hostel.availability}</Badge>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{hostel.price}</span>
                  {hostel.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{hostel.originalPrice}</span>
                  )}
                </div>
                <span className="text-gray-600">/{hostel.period}</span>
              </div>

              <p className="text-gray-700 mb-6">{hostel.description}</p>

              {/* Contact Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <Button onClick={() => handleContact('phone')} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button onClick={() => handleContact('email')} variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button onClick={() => handleContact('whatsapp')} variant="outline" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hostel.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  {getAmenityIcon(amenity)}
                  <span className="text-sm font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Room Types */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Available Room Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hostel.roomTypes.map((type) => (
                <Badge key={type} variant="outline" className="px-3 py-1">
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default HostelDetails;
