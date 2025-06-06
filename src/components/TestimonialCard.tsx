
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, title, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 md:min-h-[320px] flex flex-col card-hover">
      <div className="flex-grow">
        <svg className="h-8 w-8 text-innovatech-red mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{quote}</p>
      </div>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
        )}
        {!image && (
          <div className="h-12 w-12 bg-innovatech-navy text-white dark:bg-innovatech-red rounded-full flex items-center justify-center mr-4">
            <span className="font-bold text-lg">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-innovatech-navy dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
