import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalInstitute = () => {
  // Sample course categories
  const categories = [
    { id: "it", name: "Information Technology" },
    { id: "business", name: "Business & Management" },
    { id: "entrepreneurship", name: "Entrepreneurship" },
    { id: "law", name: "Law" },
    { id: "economics", name: "Economics" },
    { id: "finance", name: "Finance & Accounting" },
  ];

  // Sample featured courses
  const featuredCourses = [
    {
      title: "Web Development Fundamentals",
      category: "IT",
      description: "Learn the core concepts of web development including HTML, CSS, and JavaScript to build responsive websites.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Business Strategy & Planning",
      category: "Business",
      description: "Develop practical skills for creating and implementing effective business strategies in competitive markets.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Startup Fundamentals",
      category: "Entrepreneurship",
      description: "Master the essential knowledge and skills required to launch and grow a successful startup.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Corporate Law Basics",
      category: "Law",
      description: "Understand the fundamental legal principles and frameworks governing business operations and transactions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Microeconomics Principles",
      category: "Economics",
      description: "Explore the core principles of microeconomics and how they apply to business decision-making.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Financial Management",
      category: "Finance",
      description: "Learn essential financial management techniques for effective business planning and growth.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="InnovaTech Digital Institute" 
        subtitle="Empowering the next generation of professionals through quality education and practical skills development"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ctaText="Explore Courses"
        ctaLink="/courses"
      />

      {/* Coming Soon Notification */}
      <div className="bg-innovatech-red text-white text-center py-6 px-4">
        <p className="text-xl font-bold">InnovaTech Digital Institute is currently undergoing a massive System upgrade for the Learning Management System, We apologize for the inconveniences caused & we assure you that the service will be restored soon....!</p>
      </div>

      {/* Learning Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Your Learning Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to start your learning journey with InnovaTech Digital Institute.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-16 h-16 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Browse Courses</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore our course catalog and find the right program for your goals.
              </p>
              <Link to="/courses">
                <button className="btn-secondary">Start Browsing</button>
              </Link>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-16 h-16 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Register Online</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete the online registration form with your details.
              </p>
              <Link to="/register">
                <button className="btn-secondary">Register Now</button>
              </Link>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-16 h-16 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Make Payment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Secure your spot by completing the payment process.
              </p>
              <button className="btn-secondary" disabled>
                Payment Portal
              </button>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-16 h-16 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Start Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access course materials and begin your learning journey.
              </p>
              <button className="btn-secondary" disabled>
                Access Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Institute Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="mb-6">About Our Institute</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                InnovaTech Digital Institute was established with a vision to bridge the skills gap in Nigeria's digital economy. 
                We provide high-quality education and training in various fields, equipping students with practical skills that are in demand in today's job market.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our courses are developed and taught by industry experts with years of practical experience, ensuring that our students receive relevant, 
                up-to-date knowledge that they can apply immediately in their careers.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Whether you're looking to start a new career, advance in your current role, or acquire new skills for entrepreneurship, 
                InnovaTech Digital Institute offers flexible learning options to suit your needs, including both online and in-person classes.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-innovatech-red mb-2">50+</div>
                  <p className="text-gray-600 dark:text-gray-300">Expert Instructors</p>
                </div>
                <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-innovatech-red mb-2">100+</div>
                  <p className="text-gray-600 dark:text-gray-300">Courses Offered</p>
                </div>
                <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-innovatech-red mb-2">5000+</div>
                  <p className="text-gray-600 dark:text-gray-300">Students Enrolled</p>
                </div>
                <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl font-bold text-innovatech-red mb-2">90%</div>
                  <p className="text-gray-600 dark:text-gray-300">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Course Categories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of course categories designed to meet various professional and academic needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center card-hover"
              >
                <div className="p-4 bg-innovatech-navy/10 dark:bg-innovatech-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-innovatech-navy dark:text-innovatech-red" />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{category.name}</h3>
                <Link to="/courses">
                  <button className="btn-secondary mt-2">View Courses</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most popular courses designed to help you acquire in-demand skills for today's job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                category={course.category}
                description={course.description}
                image={course.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <button className="btn-primary bg-innovatech-red hover:bg-innovatech-red-dark">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">How to Enroll</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to start your learning journey with InnovaTech Digital Institute.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Browse Courses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our course catalog and find the right program for your goals.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Register Online</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete the online registration form with your details.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Make Payment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure your spot by completing the payment process.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">Start Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access course materials and begin your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-innovatech-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Advance Your Skills?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of students who have transformed their careers through our courses. 
            Enroll today and take the first step towards a brighter future.
          </p>
          <Link to="/courses">
            <button className="btn-primary bg-innovatech-red hover:bg-innovatech-red-dark">
              Enroll Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalInstitute;
