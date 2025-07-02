
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Users, 
  TrendingUp, 
  DollarSign,
  Plus,
  Eye,
  Edit,
  MapPin,
  Star,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LandlordDashboard = () => {
  const { user } = useAuth();
  const [hostels] = useState([
    {
      id: 1,
      name: "Sunrise Student Lodge",
      location: "Westlands, Nairobi",
      totalRooms: 24,
      occupiedRooms: 20,
      monthlyRevenue: 170000,
      rating: 4.8,
      status: "active",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Green Valley Hostel",
      location: "Kileleshwa, Nairobi",
      totalRooms: 18,
      occupiedRooms: 15,
      monthlyRevenue: 112500,
      rating: 4.6,
      status: "active",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const [bookingRequests] = useState([
    {
      id: 1,
      studentName: "Jane Doe",
      hostelName: "Sunrise Student Lodge",
      roomType: "Single Room",
      requestDate: "2024-01-10",
      status: "pending"
    },
    {
      id: 2,
      studentName: "John Smith",
      hostelName: "Green Valley Hostel",
      roomType: "Shared Room",
      requestDate: "2024-01-08",
      status: "pending"
    }
  ]);

  const [recentPayments] = useState([
    {
      id: 1,
      studentName: "Alice Johnson",
      hostelName: "Sunrise Student Lodge",
      amount: 8500,
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      studentName: "Bob Wilson",
      hostelName: "Green Valley Hostel",
      amount: 7500,
      date: "2024-01-14",
      status: "completed"
    }
  ]);

  const totalRevenue = hostels.reduce((sum, hostel) => sum + hostel.monthlyRevenue, 0);
  const totalRooms = hostels.reduce((sum, hostel) => sum + hostel.totalRooms, 0);
  const occupiedRooms = hostels.reduce((sum, hostel) => sum + hostel.occupiedRooms, 0);
  const occupancyRate = Math.round((occupiedRooms / totalRooms) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}! 🏠
          </h1>
          <p className="text-gray-600">
            Manage your properties, track bookings, and monitor your business performance.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="properties">My Properties</TabsTrigger>
            <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{hostels.length}</div>
                  <p className="text-xs text-muted-foreground">Active hostels</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES {totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{occupancyRate}%</div>
                  <p className="text-xs text-muted-foreground">{occupiedRooms}/{totalRooms} rooms occupied</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{bookingRequests.length}</div>
                  <p className="text-xs text-muted-foreground">Awaiting your response</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Property
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    View All Bookings
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Upgrade to Premium
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{payment.studentName}</p>
                        <p className="text-sm text-gray-600">{payment.hostelName}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">KES {payment.amount.toLocaleString()}</p>
                        <Badge className="bg-green-100 text-green-800">Completed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Properties Tab */}
          <TabsContent value="properties">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Properties</h2>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Property
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostels.map((hostel) => (
                  <Card key={hostel.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={hostel.image} 
                        alt={hostel.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800">
                        {hostel.status.charAt(0).toUpperCase() + hostel.status.slice(1)}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{hostel.name}</h3>
                      <div className="flex items-center gap-1 text-gray-600 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hostel.location}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Occupancy</p>
                          <p className="font-semibold">{hostel.occupiedRooms}/{hostel.totalRooms} rooms</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Revenue</p>
                          <p className="font-semibold">KES {hostel.monthlyRevenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Rating</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{hostel.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Booking Requests Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Pending Booking Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookingRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{request.studentName}</p>
                        <p className="text-sm text-gray-600">{request.hostelName} - {request.roomType}</p>
                        <p className="text-xs text-gray-500">Requested on {request.requestDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Decline</Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{payment.studentName}</p>
                        <p className="text-sm text-gray-600">{payment.hostelName}</p>
                        <p className="text-xs text-gray-500">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">KES {payment.amount.toLocaleString()}</p>
                        <Badge className="bg-green-100 text-green-800">
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">KES {totalRevenue.toLocaleString()}</div>
                  <p className="text-green-600 text-sm">+12% from last month</p>
                  <p className="text-gray-600 text-sm mt-2">Monthly recurring revenue from all properties</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Occupancy Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{occupancyRate}%</div>
                  <p className="text-blue-600 text-sm">Average occupancy rate</p>
                  <p className="text-gray-600 text-sm mt-2">{occupiedRooms} out of {totalRooms} rooms occupied</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default LandlordDashboard;
