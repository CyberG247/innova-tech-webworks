
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    occupation: "",
    education: "",
    experience: "",
    motivation: "",
    courseId: "1", // This would come from the course selection
    courseName: "Web Development Fundamentals"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Store registration data in localStorage (in real app, this would go to a server)
    localStorage.setItem('registrationData', JSON.stringify(formData));
    
    toast({
      title: "Registration Successful!",
      description: "Your registration has been submitted. Proceeding to payment...",
    });

    // Redirect to payment page after a short delay
    setTimeout(() => {
      window.location.href = '/payment';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark">
      {/* Header */}
      <div className="bg-white dark:bg-innovatech-navy-dark border-b">
        <div className="container mx-auto px-4 py-6">
          <Link to="/courses" className="inline-flex items-center text-innovatech-red hover:text-innovatech-red-dark mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
          <h1 className="text-2xl font-bold dark:text-white">Course Registration</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Course Summary */}
          <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-innovatech-red mr-4" />
              <div>
                <h2 className="text-xl font-bold dark:text-white">{formData.courseName}</h2>
                <p className="text-gray-600 dark:text-gray-300">12 weeks • Beginner Level • ₦150,000</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Registration Form</h2>
            
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Address Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">Address</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">City</label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select your state</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Kano">Kano</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Background Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Background Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Current Occupation</label>
                  <Input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    placeholder="e.g., Student, Developer, Manager"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Highest Education Level</label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select education level</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Previous Experience (if any)
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Tell us about any relevant experience you have..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Why do you want to take this course?
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={3}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Share your motivation and goals..."
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="flex items-start">
                <input type="checkbox" required className="mt-1 mr-3" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  I agree to the <Link to="#" className="text-innovatech-red hover:underline">Terms and Conditions</Link> and 
                  <Link to="#" className="text-innovatech-red hover:underline ml-1">Privacy Policy</Link>
                </span>
              </label>
            </div>

            <Button type="submit" className="w-full bg-innovatech-red hover:bg-innovatech-red-dark text-lg py-3">
              Continue to Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
