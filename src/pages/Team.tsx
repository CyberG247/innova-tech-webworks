import Hero from "@/components/Hero";
import TeamMember from "@/components/TeamMember";

const Team = () => {
  const teamMembers = [
    {
      name: "Abdullahi Bala Musa",
      role: "Founder & CEO",
      bio: "With years of experience in the technology sector, Abdullahi founded InnovaTech with a vision to transform businesses through innovative ICT solutions. He studied Information Technology, Networks & Computer Security at the Prestigious Informatics Academy, Singapore (Nigerian Campus).",
      image: "public/lovable-uploads/0f08e164-e59d-4273-8ea9-a963da36d17d.png",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "abdullahi@innovatech.com"
      }
    },
    {
      name: "Yusuf Lawan Nuhu",
      role: "Chief Technology Officer",
      bio: "Yusuf oversees all technical aspects of the company, bringing his extensive experience in software architecture and system design.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "yusuf@innovatech.com"
      }
    },
    {
      name: "Mohammed Yusuf",
      role: "Head of Business Development",
      bio: "Mohammed leads our business development initiatives, focusing on building strategic partnerships and expanding our market presence.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "mohammed@innovatech.com"
      }
    },
    {
      name: "Amina Bello",
      role: "Digital Institute Director",
      bio: "As the Director of InnovaTech Digital Institute, Amina brings her passion for education and extensive experience in curriculum development.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "amina@innovatech.com"
      }
    },
    {
      name: "David Okafor",
      role: "Lead Web Developer",
      bio: "David leads our web development team, specializing in creating robust, scalable web applications for clients across various industries.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "david@innovatech.com"
      }
    },
    {
      name: "Fatima Hassan",
      role: "Mobile App Development Lead",
      bio: "Fatima heads our mobile app development team, bringing her expertise in creating intuitive, high-performance applications for iOS and Android.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "fatima@innovatech.com"
      }
    },
    {
      name: "John Adeyemi",
      role: "Technical Operations Manager",
      bio: "John ensures the smooth operation of our technical infrastructure and oversees the implementation of CCTV and IP phone systems.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "john@innovatech.com"
      }
    },
    {
      name: "Zainab Ali",
      role: "IT Consultancy Lead",
      bio: "Zainab leads our IT consultancy services, working closely with clients to develop and implement effective technology strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        email: "zainab@innovatech.com"
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Team" 
        subtitle="Meet the talented professionals behind InnovaTech's success"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ctaText=""
      />

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, business development, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Department Leads Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Department Leads</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our department leads ensure the delivery of high-quality services across all our offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(4).map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-innovatech-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-white mb-6">Join Our Team</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, 
                we'd love to hear from you. Check out our current openings and apply today.
              </p>
              <button className="btn-primary bg-innovatech-red hover:bg-innovatech-red-dark">
                View Open Positions
              </button>
            </div>
            
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <h3 className="text-xl font-bold mb-6 text-white">Why Work With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-innovatech-red font-bold mr-2">•</span>
                    <span>Collaborative and innovative work environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-innovatech-red font-bold mr-2">•</span>
                    <span>Opportunities for professional growth and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-innovatech-red font-bold mr-2">•</span>
                    <span>Work on exciting projects with cutting-edge technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-innovatech-red font-bold mr-2">•</span>
                    <span>Competitive compensation and benefits package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-innovatech-red font-bold mr-2">•</span>
                    <span>Opportunity to make a real impact in Nigeria's tech scene</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
