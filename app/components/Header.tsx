"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DocumentIcon } from "@heroicons/react/24/outline";
import headerIcon from "@/public/assets/header-icon.png";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);


  function fileDownload(){
    const link = document.createElement("a");
    link.href = "/assets/doc/resume.pdf";
    link.download = "kishan-resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function getLinkref(id: number): void {
    let sectionId = "";
    switch (id) {
      case 1:
        sectionId = "sectionAbout";
        break;
      case 2:
        sectionId = "sectionProject";
        break;
      case 3:
        sectionId = "sectionExperience";
        break;
      case 4:
        sectionId = "sectionContact";
        break;
    }
    const viewSection = document.getElementById(sectionId);
    viewSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function gotoHome() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex items-center lg:flex-1">
          <p className="-m-1.5 p-1.5 cursor-pointer" onClick={() => gotoHome()}>
            <span className="sr-only">Flowers & Saints</span>
            <Image
              height={300}
              width={200}
              className="h-12 w-auto"
              src={headerIcon.src}
              alt="Flowers & Saints Logo"
            />
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-foreground hover:bg-primary/10 transition"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-x-12">
         {["About me", "Project", "Experience", "Contact"].map((item, index) => (
            <p
              key={index}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={() => getLinkref(index + 1)}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Dark Mode Toggle Button */}
        <div className="hidden lg:flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => fileDownload()}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <DocumentIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </nav>

      {/* Off-Canvas Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-4 w-3/4 max-w-xs h-full shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-foreground hover:bg-primary/10 rounded-md transition"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 space-y-6">
          {["About me", "Project", "Experience", "Contact"].map(
            (item, index) => (
              <p
                key={index}
                className="block py-2 text-lg font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  getLinkref(index + 1);
                }}
              >
                {item}
              </p>
            )
          )}
        </div>
      </motion.div>

      {/* Overlay (for dimming background when menu is open) */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </motion.header>
  );
}
