
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMember = ({ name, role, bio, image, socialLinks }: TeamMemberProps) => {
  return (
    <div className="bg-white dark:bg-innovatech-navy-dark rounded-lg shadow-md overflow-hidden card-hover">
      {image && (
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 dark:text-white">{name}</h3>
        <p className="text-innovatech-red font-medium mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{bio}</p>
        
        {socialLinks && (
          <div className="flex space-x-4">
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} className="text-gray-600 hover:text-innovatech-red dark:text-gray-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="text-gray-600 hover:text-innovatech-red dark:text-gray-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="text-gray-600 hover:text-innovatech-red dark:text-gray-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
