import { useState, useRef } from "react";
import AdminLogin from "@/components/AdminLogin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, GraduationCap, DollarSign, FileText, Upload, Plus, Trash2, Edit, Bell, CheckCircle, Clock, TrendingUp, Eye, Download } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from "recharts";
import { useToast } from "@/hooks/use-toast";
import Certificate from "@/components/Certificate";
import { useReactToPrint } from "react-to-print";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  const certificateRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", course: "Web Development", status: "Active", admissionDate: "2024-01-15", progress: 75, lastActive: "2024-06-01" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Business Strategy", status: "Completed", admissionDate: "2024-02-01", progress: 100, lastActive: "2024-05-30" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", course: "Corporate Law", status: "Active", admissionDate: "2024-03-10", progress: 45, lastActive: "2024-06-02" },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, student: "John Doe", course: "Web Development", amount: "₦200,000", status: "Paid", date: "2024-01-15", method: "Bank Transfer" },
    { id: 2, student: "Jane Smith", course: "Business Strategy", amount: "₦180,000", status: "Paid", date: "2024-02-01", method: "Card Payment" },
    { id: 3, student: "Mike Johnson", course: "Corporate Law", amount: "₦150,000", status: "Pending", date: "2024-03-10", method: "Bank Transfer" },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, type: "payment", message: "John Doe paid ₦200,000 for Web Development course", time: "2 hours ago", read: false },
    { id: 2, type: "enrollment", message: "New student Mike Johnson enrolled in Corporate Law", time: "5 hours ago", read: false },
    { id: 3, type: "completion", message: "Jane Smith completed Business Strategy course", time: "1 day ago", read: true },
    { id: 4, type: "payment", message: "Sarah Wilson paid ₦180,000 for Digital Marketing course", time: "2 days ago", read: true },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, title: "Web Development", students: 45, revenue: "₦9,000,000", completion: 78, rating: 4.8 },
    { id: 2, title: "Business Strategy", students: 32, revenue: "₦5,760,000", completion: 85, rating: 4.9 },
    { id: 3, title: "Corporate Law", students: 28, revenue: "₦4,200,000", completion: 71, rating: 4.7 },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    course: "",
    status: "Active"
  });

  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "",
    duration: "",
    price: "",
    description: "",
    curriculum: ""
  });

  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setCertificateSelectedCourse] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  // Certificate print handler
  const handlePrintCertificate = useReactToPrint({
    contentRef: certificateRef,
    documentTitle: `Certificate-${selectedStudent}-${selectedCourse}`,
  });

  // New button handlers
  const handleUploadTemplate = () => {
    fileInputRef.current?.click();
  };

  const handleTemplateUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "Template Uploaded",
        description: `Certificate template "${file.name}" has been uploaded successfully.`,
      });
    }
  };

  const handleBulkGenerate = () => {
    const completedStudents = students.filter(s => s.status === "Completed");
    toast({
      title: "Bulk Certificate Generation",
      description: `Generated ${completedStudents.length} certificates for completed students.`,
    });
  };

  const handleViewCertificate = (studentName: string, courseName: string) => {
    setSelectedStudent(studentName);
    setCertificateSelectedCourse(courseName);
    setCompletionDate(new Date().toISOString().split('T')[0]);
    
    toast({
      title: "Certificate Preview",
      description: `Viewing certificate for ${studentName} in ${courseName}.`,
    });
  };

  const handleDownloadCertificate = (studentName: string, courseName: string) => {
    setSelectedStudent(studentName);
    setCertificateSelectedCourse(courseName);
    setCompletionDate(new Date().toISOString().split('T')[0]);
    
    // Trigger print after state is set
    setTimeout(() => {
      handlePrintCertificate();
    }, 100);
  };

  const handleResendCertificate = (studentName: string, courseName: string) => {
    toast({
      title: "Certificate Resent",
      description: `Certificate for ${studentName} (${courseName}) has been resent via email.`,
    });
  };

  const handleEditStudent = (student: any) => {
    setEditingStudent(student);
    toast({
      title: "Edit Mode",
      description: `Editing ${student.name}'s information.`,
    });
  };

  const handleViewPaymentDetails = (payment: any) => {
    toast({
      title: "Payment Details",
      description: `Viewing payment details for ${payment.student} - ${payment.amount}`,
    });
  };

  const handleEditCourse = (course: any) => {
    toast({
      title: "Edit Course",
      description: `Editing ${course.title} course details.`,
    });
  };

  const handleViewCourseDetails = (course: any) => {
    toast({
      title: "Course Details",
      description: `Viewing detailed information for ${course.title}.`,
    });
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email && newStudent.course) {
      const student = {
        id: students.length + 1,
        ...newStudent,
        admissionDate: new Date().toISOString().split('T')[0],
        progress: 0,
        lastActive: new Date().toISOString().split('T')[0]
      };
      setStudents([...students, student]);
      setNewStudent({ name: "", email: "", course: "", status: "Active" });
      
      toast({
        title: "Student Added",
        description: `${newStudent.name} has been successfully enrolled.`,
      });
    }
  };

  const handleDeleteStudent = (id: number) => {
    const studentName = students.find(s => s.id === id)?.name;
    setStudents(students.filter(student => student.id !== id));
    
    toast({
      title: "Student Removed",
      description: `${studentName} has been removed from the system.`,
    });
  };

  const handleSaveCourse = () => {
    if (newCourse.title && newCourse.category && newCourse.price) {
      const course = {
        id: courses.length + 1,
        title: newCourse.title,
        students: 0,
        revenue: "₦0",
        completion: 0,
        rating: 0
      };
      setCourses([...courses, course]);
      setNewCourse({
        title: "",
        category: "",
        duration: "",
        price: "",
        description: "",
        curriculum: ""
      });
      
      toast({
        title: "Course Created",
        description: `${newCourse.title} has been successfully created.`,
      });
    }
  };

  const handleGenerateCertificate = () => {
    if (selectedStudent && selectedCourse && completionDate) {
      toast({
        title: "Certificate Generated",
        description: `Certificate generated for ${selectedStudent} in ${selectedCourse}.`,
      });
      handlePrintCertificate();
    } else {
      toast({
        title: "Missing Information",
        description: "Please select student, course, and completion date.",
        variant: "destructive",
      });
    }
  };

  const handlePaymentApproval = (paymentId: number) => {
    setPayments(payments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: "Paid" }
        : payment
    ));
    
    toast({
      title: "Payment Approved",
      description: "Payment has been approved and updated.",
    });
  };

  const markNotificationAsRead = (notificationId: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId 
        ? { ...notif, read: true }
        : notif
    ));
  };

  const monthlyRevenueData = [
    { month: "Jan", revenue: 3200000, students: 12 },
    { month: "Feb", revenue: 4100000, students: 18 },
    { month: "Mar", revenue: 3800000, students: 15 },
    { month: "Apr", revenue: 5200000, students: 22 },
    { month: "May", revenue: 4600000, students: 19 },
    { month: "Jun", revenue: 5800000, students: 25 },
  ];

  const courseRevenueData = [
    { course: "Web Dev", revenue: 15000000, students: 45 },
    { course: "Business", revenue: 12000000, students: 32 },
    { course: "Law", revenue: 8000000, students: 28 },
    { course: "Finance", revenue: 6000000, students: 20 },
    { course: "Marketing", revenue: 4200000, students: 15 },
  ];

  const studentEngagementData = [
    { month: "Jan", active: 85, completed: 12, enrolled: 20 },
    { month: "Feb", active: 92, completed: 18, enrolled: 25 },
    { month: "Mar", active: 88, completed: 15, enrolled: 22 },
    { month: "Apr", active: 95, completed: 22, enrolled: 30 },
    { month: "May", active: 91, completed: 19, enrolled: 28 },
    { month: "Jun", active: 97, completed: 25, enrolled: 35 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue (₦)",
      color: "#dc2626",
    },
    students: {
      label: "Students",
      color: "#2563eb",
    },
    active: {
      label: "Active Students",
      color: "#16a34a",
    },
    completed: {
      label: "Completed",
      color: "#dc2626",
    },
    enrolled: {
      label: "New Enrollments",
      color: "#ca8a04",
    },
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark">
      {/* Hidden Certificate Component for Printing */}
      <div className="hidden">
        <Certificate
          ref={certificateRef}
          studentName={selectedStudent}
          courseName={selectedCourse}
          completionDate={completionDate}
          instructorName="Dr. John Smith"
          courseHours="40 hours"
          certificateId={`CERT-${Date.now()}`}
        />
      </div>

      {/* Hidden file input for template upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleTemplateUpload}
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        className="hidden"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">Admin Panel</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your Digital Institute</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Notifications</DialogTitle>
                  <DialogDescription>Recent activity in your institute</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className={`p-3 rounded-lg border cursor-pointer ${
                        notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'
                      }`}
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{students.length}</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <p className="text-xs text-muted-foreground">+2 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦45.2M</div>
                  <p className="text-xs text-muted-foreground">+15.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">892</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.slice(0, 5).map((notification) => (
                    <div key={notification.id} className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'payment' ? 'bg-green-100' : 
                        notification.type === 'enrollment' ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        {notification.type === 'payment' && <DollarSign className="h-4 w-4 text-green-600" />}
                        {notification.type === 'enrollment' && <Users className="h-4 w-4 text-blue-600" />}
                        {notification.type === 'completion' && <CheckCircle className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage student admissions and enrollment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search students..." className="w-64" />
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="business">Business Strategy</SelectItem>
                        <SelectItem value="law">Corporate Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Student
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>Enter student details below</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="student-name">Name</Label>
                          <Input 
                            id="student-name"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                            placeholder="Enter student name" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="student-email">Email</Label>
                          <Input 
                            id="student-email"
                            type="email"
                            value={newStudent.email}
                            onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                            placeholder="Enter student email" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="student-course">Course</Label>
                          <Select value={newStudent.course} onValueChange={(value) => setNewStudent({...newStudent, course: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Web Development">Web Development</SelectItem>
                              <SelectItem value="Business Strategy">Business Strategy</SelectItem>
                              <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                              <SelectItem value="Finance">Finance</SelectItem>
                              <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={handleAddStudent} className="w-full">Add Student</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{student.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleEditStudent(student)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteStudent(student.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Students:</span>
                        <span className="font-medium">{course.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Revenue:</span>
                        <span className="font-medium">{course.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Completion:</span>
                        <span className="font-medium">{course.completion}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Rating:</span>
                        <span className="font-medium">{course.rating}⭐</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleEditCourse(course)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleViewCourseDetails(course)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Add New Course</CardTitle>
                <CardDescription>Create a new course for your institute</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course-title">Course Title</Label>
                    <Input 
                      id="course-title" 
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                      placeholder="Enter course title" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-category">Category</Label>
                    <Select value={newCourse.category} onValueChange={(value) => setNewCourse({...newCourse, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="business">Business & Management</SelectItem>
                        <SelectItem value="law">Law</SelectItem>
                        <SelectItem value="economics">Economics</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-duration">Duration</Label>
                    <Input 
                      id="course-duration" 
                      value={newCourse.duration}
                      onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                      placeholder="e.g., 12 weeks" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-price">Price</Label>
                    <Input 
                      id="course-price" 
                      value={newCourse.price}
                      onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                      placeholder="e.g., ₦150,000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course-description">Description</Label>
                  <Textarea 
                    id="course-description" 
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                    placeholder="Enter course description" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course-curriculum">Curriculum</Label>
                  <Textarea 
                    id="course-curriculum" 
                    value={newCourse.curriculum}
                    onChange={(e) => setNewCourse({...newCourse, curriculum: e.target.value})}
                    placeholder="Enter course curriculum" 
                    rows={6} 
                  />
                </div>
                <Button onClick={handleSaveCourse}>Save Course</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Monitor payments and revenue analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">₦45,200,000</div>
                      <p className="text-xs text-green-500">+15.3% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Pending Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-600">₦2,100,000</div>
                      <p className="text-xs text-orange-500">3 pending approvals</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">This Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600">₦8,400,000</div>
                      <p className="text-xs text-blue-500">25 new enrollments</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Average Order</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-purple-600">₦165,000</div>
                      <p className="text-xs text-purple-500">+5.2% from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Monthly Revenue & Students</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyRevenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis 
                              yAxisId="left"
                              tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} 
                            />
                            <YAxis yAxisId="right" orientation="right" />
                            <ChartTooltip 
                              content={<ChartTooltipContent />} 
                              formatter={(value, name) => [
                                name === 'revenue' ? `₦${Number(value).toLocaleString()}` : value,
                                name === 'revenue' ? 'Revenue' : 'Students'
                              ]}
                            />
                            <Bar yAxisId="left" dataKey="revenue" fill="#dc2626" />
                            <Bar yAxisId="right" dataKey="students" fill="#2563eb" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revenue by Course</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={courseRevenueData} layout="horizontal">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} />
                            <YAxis dataKey="course" type="category" />
                            <ChartTooltip 
                              content={<ChartTooltipContent />} 
                              formatter={(value) => [`₦${Number(value).toLocaleString()}`, "Revenue"]}
                            />
                            <Bar dataKey="revenue" fill="#dc2626" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Payment Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {notifications.filter(n => n.type === 'payment').slice(0, 3).map((notification) => (
                        <div key={notification.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-full">
                              <DollarSign className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-green-800">{notification.message}</p>
                              <p className="text-sm text-green-600">{notification.time}</p>
                            </div>
                          </div>
                          <Badge className="bg-green-600">New Payment</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.student}</TableCell>
                        <TableCell>{payment.course}</TableCell>
                        <TableCell className="font-semibold">{payment.amount}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>
                          <Badge variant={payment.status === "Paid" ? "default" : "destructive"}>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleViewPaymentDetails(payment)}
                            >
                              View Details
                            </Button>
                            {payment.status === "Pending" && (
                              <Button 
                                size="sm" 
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => handlePaymentApproval(payment.id)}
                              >
                                Approve
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificate Management</CardTitle>
                <CardDescription>Issue and manage course completion certificates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Button 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={handleUploadTemplate}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Certificate Template
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleGenerateCertificate}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Certificate
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleBulkGenerate}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Bulk Generate
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-select">Select Student</Label>
                    <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose student" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.filter(s => s.status === "Completed").map((student) => (
                          <SelectItem key={student.id} value={student.name}>
                            {student.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-select">Select Course</Label>
                    <Select value={selectedCourse} onValueChange={setCertificateSelectedCourse}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Business Strategy">Business Strategy</SelectItem>
                        <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="completion-date">Completion Date</Label>
                    <Input 
                      type="date" 
                      id="completion-date" 
                      value={completionDate}
                      onChange={(e) => setCompletionDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <Button onClick={handleGenerateCertificate} className="w-full md:w-auto">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Certificate
                </Button>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Certificates Issued</h3>
                  <div className="space-y-3">
                    {students.filter(s => s.status === "Completed").map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course} - Completed on {student.admissionDate}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleViewCertificate(student.name, student.course)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDownloadCertificate(student.name, student.course)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleResendCertificate(student.name, student.course)}
                          >
                            Resend
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Engagement Analytics</CardTitle>
                <CardDescription>Track student progress and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={studentEngagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="active" stroke="#16a34a" strokeWidth={2} />
                      <Line type="monotone" dataKey="completed" stroke="#dc2626" strokeWidth={2} />
                      <Line type="monotone" dataKey="enrolled" stroke="#ca8a04" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-gray-600">{course.students} students</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{course.completion}% completion</p>
                          <p className="text-sm text-gray-600">{course.rating}⭐ rating</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.sort((a, b) => b.progress - a.progress).slice(0, 5).map((student) => (
                      <div key={student.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{student.progress}%</p>
                          <Badge variant={student.status === "Completed" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
