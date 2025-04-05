import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling for same-page navigation
  const scrollToSection = (sectionId: string) => {
    // Only apply smooth scrolling on home page
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-md backdrop-blur-sm py-2" : "bg-background py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link to="/" className="text-xl font-bold text-primary">
          John Doe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`${location.pathname === "/projects" ? "text-primary" : "text-foreground"} hover:text-primary transition-colors`}
          >
            Projects
          </Link>
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
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
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => {
                scrollToSection("home");
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => {
                scrollToSection("experience");
                setIsOpen(false);
              }}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className={`${location.pathname === "/projects" ? "text-primary" : "text-foreground"} hover:text-primary transition-colors py-2`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
