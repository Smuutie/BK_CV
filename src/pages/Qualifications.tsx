import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { skills, type SkillItem, findSkill } from "@/data/skills"

export default function Qualifications() {
  const location = useLocation()
  const [activeId, setActiveId] = useState(skills[0].id)
  const [selectedSkill, setSelectedSkill] = useState<{
    categoryId: string
    item: SkillItem
  } | null>(null)

  useEffect(() => {
    if (location.state?.skillName) {
      const skill = findSkill(location.state.skillName)
      if (skill) {
        setSelectedSkill(skill)
        scrollToSection(skill.categoryId)
      }
    }
  }, [location.state])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-10% 0% -40% 0%" },
    )

    const sections = [...skills.map((s) => s.id)]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const renderSkillIcon = (icon: LucideIcon | string, name: string, className?: string) => {
    if (typeof icon === "string") {
      const isPathOrUrl =
        icon.startsWith("http") || icon.startsWith("/") || icon.startsWith("data:")
      return (
        <img
          src={isPathOrUrl ? icon : `https://cdn.simpleicons.org/${icon}`}
          alt={name}
          className={cn("w-5 h-5 object-contain transition-all group-hover:scale-110", className)}
          loading="lazy"
        />
      )
    }
    const Icon = icon
    return <Icon className={cn("w-5 h-5", className)} />
  }

  const renderModalIcon = (icon: LucideIcon | string, name: string, className?: string) => {
    if (typeof icon === "string") {
      const isPathOrUrl =
        icon.startsWith("http") || icon.startsWith("/") || icon.startsWith("data:")
      return (
        <img
          src={isPathOrUrl ? icon : `https://cdn.simpleicons.org/${icon}`}
          alt={name}
          className={cn("w-8 h-8 object-contain", className)}
        />
      )
    }
    const Icon = icon
    return <Icon className={cn("w-8 h-8", className)} />
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col lg:flex-row gap-12">
      {/* Left Navigation */}
      <aside className="w-64 hidden lg:block sticky top-32 h-fit">
        <nav className="space-y-2">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => scrollToSection(skill.id)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg transition-all flex items-center space-x-3",
                activeId === skill.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "hover:bg-muted text-muted-foreground",
              )}
            >
              <skill.icon className="w-4 h-4" />
              <span className="font-medium">{skill.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-24 pb-32">
        {skills.map((skill) => (
          <motion.section
            key={skill.id}
            id={skill.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <skill.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{skill.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skill.items.map((item) => (
                <motion.div
                  key={item.name}
                  layoutId={`${skill.id}-${item.name}`}
                  onClick={() => setSelectedSkill({ categoryId: skill.id, item })}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-card border shadow-sm flex items-center space-x-3 group cursor-pointer"
                >
                  <div
                    className={cn(
                      "p-2 rounded-lg flex items-center justify-center min-w-[36px] min-h-[36px] transition-colors",
                      item.lightBg
                        ? "bg-white"
                        : "bg-primary/5 text-muted-foreground group-hover:text-primary",
                    )}
                  >
                    {renderSkillIcon(item.icon, item.name)}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Modal for Skill Detail */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`${selectedSkill.categoryId}-${selectedSkill.item.name}`}
              className="relative w-full max-w-md bg-card border rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={cn(
                    "p-3 rounded-xl flex items-center justify-center min-w-[56px] min-h-[56px]",
                    selectedSkill.item.lightBg ? "bg-white" : "bg-primary/10 text-primary",
                  )}
                >
                  {renderModalIcon(selectedSkill.item.icon, selectedSkill.item.name)}
                </div>
                <h3 className="text-2xl font-bold">{selectedSkill.item.name}</h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedSkill.item.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
