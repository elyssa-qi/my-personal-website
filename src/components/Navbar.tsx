import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isFixed?: boolean;
}

const Navbar = ({ isFixed = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for same-page navigation
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isFixed ? 'fixed' : 'relative'
      } ${
        isScrolled && isFixed
          ? "bg-background/20 backdrop-blur-md border-b border-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] supports-[backdrop-filter]:bg-background/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-end items-center py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-roboto text-white text-[18px]">
          <Link
            to="/"
            className="hover:text-white/60 transition-colors font-[550]"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-white/60 transition-colors font-[550]"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`${location.pathname === "/projects" ? "text-white/60" : ""} hover:text-white/60 transition-colors font-[550]`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Projects
          </Link>
          <Link
            to="/"
            className="hover:text-white/60 transition-colors font-[550]"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t border-white/10 ${
              isScrolled 
                ? "bg-background/20 backdrop-blur-md supports-[backdrop-filter]:bg-background/10" 
                : "bg-background"
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-roboto text-white text-[10px]">
              <Link
                to="/"
                className="hover:text-white/60 transition-colors font-[550]"
                onClick={() => {
                  scrollToSection("home");
                  setIsOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:text-white/60 transition-colors font-[550]"
                onClick={() => {
                  scrollToSection("experience");
                  setIsOpen(false);
                }}
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className={`${
                  location.pathname === "/projects" ? "text-white/60" : ""
                } hover:text-white/60 transition-colors font-[550]`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsOpen(false);
                }}
              >
                Projects
              </Link>
              <Link
                to="/"
                className="hover:text-white/60 transition-colors font-[550]"
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
