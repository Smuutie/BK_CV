import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Atom,
  Settings,
  Wind,
  Snowflake,
  Car,
  Flag,
  Coffee,
} from "lucide-react"

const interests = [
  { name: "Physics", icon: Atom },
  { name: "Mechanical Engineering", icon: Settings },
  { name: "HVAC", icon: Wind },
  { name: "Snowboarding", icon: Snowflake },
  { name: "Cars and mechanics", icon: Car },
  { name: "Formula 1", icon: Flag },
  { name: "Coffee", icon: Coffee },
]

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
              BK
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-background rounded-full"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Bozhidar Kuzmanov</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Principle software engineer | Java developer | Tinkerer
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Smuutie"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bozhidar-kuzmanov-862534155/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bobiwav@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="w-full text-left space-y-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 md:p-12 rounded-2xl bg-card border shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3">Summary</h3>
            <p className="text-muted-foreground mb-6">
              Software Engineer with 11+ years of experience building and evolving backend systems,
              mostly in the Java ecosystem. I enjoy working on distributed systems, service
              boundaries, and the trade-offs behind scalability, consistency, and performance.
            </p>
            <p className="text-muted-foreground mb-6">
              Over the years, I’ve been involved in designing system architectures, breaking down
              monoliths, and shaping microservice-based solutions, with a focus on simplicity,
              reliability, and long-term maintainability. I care about clean code, meaningful
              abstractions, and avoiding unnecessary complexity.
            </p>
            <p className="text-muted-foreground mb-6">
              I’ve led technical initiatives, mentored engineers, and played a key role in building
              and scaling engineering teams into self-sustainable units. I focus on enabling
              teams to make sound technical decisions, establish good practices, and operate
              independently while maintaining alignment with broader system goals.
            </p>
            <p className="text-muted-foreground mb-6">
              I like digging into things, keeping up with new tools and
              patterns, and continuously refining my approach to building software that doesn’t just
              work — but holds up over time. In short, I like to know how things work.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-card border shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
            <p className="text-muted-foreground">
              Lately, I’ve been spending time on IoT and smart home setups—figuring out how devices
              talk to each other, where things break, and how to make them reliable.
            </p>
            <p className="text-muted-foreground">
              On the side, I run a self-hosted environment on Proxmox with my own VPN, reverse
              proxy, and firewall. Mostly experimenting with owning my infrastructure, improving
              privacy, and understanding the trade-offs of not relying on managed services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-card border shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-8 text-center">Interests</h3>
            <div className="flex flex-wrap justify-center gap-12">
              {interests.map((interest, index) => (
                <div key={index} className="relative group flex flex-col items-center">
                  <interest.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                  <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-muted px-3 py-1 rounded text-sm whitespace-nowrap z-20 pointer-events-none">
                    {interest.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
