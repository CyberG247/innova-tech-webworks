import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Digital Institute",
    path: "/institute"
  }, {
    name: "Team",
    path: "/team"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-innovatech-navy-dark/90 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-innovatech-navy dark:text-white">
            Innova<span className="text-innovatech-red">Tech Consultancy</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path ? "text-innovatech-red font-semibold" : "text-gray-700 dark:text-gray-200 hover:text-innovatech-red dark:hover:text-innovatech-red"}`}>
              {link.name}
            </Link>)}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-white dark:bg-innovatech-navy-dark border-t dark:border-gray-800">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path ? "text-innovatech-red font-semibold" : "text-gray-700 dark:text-gray-200 hover:text-innovatech-red dark:hover:text-innovatech-red"}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
          </div>
        </div>}
    </header>;
};
export default Navbar;