"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { DocumentIcon } from "@heroicons/react/24/outline"
import headerIcon from "@/public/assets/header-icon.png"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  function getLinkref(id: number): void{
    var sectionId = "";
    switch(id){
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
    var viewSection = document.getElementById(sectionId);
    viewSection?.scrollIntoView({ behavior: "smooth", block: 'center' });
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dev</span>
            <img
              className="h-12 w-auto"
              src={headerIcon.src}
              alt="Flowers & Saints Logo"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <p
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            onClick={() => getLinkref(1)}
          >
            About Me
          </p>
          <p
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            onClick={() => getLinkref(2)}
          >
            Project
          </p>
          <p
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            onClick={() => getLinkref(3)}
          >
            Experience
          </p>
          <p
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            onClick={() => getLinkref(4)}
          >
            Contact
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {/* {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />} */}
              <span className="">
              <DocumentIcon className="h-5 w-5"  />
              </span>
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}

