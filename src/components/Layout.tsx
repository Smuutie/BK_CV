import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Send, Rocket, Lightbulb, GraduationCap } from "lucide-react"
import { useEffect, useRef } from "react"

const tabs = [
  { id: "/", label: "About Me", icon: Send },
  { id: "/experience", label: "Experience", icon: Rocket },
  { id: "/qualifications", label: "Qualifications", icon: Lightbulb },
  { id: "/education", label: "Education", icon: GraduationCap },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const activeTabRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && activeTabRef.current) {
        activeTabRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }

    // Small delay to ensure layout is ready and animations are settled
    const timeoutId = setTimeout(handleScroll, 100)
    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center py-4 relative">
            <div className="flex overflow-x-auto md:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-nowrap md:flex-wrap justify-start md:justify-center gap-1.5 bg-muted p-1.5 rounded-xl w-max max-w-full">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.id}
                  ref={location.pathname === tab.id ? activeTabRef : null}
                  className={cn(
                    "relative px-3 md:px-4 py-2 text-sm md:text-base font-semibold transition-colors rounded-lg flex items-center gap-2 shrink-0",
                    location.pathname === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {location.pathname === tab.id && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-background rounded-lg shadow-sm"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <tab.icon className="relative z-10 w-5 h-5" />
                  <span className="relative z-10">{tab.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
