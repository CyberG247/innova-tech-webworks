
import { useState } from "react";
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
import { Users, GraduationCap, DollarSign, FileText, Upload, Plus, Trash2, Edit } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", course: "Web Development", status: "Active", admissionDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", course: "Business Strategy", status: "Completed", admissionDate: "2024-02-01" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", course: "Corporate Law", status: "Active", admissionDate: "2024-03-10" },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, student: "John Doe", course: "Web Development", amount: "₦150,000", status: "Paid", date: "2024-01-15" },
    { id: 2, student: "Jane Smith", course: "Business Strategy", amount: "₦120,000", status: "Paid", date: "2024-02-01" },
    { id: 3, student: "Mike Johnson", course: "Corporate Law", amount: "₦100,000", status: "Pending", date: "2024-03-10" },
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

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email && newStudent.course) {
      const student = {
        id: students.length + 1,
        ...newStudent,
        admissionDate: new Date().toISOString().split('T')[0]
      };
      setStudents([...students, student]);
      setNewStudent({ name: "", email: "", course: "", status: "Active" });
    }
  };

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleSaveCourse = () => {
    console.log("Course saved:", newCourse);
    setNewCourse({
      title: "",
      category: "",
      duration: "",
      price: "",
      description: "",
      curriculum: ""
    });
  };

  const handleGenerateCertificate = () => {
    console.log("Certificate generated");
  };

  // Chart data for Finance section
  const monthlyRevenueData = [
    { month: "Jan", revenue: 3200000 },
    { month: "Feb", revenue: 4100000 },
    { month: "Mar", revenue: 3800000 },
    { month: "Apr", revenue: 5200000 },
    { month: "May", revenue: 4600000 },
    { month: "Jun", revenue: 5800000 },
  ];

  const courseRevenueData = [
    { course: "Web Dev", revenue: 15000000 },
    { course: "Business", revenue: 12000000 },
    { course: "Law", revenue: 8000000 },
    { course: "Finance", revenue: 6000000 },
    { course: "Entrepreneurship", revenue: 4200000 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue (₦)",
      color: "#dc2626",
    },
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">Admin Panel</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your Digital Institute</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
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
                  <div className="text-2xl font-bold">6</div>
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
          </TabsContent>

          {/* Students Management Tab */}
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
                      <TableHead>Status</TableHead>
                      <TableHead>Admission Date</TableHead>
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
                          <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.admissionDate}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
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

          {/* Courses Management Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Add, edit, and manage course content</CardDescription>
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

          {/* Finance Tab */}
          <TabsContent value="finance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Management</CardTitle>
                <CardDescription>Monitor payments and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">₦45,200,000</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Pending Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-600">₦2,100,000</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">This Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-600">₦8,400,000</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Revenue Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Monthly Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={monthlyRevenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} />
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

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Amount</TableHead>
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
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>
                          <Badge variant={payment.status === "Paid" ? "default" : "destructive"}>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificate Management</CardTitle>
                <CardDescription>Issue and manage course completion certificates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Certificate Template
                  </Button>
                  <Button variant="outline" onClick={handleGenerateCertificate}>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Certificate
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-select">Select Student</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose student" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map((student) => (
                          <SelectItem key={student.id} value={student.name}>
                            {student.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-select">Select Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="business">Business Strategy</SelectItem>
                        <SelectItem value="law">Corporate Law</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleGenerateCertificate}>Generate Certificate</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
