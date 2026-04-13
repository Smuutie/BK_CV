import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Send, Rocket, Lightbulb, GraduationCap } from "lucide-react"

const tabs = [
  { id: "/", label: "About Me", icon: Send },
  { id: "/experience", label: "Experience", icon: Rocket },
  { id: "/qualifications", label: "Qualifications", icon: Lightbulb },
  { id: "/education", label: "Education", icon: GraduationCap },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center h-16 relative">
            <div className="flex space-x-2 bg-muted p-1.5 rounded-xl">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.id}
                  className={cn(
                    "relative px-4 py-2 text-base font-semibold transition-colors rounded-lg flex items-center gap-2",
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
