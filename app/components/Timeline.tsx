"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    id: 1,
    year: "2021-24",
    title: "Bachelor of Engineering - IT",
    description: "Gujarat Technological University, India",
    details:
      "Completed my Bachelor degree in Information Technology from Gujarat Technological University. During my final year, I collaborated with my colleagues to develop a React-based project E-Ride Share.",
  },
  {
    id: 2,
    year: "2024-25",
    title: "Trainee Software Engineer - TatvaSoft",
    description: "Early Career Experience in Software Development",
    details:
      "Started my professional journey at TatvaSoft, gaining hands-on experience with technologies such as MVC, ASP.NET, .NET Core, EF Core, and PostgreSQL. Focused primarily on backend development and database management, strengthening my problem-solving abilities and coding skills through practical implementation.",
  },
  {
    id: 3,
    year: "2025-26",
    title: "Associate Software Engineer - TatvaSoft",
    description: "Hands-on Experience in Full-Stack Development",
    details:
      "Worked as an Associate Software Engineer on the SMS & EMS(HRMS) project. Utilized Angular, .NET Web API, and SQL Server Management Studio (SSMS) to develop and enhance key modules. Contributed to improving application performance, functionality, and overall user experience.",
  }
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-10 bg-background overflow-hidden" id="sectionExperience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Experience</h2>
          {/* <p className="mt-4 text-lg text-muted-foreground">The evolution of Flowers & Saints through the years</p> */}
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

