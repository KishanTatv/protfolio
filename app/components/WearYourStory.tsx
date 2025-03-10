"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {

  function getDown(){
    let exploreSection = document.getElementById("sectionProject");
    exploreSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="bg-background py-10" id="sectionAbout">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">About Me</h2>
           <motion.p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            I am passionate about learning new technologies and applying my knowledge to create innovative solutions. 
            With excellent time management and communication skills, I am able to work effectively both independently and as part of a team.
            </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center"
              onClick={() => getDown()}
            >
              Explore More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

