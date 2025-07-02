
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, MapPin, Home, DollarSign, FileText, Wifi, Car, Utensils, Shield, Dumbbell, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useHostels } from '@/contexts/HostelContext';

const HostelForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addHostel } = useHostels();
  
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    ownerName: '',
    contactInfo: '',
    roomType: '',
    amenities: [] as string[],
    images: [] as string[]
  });

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const kenyanCities = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 
    'Malindi', 'Nyeri', 'Meru', 'Embu', 'Machakos', 'Kericho'
  ];

  const roomTypes = [
    'Single Room', 'Shared Room', 'Studio', 'One Bedroom', 'Bedsitter', 'Double Room'
  ];

  const availableAmenities = [
    { id: 'wifi', label: 'WiFi', icon: <Wifi className="h-4 w-4" /> },
    { id: 'parking', label: 'Parking', icon: <Car className="h-4 w-4" /> },
    { id: 'kitchen', label: 'Kitchen', icon: <Utensils className="h-4 w-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'gym', label: 'Gym', icon: <Dumbbell className="h-4 w-4" /> },
    { id: 'common-area', label: 'Common Area', icon: <Users className="h-4 w-4" /> }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenityId]
        : prev.amenities.filter(a => a !== amenityId)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => 
      file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024
    );

    if (validFiles.length !== fileArray.length) {
      toast({
        title: "Invalid files",
        description: "Please upload only images under 5MB",
        variant: "destructive",
      });
    }

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, e.target!.result as string]
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.price || !formData.description) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Add hostel to context
      addHostel({
        name: formData.name,
        location: formData.location,
        price: formData.price,
        description: formData.description,
        amenities: formData.amenities,
        images: formData.images,
        ownerName: formData.ownerName,
        contactInfo: formData.contactInfo
      });

      toast({
        title: "Hostel submitted successfully!",
        description: "Your hostel listing has been submitted for review and will appear in the featured section.",
      });

      // Reset form
      setFormData({
        name: '',
        location: '',
        price: '',
        description: '',
        ownerName: '',
        contactInfo: '',
        roomType: '',
        amenities: [],
        images: []
      });

      // Navigate to home page to see the posted hostel
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your hostel. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Home className="h-5 w-5" />
          Basic Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Hostel Name *</Label>
            <Input
              id="name"
              required
              placeholder="Enter hostel name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Select onValueChange={(value) => handleInputChange('location', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {kenyanCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="price">Monthly Rent (KES) *</Label>
            <Input
              id="price"
              required
              placeholder="e.g., 8,500"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="roomType">Room Type</Label>
            <Select onValueChange={(value) => handleInputChange('roomType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                {roomTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            required
            rows={4}
            placeholder="Describe your hostel, its features, and what makes it special..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Amenities & Features
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {availableAmenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.id}
                checked={formData.amenities.includes(amenity.id)}
                onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
              />
              <Label htmlFor={amenity.id} className="flex items-center gap-2">
                {amenity.icon}
                {amenity.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Photos
        </h3>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">
            Drag and drop images here, or{' '}
            <label className="text-primary cursor-pointer hover:text-primary/80">
              browse files
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Maximum 5MB per image. PNG, JPG, GIF supported.
          </p>
        </div>

        {formData.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {formData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="ownerName">Owner/Manager Name</Label>
            <Input
              id="ownerName"
              placeholder="Your name"
              value={formData.ownerName}
              onChange={(e) => handleInputChange('ownerName', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="contactInfo">Contact Information</Label>
            <Input
              id="contactInfo"
              placeholder="Phone number or email"
              value={formData.contactInfo}
              onChange={(e) => handleInputChange('contactInfo', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          className="bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit for Review'}
        </Button>
      </div>
    </form>
  );
};

export default HostelForm;
