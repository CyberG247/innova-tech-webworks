
import { useState, useEffect, useRef } from "react";
import { Book, Play, Download, Award, Clock, Users, CheckCircle, BarChart3, Calendar, Trophy, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Certificate from "@/components/Certificate";
import { useReactToPrint } from 'react-to-print';
import { useToast } from "@/hooks/use-toast";

const LearningDashboard = () => {
  const [enrollmentData, setEnrollmentData] = useState<any>(null);
  const [currentModule, setCurrentModule] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
  const isCompleted = progress === 100;

  // Calculate estimated completion date
  const enrollmentDate = enrollmentData ? new Date(enrollmentData.enrollmentDate || '2024-01-15') : new Date();
  const estimatedCompletionDate = new Date(enrollmentDate);
  estimatedCompletionDate.setDate(estimatedCompletionDate.getDate() + 84); // 12 weeks

  const actualCompletionDate = isCompleted ? new Date() : null;

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      
      toast({
        title: "Lesson Completed!",
        description: "Great job! You've completed another lesson.",
      });
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: certificateRef,
    documentTitle: `Certificate-${enrollmentData?.firstName}-${enrollmentData?.lastName}`,
    onAfterPrint: () => {
      setShowCertificate(false);
      toast({
        title: "Certificate Downloaded",
        description: "Your certificate has been successfully downloaded!",
      });
    }
  });

  const downloadCertificate = () => {
    setShowCertificate(true);
    // Add a small delay to ensure the component is rendered before printing
    setTimeout(() => {
      if (handlePrint) {
        handlePrint();
      }
    }, 100);
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
      {/* Certificate Component for Printing */}
      {showCertificate && (
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '800px', height: '600px' }}>
          <Certificate
            ref={certificateRef}
            studentName={`${enrollmentData.firstName} ${enrollmentData.lastName}`}
            courseName={enrollmentData.courseName}
            completionDate={actualCompletionDate ? actualCompletionDate.toLocaleDateString() : new Date().toLocaleDateString()}
            instructorName="David Okafor"
            courseHours="40 hours"
            certificateId={`CERT-${Date.now()}`}
          />
        </div>
      )}

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
            <div className="space-y-6">
              {/* Student Notification Box */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center text-blue-800 dark:text-blue-300">
                    <Calendar className="h-5 w-5 mr-2" />
                    Your Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Enrollment Date:</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{enrollmentDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Expected Completion:</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{estimatedCompletionDate.toLocaleDateString()}</span>
                  </div>
                  {actualCompletionDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Completed On:</span>
                      <span className="text-sm text-green-600 dark:text-green-400">{actualCompletionDate.toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Course Duration:</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">12 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Study Time:</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">5-8 hrs/week</span>
                  </div>
                </CardContent>
              </Card>

              {/* Course Overview */}
              <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4 dark:text-white">Course Overview</h2>
                
                {/* Course Info */}
                <div className="mb-6">
                  <h3 className="font-semibold dark:text-white">{enrollmentData.courseName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">12 weeks • Beginner</p>
                  <div className="mt-2">
                    <Badge variant={isCompleted ? "default" : "secondary"}>
                      {isCompleted ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
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
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-innovatech-red mr-3" />
                    <div>
                      <p className="text-sm font-medium dark:text-white">{Math.round(progress)}% Complete</p>
                      <p className="text-xs text-gray-500">Overall progress</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Download */}
                {isCompleted && (
                  <Card className="mb-4 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center text-green-800 dark:text-green-300">
                        <Trophy className="h-4 w-4 mr-2" />
                        Congratulations!
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-green-700 dark:text-green-300 mb-3">
                        You've completed the course! Download your certificate below.
                      </p>
                      <Button 
                        onClick={downloadCertificate}
                        className="w-full bg-green-600 hover:bg-green-700"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                )}

                <Button className="w-full bg-innovatech-red hover:bg-innovatech-red-dark mb-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </div>

              {/* Achievement Stats */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Your Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Streak:</span>
                    <span className="font-medium">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg. Session:</span>
                    <span className="font-medium">45 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Module Rank:</span>
                    <span className="font-medium">#5 of 45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Certificates:</span>
                    <span className="font-medium">{isCompleted ? 1 : 0}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Continue Learning or Completion Message */}
            <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6 mb-8">
              {isCompleted ? (
                <div className="text-center">
                  <div className="mb-4">
                    <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-green-600">Course Completed! 🎉</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Congratulations on completing {enrollmentData.courseName}! You can now download your certificate and continue your learning journey.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-blue-50 dark:bg-blue-900/20">
                      <CardContent className="p-4 text-center">
                        <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold text-blue-800 dark:text-blue-300">100% Complete</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">All lessons finished</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50 dark:bg-green-900/20">
                      <CardContent className="p-4 text-center">
                        <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="font-semibold text-green-800 dark:text-green-300">40+ Hours</p>
                        <p className="text-sm text-green-600 dark:text-green-400">Learning time</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50 dark:bg-purple-900/20">
                      <CardContent className="p-4 text-center">
                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <p className="font-semibold text-purple-800 dark:text-purple-300">Certified</p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Professional credential</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={downloadCertificate}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Award className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                    <Button variant="outline">
                      <Book className="h-4 w-4 mr-2" />
                      Explore More Courses
                    </Button>
                    <Button variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Share Achievement
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4 dark:text-white">Continue Learning</h2>
                  <div className="bg-gradient-to-r from-innovatech-red to-innovatech-red-dark rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">HTML Structure and Semantics</h3>
                        <p className="text-sm opacity-90">Module 1 • Lesson 4 • 30 minutes</p>
                        <div className="mt-2">
                          <div className="bg-white/20 rounded-full h-2 w-48">
                            <div className="bg-white rounded-full h-2" style={{ width: `${progress}%` }}></div>
                          </div>
                          <p className="text-xs mt-1 opacity-90">{Math.round(progress)}% complete</p>
                        </div>
                      </div>
                      <Button className="bg-white text-innovatech-red hover:bg-gray-100">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Quick Stats Cards */}
            {!isCompleted && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Book className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold">{completedLessons.length}</p>
                    <p className="text-sm text-gray-600">Lessons Done</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">2.5h</p>
                    <p className="text-sm text-gray-600">Time Spent</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold">{Math.round(progress)}%</p>
                    <p className="text-sm text-gray-600">Progress</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">7</p>
                    <p className="text-sm text-gray-600">Day Streak</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Modules */}
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.id} className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold dark:text-white">Module {module.id}: {module.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        {module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length}/{module.lessons.length} completed
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-innovatech-red h-2 rounded-full" 
                          style={{ 
                            width: `${(module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length / module.lessons.length) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                          completedLessons.includes(lesson.id) 
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                            : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:border-innovatech-red'
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
                              <Play className="h-4 w-4 mr-2" />
                              Start
                            </Button>
                          )}
                          {completedLessons.includes(lesson.id) && (
                            <Button size="sm" variant="outline">
                              <Play className="h-4 w-4 mr-2" />
                              Rewatch
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
