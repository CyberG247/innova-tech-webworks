
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import { Search, Filter, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "it", name: "Information Technology" },
    { id: "business", name: "Business & Management" },
    { id: "entrepreneurship", name: "Entrepreneurship" },
    { id: "law", name: "Law" },
    { id: "economics", name: "Economics" },
    { id: "finance", name: "Finance & Accounting" },
  ];

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

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Hero 
        title="Browse Our Courses" 
        subtitle="Discover comprehensive courses designed to advance your career and skills"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ctaText=""
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-innovatech-red hover:bg-innovatech-red-dark" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2>Available Courses ({filteredCourses.length})</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-innovatech-navy-dark border border-gray-100 dark:border-gray-800 overflow-hidden rounded-lg shadow-md card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-innovatech-red/10 text-innovatech-red text-xs px-2 py-1 rounded-full font-medium flex items-center">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {course.categoryName}
                    </span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {course.duration}</span>
                    <span>Students: {course.students}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-innovatech-red">{course.price}</span>
                    <Link to={`/course/${course.id}`}>
                      <Button className="bg-innovatech-red hover:bg-innovatech-red-dark">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
