import {
  Globe,
  Database,
  Layout,
  Layers,
  ShieldCheck,
  Wrench,
  Zap,
  Table,
  Activity,
  Server,
  CheckCircle,
  Users,
  Share2,
  MessageSquare,
  Shield,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Import all local assets from src/assets/icons
const assetIcons = import.meta.glob("../assets/icons/*.{svg,png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Helper to resolve asset icon by filename
const getAssetIcon = (filename: string) => {
  return assetIcons[`../assets/icons/${filename}`] || filename
}

export interface SkillItem {
  name: string
  icon: LucideIcon | string
  description: string
  lightBg?: boolean
}

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  items: SkillItem[]
}

export const skills: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Globe,
    items: [
      {
        name: "Java",
        icon: getAssetIcon("bgjug.png"),
        lightBg: true,
        description:
          "Over 10 years of experience designing and delivering high-impact enterprise software solutions for automotive, energy, and retail giants, focusing on advanced algorithms and distributed system scaling.",
      },
      {
        name: "Groovy",
        icon: getAssetIcon("apachegroovy.svg"),
        lightBg: true,
        description:
          "Applied for efficient scripting, automation, and project orchestration within diverse enterprise ecosystems.",
      },
      {
        name: "Kotlin",
        icon: getAssetIcon("kotlin.svg"),
        description:
          "Modern JVM language leveraged to build robust, expressive, and highly maintainable backend services for scalable platforms.",
      },
      {
        name: "Python",
        icon: getAssetIcon("python.svg"),
        description:
          "Versatile language employed for technical research, complex automation, and rapid prototyping of domain-specific solutions.",
      },
      {
        name: "Scala",
        icon: getAssetIcon("scala.svg"),
        description:
          "Functional and object-oriented language utilized to build high-performance, resilient distributed systems for complex domain challenges.",
      },
      {
        name: "Rest API",
        icon: Share2,
        description:
          "Expertise in designing and implementing robust, secure, and scalable RESTful architectures for global enterprise platforms.",
      },
      {
        name: "Javascript",
        icon: getAssetIcon("javascript.svg"),
        description:
          "Core technology used to build interactive, dynamic frontend and backend applications for high-traffic commerce and testing platforms.",
      },
      {
        name: "SQL",
        icon: Table,
        description:
          "Extensive experience with relational database systems (PostgreSQL, MySQL, MariaDB, MS SQL) for managing critical enterprise data and performance tuning.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    items: [
      {
        name: "Spring boot",
        icon: getAssetIcon("spring.svg"),
        description:
          "The foundational framework for architecting microservices, complex enterprise integrations, and high-performance backend solutions for global retail and hardware leaders.",
      },
      {
        name: "Quarkus",
        icon: getAssetIcon("quarkus.svg"),
        description:
          "Next-generation Java framework utilized for building high-performance, cloud-native applications designed for rapid deployment and efficiency.",
      },
      {
        name: "RxJava",
        icon: getAssetIcon("reactivex.svg"),
        description:
          "Deep expertise in reactive programming for managing complex, asynchronous data streams and event-based systems in high-load industrial environments.",
      },
      {
        name: "BPMN",
        icon: Activity,
        description:
          "Proficient in modeling and implementing complex business processes (BPMN 2.0) to orchestrate workflows in large-scale enterprise platforms.",
      },
      {
        name: "Camunda",
        icon: getAssetIcon("camunda.svg"),
        description:
          "Leading workflow automation platform used to orchestrate distributed systems, complex business logic, and vehicle order processing for automotive giants.",
      },
      {
        name: "SAP Commerce",
        icon: getAssetIcon("sap.svg"),
        description:
          "Extensive experience architecting and leading major commerce platform migrations for global retail, energy, and hardware leaders, serving millions of users.",
      },
      {
        name: "MinIo",
        icon: getAssetIcon("minio.svg"),
        description:
          "High-performance, S3-compatible object storage integrated into commerce and testing platforms for scalable, reliable data management.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    items: [
      {
        name: "React JS",
        icon: getAssetIcon("react.svg"),
        description:
          "Primary frontend library for building modern, responsive, and highly configurable user interfaces for enterprise platforms.",
      },
      {
        name: "Vue js",
        icon: getAssetIcon("vue.svg"),
        description:
          "Progressive JavaScript framework used for creating interactive web interfaces and single-page applications.",
      },
      {
        name: "TypeScript",
        icon: getAssetIcon("typescript.svg"),
        description:
          "Typed superset of JavaScript used to ensure technical excellence and maintainability in large-scale frontend projects.",
      },
      {
        name: "Redux",
        icon: getAssetIcon("redux.svg"),
        description:
          "Predictable state container for managing complex application states across distributed frontend components.",
      },
      {
        name: "Open UI5",
        icon: getAssetIcon("sap.svg"),
        description:
          "Enterprise-grade UI framework used for building professional web applications, particularly in the SAP ecosystem.",
      },
    ],
  },
  {
    id: "messaging",
    title: "Messaging",
    icon: MessageSquare,
    items: [
      {
        name: "Kafka",
        icon: getAssetIcon("apachekafka.svg"),
        lightBg: true,
        description:
          "Distributed event streaming platform used to build real-time data pipelines and asynchronous communication channels for global manufacturing and commerce platforms.",
      },
      {
        name: "RabbitMQ",
        icon: getAssetIcon("rabbitmq.svg"),
        description:
          "Reliable message broker leveraged to handle complex asynchronous workloads and critical service-to-service communication in distributed systems.",
      },
      {
        name: "Akka",
        icon: getAssetIcon("akka.svg"),
        description:
          "Toolkit used for building highly concurrent, distributed, and resilient message-driven applications on the JVM for performance-critical projects.",
      },
      {
        name: "Vert.x",
        icon: getAssetIcon("vertx.svg"),
        description:
          "Reactive toolkit used to build high-performance, scalable Java applications with non-blocking architectures for modern enterprise needs.",
      },
      {
        name: "Reactive Java",
        icon: getAssetIcon("reactivex.svg"),
        description:
          "Expertise in building responsive, resilient, and elastic applications using reactive streams for Swedish manufacturing and other industrial leaders.",
      },
    ],
  },
  {
    id: "storage",
    title: "Storage & Cache",
    icon: Database,
    items: [
      {
        name: "PostgreSql",
        icon: getAssetIcon("postgresql.svg"),
        description:
          "Advanced relational database used as a primary store for complex enterprise data models.",
      },
      {
        name: "MySql",
        icon: getAssetIcon("mysql.svg"),
        description:
          "Reliable and widely used relational database for various high-performance applications.",
      },
      {
        name: "MariaDB",
        icon: getAssetIcon("mariadb.svg"),
        description:
          "Enterprise-grade relational database, used for its robustness and compatibility with modern data requirements.",
      },
      {
        name: "MongoDB",
        icon: getAssetIcon("mongodb.svg"),
        description:
          "Leading NoSQL document database utilized for flexible schemas and handling large volumes of unstructured data.",
      },
      {
        name: "Redis",
        icon: getAssetIcon("redis.svg"),
        description:
          "High-performance, in-memory data store used for caching and improving system performance.",
      },
      {
        name: "Elastic Search",
        icon: getAssetIcon("elasticsearch.svg"),
        description:
          "Distributed search and analytics engine used for building fast, scalable search capabilities within enterprise systems.",
      },
      {
        name: "Hazelcast",
        icon: getAssetIcon("hazelcast.png"),
        description:
          "Distributed in-memory data grid used for high-speed data processing and clustering.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: ShieldCheck,
    items: [
      {
        name: "Keycloak",
        icon: getAssetIcon("keycloak.svg"),
        description:
          "Identity and Access Management solution used to secure complex distributed platforms and manage OIDC/SAML flows for millions of end-users.",
      },
      {
        name: "Oauth",
        icon: Shield,
        description:
          "Standard protocol for secure authorization and session management implemented for automotive platforms and official SAP integrations.",
      },
      {
        name: "Spring security",
        icon: ShieldCheck,
        description:
          "Authentication and access-control framework utilized to secure official integrations between 3rd party providers and enterprise commerce systems.",
      },
      {
        name: "SAML",
        icon: getAssetIcon("saml.svg"),
        description:
          "Security Assertion Markup Language used to implement secure web-based authentication and Single Sign-On (SSO) for large-scale enterprise environments.",
      },
      {
        name: "OIDC",
        icon: getAssetIcon("openidconnect.svg"),
        description:
          "Identity layer built on OAuth 2.0 to provide secure authentication and user information management across distributed systems.",
      },
      {
        name: "SSO",
        icon: ShieldCheck,
        description:
          "Single Sign-On solutions implemented to streamline secure authentication across multiple distributed platforms and high-traffic integrations.",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Wrench,
    items: [
      {
        name: "Docker",
        icon: getAssetIcon("docker.svg"),
        description:
          "Standard containerization technology used for ensuring consistent application environments from development to production.",
      },
      {
        name: "Openshift",
        icon: getAssetIcon("openshift.svg"),
        description:
          "Enterprise-grade Kubernetes platform used for automating deployment and management of containerized applications.",
      },
      {
        name: "Jenkins",
        icon: getAssetIcon("jenkins.svg"),
        description:
          "Leading automation server used for building robust CI/CD pipelines and orchestrating complex build processes.",
      },
      {
        name: "Teamcity",
        icon: getAssetIcon("teamcity.svg"),
        lightBg: true,
        description:
          "Powerful CI/CD platform offering sophisticated build management and seamless integration with the development workflow.",
      },
      {
        name: "Gitlab CI",
        icon: getAssetIcon("gitlab.svg"),
        description:
          "Modern CI/CD solution used for automated testing, building, and deploying software directly within the GitLab ecosystem.",
      },
      {
        name: "Linux",
        icon: getAssetIcon("linux.png"),
        description:
          "Extensive experience with Linux systems for server administration, deployment, and development.",
      },
    ],
  },
  {
    id: "principles",
    title: "Principles",
    icon: Layers,
    items: [
      {
        name: "OOP",
        icon: CheckCircle,
        description:
          "Deep mastery of Object-Oriented Programming principles for designing scalable and maintainable software architectures.",
      },
      {
        name: "Functional Programming",
        icon: Activity,
        description:
          "Utilizing functional programming paradigms to create more predictable and reliable software systems.",
      },
      {
        name: "Reactive Programming",
        icon: Zap,
        description:
          "Designing systems that are responsive, resilient, and elastic using modern reactive programming techniques.",
      },
      {
        name: "Clean architecture",
        icon: Layout,
        description:
          "Commitment to designing software with clear separation of concerns to ensure long-term technical excellence.",
      },
      {
        name: "Agile/Scrum",
        icon: Users,
        description:
          "Skilled in leading cross-functional teams using Agile and Scrum methodologies to deliver high-quality software within deadlines.",
      },
      {
        name: "Design Patterns",
        icon: Layers,
        description:
          "Expertise in applying standard design patterns to solve recurring architectural and implementation challenges.",
      },
    ],
  },
]

export const findSkill = (name: string) => {
  for (const category of skills) {
    const item = category.items.find((i) => i.name.toLowerCase() === name.toLowerCase())
    if (item) return { categoryId: category.id, item }
  }
  return null
}
