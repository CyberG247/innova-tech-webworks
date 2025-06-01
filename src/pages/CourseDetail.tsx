
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play, CheckCircle, Download } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Course curricula by category
  const curricula = {
    it: {
      "Web Development Fundamentals": [
        "Introduction to HTML5 & Semantic Markup",
        "CSS3 & Advanced Styling Techniques",
        "JavaScript Fundamentals & ES6+",
        "DOM Manipulation & Event Handling",
        "Responsive Web Design & Mobile-First Approach",
        "Version Control with Git & GitHub",
        "Modern Development Tools & Workflow",
        "Building Real-World Projects",
        "Deployment & Hosting Solutions",
        "Performance Optimization & Best Practices"
      ],
      "Mobile App Development": [
        "Mobile Development Fundamentals",
        "React Native Setup & Environment",
        "Component Architecture & State Management",
        "Navigation & Routing in Mobile Apps",
        "API Integration & Data Management",
        "Device Features & Native Modules",
        "Push Notifications & Background Tasks",
        "Testing & Debugging Mobile Apps",
        "App Store Deployment (iOS & Android)",
        "Advanced Features & Optimization"
      ]
    },
    business: {
      "Business Strategy & Planning": [
        "Strategic Management Fundamentals",
        "Industry Analysis & Competitive Intelligence",
        "SWOT Analysis & Strategic Planning Tools",
        "Business Model Innovation",
        "Market Research & Customer Analysis",
        "Financial Planning & Budgeting",
        "Risk Management & Mitigation",
        "Implementation & Change Management",
        "Performance Measurement & KPIs",
        "Case Studies & Real-World Applications"
      ]
    },
    law: {
      "Corporate Law Basics": [
        "Introduction to Corporate Law",
        "Business Entity Formation & Structure",
        "Corporate Governance & Compliance",
        "Contract Law & Commercial Transactions",
        "Intellectual Property Rights",
        "Employment Law & Labor Relations",
        "Securities Regulation & Capital Markets",
        "Mergers & Acquisitions Basics",
        "Regulatory Compliance & Ethics",
        "Practical Legal Documentation"
      ]
    },
    entrepreneurship: {
      "Startup Fundamentals": [
        "Entrepreneurship Mindset & Opportunities",
        "Idea Validation & Market Research",
        "Business Model Canvas Development",
        "Lean Startup Methodology",
        "Funding & Investment Strategies",
        "Building MVP & Product Development",
        "Marketing & Customer Acquisition",
        "Financial Management for Startups",
        "Legal Considerations & IP Protection",
        "Scaling & Growth Strategies"
      ]
    },
    finance: {
      "Financial Management": [
        "Financial Accounting Fundamentals",
        "Financial Statement Analysis",
        "Time Value of Money & Present Value",
        "Capital Budgeting & Investment Decisions",
        "Working Capital Management",
        "Risk & Return Analysis",
        "Cost of Capital & Capital Structure",
        "Dividend Policy & Shareholder Value",
        "Financial Planning & Forecasting",
        "International Financial Management"
      ]
    },
    economics: {
      "Microeconomics Principles": [
        "Introduction to Economic Thinking",
        "Supply & Demand Analysis",
        "Consumer Choice Theory",
        "Production & Cost Analysis",
        "Market Structure & Competition",
        "Price Determination & Market Efficiency",
        "Factor Markets & Income Distribution",
        "Market Failures & Government Intervention",
        "Game Theory & Strategic Behavior",
        "Applied Microeconomic Analysis"
      ]
    }
  };

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      category: "it",
      categoryName: "IT",
      description: "Learn the core concepts of web development including HTML, CSS, and JavaScript to build responsive websites.",
      duration: "12 weeks",
      price: "₦150,000",
      level: "Beginner",
      instructor: "David Okafor",
      rating: 4.8,
      students: 245,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 2,
      title: "Business Strategy & Planning",
      category: "business",
      categoryName: "Business",
      description: "Develop practical skills for creating and implementing effective business strategies in competitive markets.",
      duration: "8 weeks",
      price: "₦120,000",
      level: "Intermediate",
      instructor: "Mohammed Yusuf",
      rating: 4.9,
      students: 189,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 3,
      title: "Startup Fundamentals",
      category: "entrepreneurship",
      categoryName: "Entrepreneurship",
      description: "Master the essential knowledge and skills required to launch and grow a successful startup.",
      duration: "10 weeks",
      price: "₦180,000",
      level: "Intermediate",
      instructor: "Amina Bello",
      rating: 4.7,
      students: 156,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 4,
      title: "Corporate Law Basics",
      category: "law",
      categoryName: "Law",
      description: "Understand the fundamental legal principles and frameworks governing business operations and transactions.",
      duration: "6 weeks",
      price: "₦100,000",
      level: "Beginner",
      instructor: "Zainab Ali",
      rating: 4.6,
      students: 98,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "it",
      categoryName: "IT",
      description: "Learn to build native mobile applications for iOS and Android platforms using modern frameworks.",
      duration: "16 weeks",
      price: "₦200,000",
      level: "Advanced",
      instructor: "Fatima Hassan",
      rating: 4.9,
      students: 134,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 6,
      title: "Financial Management",
      category: "finance",
      categoryName: "Finance",
      description: "Learn essential financial management techniques for effective business planning and growth.",
      duration: "8 weeks",
      price: "₦140,000",
      level: "Intermediate",
      instructor: "John Adeyemi",
      rating: 4.8,
      students: 167,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  const course = courses.find(c => c.id === parseInt(id || "1"));
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const courseCurriculum = curricula[course.category as keyof typeof curricula]?.[course.title] || [
    "Course content coming soon...",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark py-8">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className="mb-4 bg-innovatech-red">{course.categoryName}</Badge>
              <h1 className="text-3xl font-bold mb-4 dark:text-white">{course.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-innovatech-red mr-2" />
                  <span className="dark:text-white">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-innovatech-red mr-2" />
                  <span className="dark:text-white">{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="dark:text-white">{course.rating} rating</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-innovatech-red">{course.price}</span>
                </div>
              </div>
              
              <Link to="/register">
                <Button className="w-full bg-innovatech-red hover:bg-innovatech-red-dark">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Details Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-lg">
          <TabsList className="w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">What You'll Learn</h3>
                <ul className="space-y-2">
                  {courseCurriculum.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Course Requirements</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Basic computer literacy</li>
                  <li>• Internet connection for online resources</li>
                  <li>• Dedication to complete assignments</li>
                  <li>• {course.level === "Beginner" ? "No prior experience required" : "Basic understanding of related concepts"}</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="p-6">
            <div>
              <h3 className="text-xl font-bold mb-6 dark:text-white">Course Curriculum</h3>
              <div className="space-y-4">
                {courseCurriculum.map((module, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center">
                        <span className="bg-innovatech-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                          {index + 1}
                        </span>
                        {module}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="p-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{course.instructor.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl">{course.instructor}</h3>
                    <p className="text-gray-600">Senior {course.categoryName} Instructor</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {course.instructor} is an experienced professional with over 10 years in the {course.categoryName.toLowerCase()} industry. 
                  They have worked with leading companies and have a passion for teaching practical skills that students can immediately apply in their careers.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl font-bold text-innovatech-red">{course.rating}</div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{course.students} reviews</p>
                </div>
              </div>
              
              {/* Sample reviews */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="font-bold">JD</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold">John Doe</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Excellent course! The instructor explains complex concepts in a very understandable way. 
                        I was able to apply what I learned immediately in my job.
                      </p>
                    </div>
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

export default CourseDetail;
