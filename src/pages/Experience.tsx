import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { findSkill } from "@/data/skills"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Wiser technology",
    logo: "https://evrotrust.com/bg/wp-content/uploads/sites/2/2025/07/b2b-11-1024x1024.jpg",
    color: "rgba(59, 130, 246, 0.2)",
    projects: [
      {
        client: "VW group",
        title: "Enterprise Order & Testing Platform",
        period: "03.2020 - current",
        role: "Principal Software Engineer and Technical Lead",
        description:
          "Leading the backend development of a highly configurable global platform for managing vehicle orders and testing. Responsible for architectural design, technical refinements, and mentoring a cross-functional team of 8. The system supports multi-tenancy and complex workflow orchestrations.",
        techStack: ["Java", "BPMN", "Camunda", "React JS", "Kafka", "Oauth", "MinIo", "Keycloak", "Docker"],
      },
    ],
  },
  {
    company: "Novarto",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgqGDLA8sWDfKJAbn-nUK8AJOEPjhthbr9Q&s",
    color: "rgba(236, 72, 153, 0.2)",
    projects: [
      {
        client: "Foxtrot",
        title: "Commerce Platform Modernization",
        period: "01.2019 - 03.2020",
        role: "Solution Architect",
        description:
          "Architected and led the migration of a major commerce platform. Reworked the integration map and synchronized efforts across two backend teams (10+ members). Focused on high-level and low-level architecture design, performance optimization, and complex system integrations.",
        techStack: ["SAP Commerce", "Java", "Spring boot", "MinIo"],
      },
      {
        client: "Arco",
        title: "E-commerce Solution Development",
        period: "04.2018 - 03.2019",
        role: "Senior Software Engineer and Technical Lead",
        description:
          "Led a backend team of 7 in developing a new commerce solution for a UK retail giant. Contributed to the architectural design and was responsible for validating technical implementations and cross-team synchronization.",
        techStack: ["SAP Commerce", "Java"],
      },
      {
        client: "British Petroleum",
        title: "ERP & Commerce Integration",
        period: "04.2017 - 08.2018",
        role: "Senior Software Engineer and Technical Lead",
        description:
          "Directed one of three backend teams working on a large-scale ERP and commerce solution. Focused on technical research, complex integrations, and performance improvements for the energy sector.",
        techStack: ["SAP Commerce", "Java"],
      },
      {
        client: "SAP SE and Gigya",
        title: "3rd Party Authentication Gateway",
        period: "02.2017 - 06.2019",
        role: "Senior Software Engineer",
        description:
          "Developed a complete official integration between SAP Commerce and a major 3rd party authentication provider. The solution serves 23 major clients and over 8 million users, ensuring security and GDPR compliance through advanced session management.",
        techStack: ["SAP Commerce", "Spring security", "Oauth"],
      },
      {
        client: "Nestle",
        title: "Custom Commerce Ecosystem",
        period: "02.2016 - 09.2017",
        role: "Software Engineer",
        description:
          "Integral member of the development team for a custom commerce solution for the world's largest food and beverage company. Focused on delivering complex integrations and critical system functionalities.",
        techStack: ["SAP Commerce", "MinIo"],
      },
      {
        client: "Dafgard",
        title: "Industrial Custom Solution",
        period: "05.2015 - 03.2016",
        role: "Junior Software Engineer",
        description:
          "Contributed to the development of a custom industrial solution. Played a key role in developing new functionalities and ensuring code quality through rigorous reviews in a high-velocity startup environment.",
        techStack: ["Java", "Spring boot", "React JS", "Kafka", "RxJava", "MinIo"],
      },
    ],
  },
]

export default function Experience() {
  const navigate = useNavigate()

  const handleSkillClick = (skillName: string) => {
    navigate("/qualifications", { state: { skillName } })
  }

  const renderTechIcon = (skillName: string) => {
    const skill = findSkill(skillName)
    if (!skill) return null

    const { item } = skill
    const Icon = item.icon

    return (
      <div
        className={cn(
          "w-6 h-6 p-1 rounded-md flex items-center justify-center transition-colors",
          item.lightBg ? "bg-white" : "bg-primary/5 group-hover:bg-primary/10",
        )}
      >
        {typeof Icon === "string" ? (
          <img
            src={
              Icon.startsWith("http") || Icon.startsWith("/") || Icon.startsWith("data:")
                ? Icon
                : `https://cdn.simpleicons.org/${Icon}`
            }
            alt={skillName}
            className="w-full h-full object-contain"
          />
        ) : (
          <Icon className="w-full h-full text-muted-foreground group-hover:text-primary" />
        )}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 relative overflow-hidden md:overflow-visible">
      <div className="flex items-center space-x-3 mb-12 md:mb-16">
        <Briefcase className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
      </div>

      <div className="space-y-32">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="relative">
            {/* Background Glow */}
            <div
              className="absolute md:-inset-x-8 -inset-x-0 -inset-y-12 blur-3xl rounded-full -z-10 transition-opacity duration-1000"
              style={{ backgroundColor: exp.color, opacity: 0.3 }}
            />

            <div className="flex flex-col md:flex-row items-start">
              {/* Company Logo and Name */}
              <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8 text-left md:text-right md:sticky md:top-32">
                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-card border flex items-center justify-center overflow-hidden shadow-sm shrink-0">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                </div>
              </div>

              {/* The Chain and Projects */}
              <div className="flex-1 relative ml-4 md:ml-0 pl-8 border-l-2 border-dashed border-muted">
                {/* Logo on the chain */}
                <div className="absolute -left-[17px] -top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-16 pt-2">
                  {exp.projects.map((project, projIndex) => {
                    return (
                      <motion.div
                        key={projIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* The Ball (Bullet point) */}
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] z-10" />

                        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border shadow-sm hover:shadow-md transition-shadow">
                          <div className="mb-6">
                            <span className="text-xl font-black uppercase tracking-[0.2em] text-white">
                              {project.client}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-2">
                            <h4 className="text-lg font-bold">{project.title}</h4>
                            <span className="text-xs font-normal text-white bg-muted/50 px-2 py-1 rounded whitespace-nowrap">
                              {project.period}
                            </span>
                          </div>
                          <p className="text-primary text-sm font-medium mb-3">{project.role}</p>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {project.description}
                          </p>

                          {project.techStack && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                                Tech Stack
                              </div>

                              <div className="flex flex-wrap gap-3 pt-2">
                                {project.techStack.map((tech) => (
                                  <button
                                    key={tech}
                                    onClick={() => handleSkillClick(tech)}
                                    className="p-1 pr-3 rounded-lg bg-background border hover:border-primary transition-all flex items-center gap-2 group"
                                    title={`View ${tech} details`}
                                  >
                                    {renderTechIcon(tech)}
                                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary">
                                      {tech}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
