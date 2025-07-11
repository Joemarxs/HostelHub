
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUserType, setLoginUserType] = useState<'student' | 'owner'>('student');
  const [registerUserType, setRegisterUserType] = useState<'student' | 'owner'>('student');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    university: '',
    course: '',
    businessName: '',
    businessType: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(formData.email, formData.password, loginUserType);
      if (success) {
        toast({
          title: "Login successful!",
          description: "Welcome back to HostelHub Kenya",
        });
        
        // Redirect based on selected user type
        if (loginUserType === 'owner') {
          navigate('/landlord-dashboard');
        } else {
          navigate('/student-dashboard');
        }
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register({ ...formData, userType: registerUserType });
      if (success) {
        toast({
          title: "Registration successful!",
          description: "Welcome to HostelHub Kenya",
        });
        
        // Redirect based on user type
        if (registerUserType === 'owner') {
          navigate('/landlord-dashboard');
        } else {
          navigate('/student-dashboard');
        }
      } else {
        toast({
          title: "Registration failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary mb-4">
            <Building2 className="h-8 w-8" />
            <span>HostelHub</span>
            <span className="text-accent">Kenya</span>
          </Link>
          <p className="text-gray-600">
            Join Kenya's largest student accommodation platform
          </p>
        </div>

        {/* Auth Form */}      
        <div className="bg-white rounded-xl shadow-lg p-8">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>
            
            {/* Login Tab */}
            <TabsContent value="login">
              <div className="mb-6">
                <Label>Login as:</Label>
                <div className="flex gap-4 mt-2">
                  <Button
                    type="button"
                    variant={loginUserType === 'student' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setLoginUserType('student')}
                  >
                    Student
                  </Button>
                  <Button
                    type="button"
                    variant={loginUserType === 'owner' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setLoginUserType('owner')}
                  >
                    Hostel Owner
                  </Button>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      required
                      className="pl-10"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="pl-10 pr-10"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <div className="mb-6">
                <Label>I am a:</Label>
                <div className="flex gap-4 mt-2">
                  <Button
                    type="button"
                    variant={registerUserType === 'student' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setRegisterUserType('student')}
                  >
                    Student
                  </Button>
                  <Button
                    type="button"
                    variant={registerUserType === 'owner' ? 'default' : 'outline'}
                    className="flex-1"
                    onClick={() => setRegisterUserType('owner')}
                  >
                    Hostel Owner
                  </Button>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                {/* Common Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="registerEmail">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="registerEmail"
                      type="email"
                      required
                      className="pl-10"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="pl-10"
                      placeholder="+254 700 123 456"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                {/* Student-specific fields */}
                {registerUserType === 'student' && (
                  <>
                    <div>
                      <Label htmlFor="university">University/College</Label>
                      <Input
                        id="university"
                        type="text"
                        required
                        placeholder="University of Nairobi"
                        value={formData.university}
                        onChange={(e) => handleInputChange('university', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="course">Course of Study</Label>
                      <Input
                        id="course"
                        type="text"
                        placeholder="Computer Science"
                        value={formData.course}
                        onChange={(e) => handleInputChange('course', e.target.value)}
                      />
                    </div>
                  </>
                )}

                {/* Owner-specific fields */}
                {registerUserType === 'owner' && (
                  <>
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        type="text"
                        required
                        placeholder="Your Hostel Business Name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <Input
                        id="businessType"
                        type="text"
                        placeholder="Student Accommodation Provider"
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                      />
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="registerPassword">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="registerPassword"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="pl-10 pr-10"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      className="pl-10"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                  />
                  <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!formData.agreeToTerms || isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              By signing up, you're joining over 2,000 users who trust HostelHub Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
