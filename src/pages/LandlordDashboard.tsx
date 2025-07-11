import { useState } from 'react';
import LandlordDashboardHeader from '@/components/LandlordDashboardHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
  AlertCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  Filter
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const LandlordDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [bookingFilter, setBookingFilter] = useState('all');
  
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

  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      studentName: "Jane Doe",
      studentEmail: "jane.doe@student.ac.ke",
      studentPhone: "+254712345678",
      hostelName: "Sunrise Student Lodge",
      roomType: "Single Room",
      requestDate: "2024-01-10",
      moveInDate: "2024-02-01",
      duration: "1 semester",
      amount: 8500,
      status: "pending",
      university: "University of Nairobi"
    },
    {
      id: 2,
      studentName: "John Smith",
      studentEmail: "john.smith@student.ac.ke",
      studentPhone: "+254723456789",
      hostelName: "Green Valley Hostel",
      roomType: "Shared Room",
      requestDate: "2024-01-08",
      moveInDate: "2024-01-15",
      duration: "6 months",
      amount: 6000,
      status: "pending",
      university: "Kenyatta University"
    },
    {
      id: 3,
      studentName: "Mary Johnson",
      studentEmail: "mary.johnson@student.ac.ke",
      studentPhone: "+254734567890",
      hostelName: "Sunrise Student Lodge",
      roomType: "Single Room",
      requestDate: "2024-01-05",
      moveInDate: "2024-01-20",
      duration: "1 year",
      amount: 8500,
      status: "accepted",
      university: "Strathmore University"
    },
    {
      id: 4,
      studentName: "Peter Wilson",
      studentEmail: "peter.wilson@student.ac.ke",
      studentPhone: "+254745678901",
      hostelName: "Green Valley Hostel",
      roomType: "Shared Room",
      requestDate: "2024-01-03",
      moveInDate: "2024-01-10",
      duration: "3 months",
      amount: 6000,
      status: "declined",
      university: "USIU"
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

  const handleBookingAction = (bookingId: number, action: 'accept' | 'decline') => {
    setBookingRequests(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: action === 'accept' ? 'accepted' : 'declined' }
          : booking
      )
    );
    toast({
      title: `Booking ${action}ed`,
      description: `The booking request has been ${action}ed successfully.`,
    });
    console.log(`Booking ${bookingId} ${action}ed`);
  };

  const handleViewAllBookings = () => {
    setActiveTab('bookings');
  };

  const handleEditProperty = (propertyId: number) => {
    toast({
      title: "Edit Property",
      description: "Redirecting to property edit page...",
    });
    navigate(`/edit-property/${propertyId}`);
  };

  const handleViewPropertyDetails = (propertyId: number) => {
    toast({
      title: "View Details",
      description: "Loading property details...",
    });
    navigate(`/property-details/${propertyId}`);
  };

  const filteredBookings = bookingRequests.filter(booking => {
    if (bookingFilter === 'all') return true;
    return booking.status === bookingFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'accepted': return <CheckCircle className="h-4 w-4" />;
      case 'declined': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandlordDashboardHeader />
      
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="properties">My Properties</TabsTrigger>
            <TabsTrigger value="bookings">All Bookings</TabsTrigger>
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
                  <Button asChild className="flex items-center gap-2">
                    <Link to="/post-hostel">
                      <Plus className="h-4 w-4" />
                      Add New Property
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2" onClick={handleViewAllBookings}>
                    <Eye className="h-4 w-4" />
                    View All Bookings
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <Link to="/premium">
                      <TrendingUp className="h-4 w-4" />
                      Upgrade to Premium
                    </Link>
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
                <Button className="flex items-center gap-2" asChild>
                  <Link to="/post-hostel">
                    <Plus className="h-4 w-4" />
                    Add New Property
                  </Link>
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
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleEditProperty(hostel.id)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleViewPropertyDetails(hostel.id)}
                        >
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

          {/* Enhanced Booking Requests Tab */}
          <TabsContent value="bookings">
            <div className="space-y-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-2xl font-bold">All Booking Requests</h2>
                
                {/* Filter Buttons */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      variant={bookingFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setBookingFilter('all')}
                    >
                      All ({bookingRequests.length})
                    </Button>
                    <Button 
                      size="sm" 
                      variant={bookingFilter === 'pending' ? 'default' : 'outline'}
                      onClick={() => setBookingFilter('pending')}
                    >
                      Pending ({bookingRequests.filter(b => b.status === 'pending').length})
                    </Button>
                    <Button 
                      size="sm" 
                      variant={bookingFilter === 'accepted' ? 'default' : 'outline'}
                      onClick={() => setBookingFilter('accepted')}
                    >
                      Accepted ({bookingRequests.filter(b => b.status === 'accepted').length})
                    </Button>
                    <Button 
                      size="sm" 
                      variant={bookingFilter === 'declined' ? 'default' : 'outline'}
                      onClick={() => setBookingFilter('declined')}
                    >
                      Declined ({bookingRequests.filter(b => b.status === 'declined').length})
                    </Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Details</TableHead>
                        <TableHead>Property & Room</TableHead>
                        <TableHead>Move-in Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            <div className="space-y-1">
                              <p className="font-semibold">{request.studentName}</p>
                              <p className="text-sm text-gray-600">{request.university}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Mail className="h-3 w-3" />
                                <span>{request.studentEmail}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Phone className="h-3 w-3" />
                                <span>{request.studentPhone}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <p className="font-medium">{request.hostelName}</p>
                              <p className="text-sm text-gray-600">{request.roomType}</p>
                              <p className="text-xs text-gray-500">Duration: {request.duration}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{request.moveInDate}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Requested: {request.requestDate}
                            </p>
                          </TableCell>
                          <TableCell>
                            <p className="font-bold">KES {request.amount.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">per month</p>
                          </TableCell>
                          <TableCell>
                            <Badge className={`flex items-center gap-1 ${getStatusColor(request.status)}`}>
                              {getStatusIcon(request.status)}
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {request.status === 'pending' ? (
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  onClick={() => handleBookingAction(request.id, 'decline')}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Decline
                                </Button>
                                <Button 
                                  size="sm" 
                                  onClick={() => handleBookingAction(request.id, 'accept')}
                                  className="text-green-600 hover:text-green-700"
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Accept
                                </Button>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-500">
                                {request.status === 'accepted' ? 'Approved' : 'Rejected'}
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  {filteredBookings.length === 0 && (
                    <div className="text-center py-8">
                      <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No booking requests found for the selected filter.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
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
