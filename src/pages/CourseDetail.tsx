
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Star, BookOpen, Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { id } = useParams();

  // This would typically come from an API
  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Information Technology",
    description: "Learn the core concepts of web development including HTML, CSS, and JavaScript to build responsive websites. This comprehensive course will take you from beginner to building your first professional website.",
    longDescription: "This comprehensive web development course is designed for absolute beginners who want to start their journey in web development. You'll learn the fundamental building blocks of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this course, you'll have built multiple projects including a portfolio website, a responsive landing page, and an interactive web application.",
    duration: "12 weeks",
    price: "₦150,000",
    level: "Beginner",
    instructor: "David Okafor",
    instructorBio: "David is a senior web developer with over 8 years of experience building scalable web applications. He has worked with major tech companies and has trained over 500 students.",
    rating: 4.8,
    students: 245,
    totalLessons: 48,
    totalHours: 36,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    curriculum: [
      {
        module: "Module 1: Introduction to Web Development",
        lessons: [
          "Understanding the Web",
          "Setting up Development Environment",
          "Introduction to HTML",
          "HTML Structure and Semantics"
        ]
      },
      {
        module: "Module 2: HTML Deep Dive",
        lessons: [
          "Forms and Input Elements",
          "Tables and Lists",
          "Media Elements",
          "HTML5 Features"
        ]
      },
      {
        module: "Module 3: CSS Fundamentals",
        lessons: [
          "CSS Syntax and Selectors",
          "Box Model and Layout",
          "Typography and Colors",
          "Responsive Design Basics"
        ]
      },
      {
        module: "Module 4: Advanced CSS",
        lessons: [
          "Flexbox Layout",
          "CSS Grid",
          "Animations and Transitions",
          "CSS Frameworks"
        ]
      },
      {
        module: "Module 5: JavaScript Basics",
        lessons: [
          "Variables and Data Types",
          "Functions and Control Flow",
          "DOM Manipulation",
          "Event Handling"
        ]
      },
      {
        module: "Module 6: Final Project",
        lessons: [
          "Project Planning",
          "Building Your Portfolio Website",
          "Testing and Debugging",
          "Deployment and Hosting"
        ]
      }
    ],
    requirements: [
      "Basic computer literacy",
      "Access to a computer with internet connection",
      "No prior programming experience required",
      "Willingness to learn and practice"
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Understand modern web development principles",
      "Create interactive web applications",
      "Deploy websites to the internet",
      "Have a portfolio of web projects"
    ]
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
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="mb-6">
                <span className="bg-innovatech-red/10 text-innovatech-red text-sm px-3 py-1 rounded-full font-medium">
                  {course.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-4 dark:text-white">{course.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>

              <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.totalLessons} lessons</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">About This Course</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{course.longDescription}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-innovatech-red mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-2 dark:text-white">{module.module}</h3>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <Play className="h-3 w-3 mr-2" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Prerequisites</h2>
                <ul className="space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-innovatech-red mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6 sticky top-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-innovatech-red">{course.price}</span>
                <p className="text-gray-500 mt-1">One-time payment</p>
              </div>

              <Link to="/register" className="w-full">
                <Button className="w-full bg-innovatech-red hover:bg-innovatech-red-dark text-lg py-3 mb-4">
                  Enroll Now
                </Button>
              </Link>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 dark:text-white">Course Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Level:</span>
                    <span className="dark:text-white">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="dark:text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Hours:</span>
                    <span className="dark:text-white">{course.totalHours} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lessons:</span>
                    <span className="dark:text-white">{course.totalLessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Certificate:</span>
                    <span className="dark:text-white">Yes</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold mb-4 dark:text-white">Instructor</h3>
                <div className="flex items-center mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium dark:text-white">{course.instructor}</p>
                    <p className="text-sm text-gray-500">Lead Web Developer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.instructorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
