
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn, UserPlus, ChevronDown, MessageCircle, Phone, Mail, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Explore Hostels', href: '/hostels', current: location.pathname === '/hostels' },
    { name: 'Post Hostel', href: '/post-hostel', current: location.pathname === '/post-hostel' },
    { name: 'Premium', href: '/premium', current: location.pathname === '/premium' },
  ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    return user.userType === 'owner' ? '/landlord-dashboard' : '/student-dashboard';
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/my-uploads/Hostelhub_logo.png" 
                alt="HostelHub Kenya" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-emerald-700 hidden sm:block">HostelHub</span>
              <span className="text-red-600 font-bold hidden sm:block">KENYA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Support Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-gray-600 hover:text-primary">
                  Support
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                <DropdownMenuItem>
                  <Link to="/help-center" className="flex items-center w-full gap-2">
                    <Book className="h-4 w-4" />
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/faq" className="flex items-center w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/contact" className="flex items-center w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/support" className="flex items-center w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Live Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user?.firstName || 'Profile'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  <DropdownMenuItem>
                    <Link to={getDashboardLink()} className="flex items-center w-full">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/bookings" className="flex items-center w-full">
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current ? 'text-primary font-semibold' : 'text-gray-600'
                  } block px-3 py-2 text-base font-medium hover:text-primary transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Support Menu */}
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">Support</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/help-center"
                    className="block text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/faq"
                    className="block text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/support"
                    className="block text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Live Support
                  </Link>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link
                      to={getDashboardLink()}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleLogout}
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="w-full">
                      <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;