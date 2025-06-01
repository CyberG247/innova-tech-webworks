import Hero from "@/components/Hero";
const About = () => {
  return <div>
      {/* Hero Section */}
      <Hero title="About InnovaTech" subtitle="Learn about our journey, mission, and vision for transforming businesses through technology" backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" ctaText="" />

      {/* Mission, Vision, Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-innovatech-navy dark:text-white">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To deliver innovative and professional technology solutions that empower organizations to achieve their full potential in a digital world. We are committed to excellence in every project, ensuring our clients receive the highest quality ICT services tailored to their unique needs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-innovatech-navy dark:text-white">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To become the leading ICT solutions provider in Nigeria, recognized for our innovative approaches, technical expertise, and exceptional client service. We envision a future where organizations across Nigeria leverage technology to achieve unprecedented growth and efficiency.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-innovatech-navy dark:text-white">Our Values</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-innovatech-red font-bold mr-2">•</span> 
                  <span>Innovation: We constantly seek new and better ways to solve problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-innovatech-red font-bold mr-2">•</span> 
                  <span>Excellence: We strive for the highest quality in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-innovatech-red font-bold mr-2">•</span> 
                  <span>Integrity: We act with honesty and transparency in all our dealings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-innovatech-red font-bold mr-2">•</span> 
                  <span>Client Focus: We prioritize our clients' success above all else</span>
                </li>
                <li className="flex items-start">
                  <span className="text-innovatech-red font-bold mr-2">•</span> 
                  <span>Community: We are committed to empowering our local community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">InnovaTech Consultancy LTD began as a small IT service provider in Dutse, Jigawa State. Our founder, with a passion for technology and a vision for digital transformation in Nigeria, started the company with just two employees focusing on basic web development services.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Over the years, we've grown into a comprehensive ICT solutions provider, expanding our services to include software development, mobile app development, CCTV installation, IP phone systems, and IT consultancy. Our team has expanded to include experts in various technology fields, all committed to delivering excellence.
              </p>
              <p className="text-gray-700 dark:text-gray-300">In 2025, we launched the InnovaTech Digital Institute to address the skills gap in the region and empower the next generation of tech professionals. Today, we serve clients across Nigeria, from government agencies to private businesses, helping them leverage technology to achieve their goals.</p>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="InnovaTech History" className="rounded-lg shadow-md h-64 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="InnovaTech Office" className="rounded-lg shadow-md h-64 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="InnovaTech Team" className="rounded-lg shadow-md h-64 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="InnovaTech Projects" className="rounded-lg shadow-md h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Over the years, we've reached significant milestones and received recognition for our work in the ICT sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="text-4xl font-bold text-innovatech-red mb-2">150+</div>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="text-4xl font-bold text-innovatech-red mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Government Contracts</p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="text-4xl font-bold text-innovatech-red mb-2">1000+</div>
              <p className="text-gray-600 dark:text-gray-300">Students Trained</p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 text-center">
              <div className="text-4xl font-bold text-innovatech-red mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading organizations and technology providers to deliver the best solutions to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="bg-white dark:bg-innovatech-navy-dark p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center h-24">
              <img src="/lovable-uploads/id2BFP1vmt_logos.png" alt="Partner Logo" className="h-full object-contain" />
            </div>
            <div className="bg-white dark:bg-innovatech-navy-dark p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center h-24">
              <img src="/lovable-uploads/Untitled design.png" alt="Partner Logo" className="h-full object-contain" />
            </div>
            <div className="bg-white dark:bg-innovatech-navy-dark p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center h-24">
              <img src="/lovable-uploads/logo.jpeg" alt="Partner Logo" className="h-full object-contain" />
            </div>
            <div className="bg-white dark:bg-innovatech-navy-dark p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center h-24">
              <img src="/lovable-uploads/InnovaFoods & Beverages2.png" alt="Partner Logo" className="h-full object-contain" />
            </div>
            <div className="bg-white dark:bg-innovatech-navy-dark p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 flex items-center justify-center h-24">
              <img src="/lovable-uploads/JTVlogo.jpg" alt="Partner Logo" className="h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;