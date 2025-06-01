
import { forwardRef } from "react";

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  instructorName: string;
  courseHours: string;
  certificateId: string;
}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(
  ({ studentName, courseName, completionDate, instructorName, courseHours, certificateId }, ref) => {
    return (
      <div 
        ref={ref}
        className="w-[800px] h-[600px] bg-white border-8 border-double border-innovatech-navy p-12 relative"
        style={{ fontFamily: "serif" }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-innovatech-navy mb-2">InnovaTech Digital Institute</h1>
          <h2 className="text-2xl text-innovatech-red font-semibold">Certificate of Completion</h2>
        </div>

        {/* Certificate Body */}
        <div className="text-center space-y-6">
          <p className="text-lg">This is to certify that</p>
          
          <div className="border-b-2 border-innovatech-navy inline-block pb-2 mb-4">
            <h3 className="text-3xl font-bold text-innovatech-navy">{studentName}</h3>
          </div>
          
          <p className="text-lg">has successfully completed the course</p>
          
          <div className="border-b-2 border-innovatech-red inline-block pb-2 mb-4">
            <h3 className="text-2xl font-bold text-innovatech-red">{courseName}</h3>
          </div>
          
          <p className="text-base">
            consisting of <span className="font-semibold">{courseHours}</span> of instruction
          </p>
          
          <p className="text-base">
            on this <span className="font-semibold">{completionDate}</span>
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-12 left-12 right-12">
          <div className="flex justify-between items-end">
            <div className="text-center">
              <div className="border-t-2 border-gray-400 pt-2 w-48">
                <p className="font-semibold">{instructorName}</p>
                <p className="text-sm text-gray-600">Course Instructor</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-400 rounded-full flex items-center justify-center mb-2">
                <span className="text-xs text-gray-600">SEAL</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="border-t-2 border-gray-400 pt-2 w-48">
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Director</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">Certificate ID: {certificateId}</p>
          </div>
        </div>
      </div>
    );
  }
);

Certificate.displayName = "Certificate";

export default Certificate;
