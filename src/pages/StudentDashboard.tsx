
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Search, 
  BookOpen,
  User,
  Bell,
  CreditCard,
  Heart
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [activeBookings] = useState([
    {
      id: 1,
      hostelName: "Sunrise Student Lodge",
      roomType: "Single Room",
      location: "Westlands, Nairobi",
      checkIn: "2024-01-15",
      checkOut: "2024-12-15",
      status: "active",
      monthlyRent: 8500,
      nextPayment: "2024-02-15"
    }
  ]);

  const [savedHostels] = useState([
    {
      id: 1,
      name: "Green Valley Hostel",
      location: "Kileleshwa, Nairobi",
      price: "KES 7,500",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Campus View Lodge",
      location: "Karen, Nairobi",
      price: "KES 9,200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const [recentSearches] = useState([
    "Hostels near University of Nairobi",
    "Single rooms under KES 10,000",
    "Furnished hostels in Westlands"
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="text-gray-600">
            Manage your bookings, discover new hostels, and track your accommodation journey.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="saved">Saved Hostels</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{activeBookings.length}</div>
                  <p className="text-xs text-muted-foreground">Current accommodation</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Saved Hostels</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{savedHostels.length}</div>
                  <p className="text-xs text-muted-foreground">Wishlist items</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Feb 15</div>
                  <p className="text-xs text-muted-foreground">KES 8,500 due</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Unread messages</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Search className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{search}</span>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Search Again
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <div className="space-y-6">
              {activeBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{booking.hostelName}</CardTitle>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          {booking.location}
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Room Type</p>
                        <p className="font-semibold">{booking.roomType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Check-in</p>
                        <p className="font-semibold">{booking.checkIn}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Rent</p>
                        <p className="font-semibold">KES {booking.monthlyRent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Next Payment</p>
                        <p className="font-semibold">{booking.nextPayment}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button variant="outline">View Details</Button>
                      <Button>Pay Rent</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Hostels Tab */}
          <TabsContent value="saved">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedHostels.map((hostel) => (
                <Card key={hostel.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={hostel.image} 
                      alt={hostel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{hostel.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{hostel.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{hostel.rating}</span>
                      </div>
                      <span className="font-bold text-primary">{hostel.price}/month</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">View Details</Button>
                      <Button size="sm" variant="outline">Remove</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Rent Payment - January 2024</p>
                      <p className="text-sm text-gray-600">Sunrise Student Lodge</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">KES 8,500</p>
                      <Badge className="bg-green-100 text-green-800">Paid</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold">Deposit Payment</p>
                      <p className="text-sm text-gray-600">Sunrise Student Lodge</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">KES 17,000</p>
                      <Badge className="bg-green-100 text-green-800">Paid</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <p className="mt-1 p-2 bg-gray-50 rounded">{user?.firstName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <p className="mt-1 p-2 bg-gray-50 rounded">{user?.lastName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 p-2 bg-gray-50 rounded">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">User Type</label>
                      <p className="mt-1 p-2 bg-gray-50 rounded capitalize">{user?.userType}</p>
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
