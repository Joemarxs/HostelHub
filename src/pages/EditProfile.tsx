import { useState } from "react";
import Header from "@/components/Header";
import { useNavigate } from 'react-router-dom'; 
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const EditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    university: user?.university || "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const toggleShow = (field: "current" | "new" | "confirm") => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate mismatch in real time
    const newPwd = name === "newPassword" ? value : passwords.newPassword;
    const confirmPwd = name === "confirmNewPassword" ? value : passwords.confirmNewPassword;

    setPasswordMismatch(newPwd && confirmPwd && newPwd !== confirmPwd);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      passwords.newPassword &&
      passwords.confirmNewPassword &&
      passwords.newPassword !== passwords.confirmNewPassword
    ) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);

    // TODO: Submit profile & password update
    console.log("Profile Data:", formData);
    console.log("Image:", image);
    console.log("Password Change:", passwords);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Image Upload */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border bg-gray-100">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex justify-center items-center w-full h-full text-sm text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="profileImage" className="block mb-1">
                    Profile Image
                  </Label>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="university">University/College</Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Password Change Section */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showPassword.current ? "text" : "password"}
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={() => toggleShow("current")}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPassword.current ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword.new ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={() => toggleShow("new")}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword.new ?  <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              <div className="relative">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type={showPassword.confirm ? "text" : "password"}
                  value={passwords.confirmNewPassword}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={() => toggleShow("confirm")}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword.confirm ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
                {passwordMismatch && (
                  <p className="text-sm text-red-600 mt-1">
                    New passwords do not match.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button onClick={() => navigate("/student-dashboard")} variant="outline" type="button">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfile;
