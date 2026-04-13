import { motion } from "framer-motion"
import { GraduationCap} from "lucide-react"

const education = [
  {
    institution: "Sofia University “St. Kliment Ohridski”",
    degree: "B.Sc. in Software Engineering",
    period: "Sofia, Bulgaria",
    description: "Detailed study of software engineering principles, algorithms, and JVM technologies.",
  },
  {
    institution: "High School of Mathematics “Akad. Kiril Popov”",
    degree: "Mathematical Profile",
    period: "Plovidv, Bulgaria",
    description: "Focus on Advanced Mathematics, Physics, and competitive programming foundations.",
  },
]

const certifications = [
  {
    title: "Agile Development and Scrum",
    issuer: "Professional Certification",
    description: "Certification focused on agile methodologies and scrum framework for project management.",
  },
  {
    title: "Java Mobile Development",
    issuer: "Sofia University",
    description: "Specialized certification in building mobile applications using Java technologies.",
  },
  {
    title: "Business Management",
    issuer: "Professional Certification",
    description: "Focus on organizational leadership, project planning, and strategic management.",
  },
]

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24">
        {/* Education Section */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <span className="text-sm font-normal text-white bg-muted/50 px-3 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
