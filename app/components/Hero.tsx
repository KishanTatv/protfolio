"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {

  function fileDownload(){
    const link = document.createElement("a");
    link.href = "/assets/doc/resume.pdf";
    link.download = "kishan-resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-8 py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="lg:mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="">Hi, I'm Kishan Bhadani</span>
          </motion.h1>
          <motion.h2
            className="mt-5 font-bold tracking-tight text-foreground "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="">IT Student</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Responsible and ambitious student with excellent time management and customer service abilities. Passionate about learning new technologies and applying my expertise in projects.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button"
            >
              Explore Our Work
            </a>
            <p
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground"
              onClick={() => fileDownload()}
            >
              Download Resume <span aria-hidden="true">→</span>
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <Image
              src="https://t3.ftcdn.net/jpg/05/20/80/86/360_F_520808688_oQ6yuXaNZi5Lf0dxjUXeIQSWPeIINEMI.jpg"
              alt="Flowers & Saints design concept"
              width={600}
              height={600}
              className="w-[400px] rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

