import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}
const Hero = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
}: HeroProps) => {
  return <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 animate-fade-in text-[#e00404]">{title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            {subtitle}
          </p>
          {ctaText && <Link to={ctaLink} className="btn-primary flex items-center justify-center mx-auto space-x-2 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
              <span>{ctaText}</span>
              <ArrowRight size={16} />
            </Link>}
        </div>
      </div>
    </div>;
};
export default Hero;