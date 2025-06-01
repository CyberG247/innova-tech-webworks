
import { useState, useEffect } from "react";
import { Book, Play, Download, Award, Clock, Users, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LearningDashboard = () => {
  const [enrollmentData, setEnrollmentData] = useState<any>(null);
  const [currentModule, setCurrentModule] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);

  useEffect(() => {
    // Get enrollment data from localStorage
    const savedData = localStorage.getItem('enrollmentData');
    if (savedData) {
      setEnrollmentData(JSON.parse(savedData));
    }
  }, []);

  const modules = [
    {
      id: 1,
      title: "Introduction to Web Development",
      lessons: [
        { id: 1, title: "Understanding the Web", duration: "15 min", type: "video" },
        { id: 2, title: "Setting up Development Environment", duration: "20 min", type: "video" },
        { id: 3, title: "Introduction to HTML", duration: "25 min", type: "video" },
        { id: 4, title: "HTML Structure and Semantics", duration: "30 min", type: "video" },
      ]
    },
    {
      id: 2,
      title: "HTML Deep Dive",
      lessons: [
        { id: 5, title: "Forms and Input Elements", duration: "35 min", type: "video" },
        { id: 6, title: "Tables and Lists", duration: "20 min", type: "video" },
        { id: 7, title: "Media Elements", duration: "25 min", type: "video" },
        { id: 8, title: "HTML5 Features", duration: "30 min", type: "video" },
      ]
    },
    {
      id: 3,
      title: "CSS Fundamentals",
      lessons: [
        { id: 9, title: "CSS Syntax and Selectors", duration: "40 min", type: "video" },
        { id: 10, title: "Box Model and Layout", duration: "45 min", type: "video" },
        { id: 11, title: "Typography and Colors", duration: "30 min", type: "video" },
        { id: 12, title: "Responsive Design Basics", duration: "50 min", type: "video" },
      ]
    }
  ];

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  if (!enrollmentData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Please complete enrollment first.</p>
          <Button onClick={() => window.location.href = '/courses'} className="bg-innovatech-red hover:bg-innovatech-red-dark">
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-innovatech-navy-dark">
      {/* Header */}
      <div className="bg-white dark:bg-innovatech-navy-dark border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Learning Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">Welcome back, {enrollmentData.firstName}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Progress</p>
                <p className="font-bold text-innovatech-red">{Math.round(progress)}%</p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                    className="text-innovatech-red"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-4 dark:text-white">Course Overview</h2>
              
              {/* Course Info */}
              <div className="mb-6">
                <h3 className="font-semibold dark:text-white">{enrollmentData.courseName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">12 weeks • Beginner</p>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-innovatech-red mr-3" />
                  <div>
                    <p className="text-sm font-medium dark:text-white">{completedLessons.length}/{totalLessons} Lessons</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-innovatech-red mr-3" />
                  <div>
                    <p className="text-sm font-medium dark:text-white">2.5 hours</p>
                    <p className="text-xs text-gray-500">Time spent</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-innovatech-red mr-3" />
                  <div>
                    <p className="text-sm font-medium dark:text-white">Certificate</p>
                    <p className="text-xs text-gray-500">Upon completion</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-innovatech-red hover:bg-innovatech-red-dark mb-4">
                Download Resources
              </Button>
              
              <Button variant="outline" className="w-full">
                Join Community
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Current Lesson */}
            <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 dark:text-white">Continue Learning</h2>
              <div className="bg-gradient-to-r from-innovatech-red to-innovatech-red-dark rounded-lg p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">HTML Structure and Semantics</h3>
                    <p className="text-sm opacity-90">Module 1 • Lesson 4 • 30 minutes</p>
                  </div>
                  <Button className="bg-white text-innovatech-red hover:bg-gray-100">
                    <Play className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.id} className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold dark:text-white">Module {module.id}: {module.title}</h3>
                    <span className="text-sm text-gray-500">
                      {module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length}/{module.lessons.length} completed
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          completedLessons.includes(lesson.id) 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                            : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          ) : (
                            <Play className="h-5 w-5 text-gray-400 mr-3" />
                          )}
                          <div>
                            <h4 className="font-medium dark:text-white">{lesson.title}</h4>
                            <p className="text-sm text-gray-500">{lesson.duration} • {lesson.type}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {!completedLessons.includes(lesson.id) && (
                            <Button 
                              size="sm" 
                              onClick={() => markLessonComplete(lesson.id)}
                              className="bg-innovatech-red hover:bg-innovatech-red-dark"
                            >
                              Start
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;
