import { Link2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const projects = [
  {
    title: "RecruitIt",
    completed: false,
    deployed: false,
    description:
      "RecruitIt modernizes employee administration by bringing workforce management and document issuance into a single platform. From maintaining employee records to generating official documents, the application emphasizes automation, security, and an intuitive user experience powered by a scalable full-stack architecture.",
    details: [
      {
        heading: "Overview",
        content:
          "RecruitIt is a modern HR and employee management platform built to simplify workforce administration for organizations of different sizes. Instead of relying on spreadsheets and disconnected tools, RecruitIt provides a centralized workspace where HR teams can manage employees, issue official documents, verify identities, and automate repetitive administrative tasks. The platform is designed with scalability in mind, allowing organizations to manage multiple departments and employees while maintaining secure access control.",
      },
      {
        heading: "Key Features",
        content:
          "The application provides secure authentication using JWT and Google OAuth, role-based authorization for administrators, HR managers, and employees, employee profile management, document generation and distribution, cloud-based file storage using Cloudinary, background email processing with BullMQ and Redis, automated notifications, and efficient search and filtering of employee records. TanStack Query is used to improve data synchronization and caching across the application.",
      },
      {
        heading: "Technical Highlights",
        content:
          "RecruitIt follows a modern full-stack architecture using Next.js on the frontend and Express.js on the backend. MongoDB is used as the primary database, while Redis and BullMQ power asynchronous tasks such as email delivery. Cloudinary manages document storage, Multer handles uploads, and Zod validates incoming requests. The application is designed with modular APIs, reusable components, and scalable folder structures to support future feature expansion.",
      },
      {
        heading: "Challenges & Learnings",
        content:
          "Building RecruitIt required solving challenges around authentication, secure document management, asynchronous job processing, and efficient client-side state management. The project strengthened my understanding of scalable backend design, queue-based architectures, authentication workflows, and production-ready deployment practices.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google OAuth",
      "Redis",
      "BullMQ",
      "Nodemailer",
      "Cloudinary",
      "Multer",
      "Zod",
      "TanStack Query",
      "Axios",
    ],
    coverImg: "/images/hero-image.jpg",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6"/>,
        link: "https://github.com/MayankA25/Bulk-Mailer"
      }
    ],
  },
  {
    title: "RideMate",
    completed: true,
    deployed: true,
    description:
      "RideMate is a full-stack carpooling platform that connects drivers and passengers through intelligent ride matching while prioritizing safety and user privacy. It features real-time chat, live location sharing, document-based user verification, admin moderation, ride notifications, and a scalable backend architecture designed for reliable, real-world transportation workflows.",
    details: [
      {
        heading: "Overview",
        content:
          "RideMate is a ride-sharing platform developed to make daily commuting safer, more affordable, and environmentally friendly. The platform enables drivers to publish rides while passengers can discover, request, and join available trips. The application focuses heavily on user trust through profile verification and secure communication.",
      },
      {
        heading: "Key Features",
        content:
          "Users can create ride listings, search for rides using locations, communicate through real-time chat, share live locations, upload verification documents, receive ride notifications, and manage bookings. Administrators can monitor users, verify submitted documents, and moderate platform activity.",
      },
      {
        heading: "Technical Highlights",
        content:
          "RideMate uses React with Tailwind CSS and DaisyUI for the frontend and Express.js with MongoDB for backend services. Socket.IO enables real-time messaging, Cloudinary stores uploaded verification documents, Leaflet with OpenStreetMap provides interactive maps, while JWT secures authenticated routes.",
      },
      {
        heading: "Challenges & Learnings",
        content:
          "The project improved my understanding of real-time communication, geolocation services, secure authentication, media uploads, scalable REST API development, and designing applications around real-world user workflows.",
      },
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
      "Cloudinary",
      "Multer",
      "Leaflet",
      "OpenStreetMap",
      "Nodemailer",
      "Axios",
      "Context API",
    ],
    coverImg: "/images/hero-image.jpg",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6"/>,
        link: "https://github.com/MayankA25/RideMate"
      },
      {
        name: "Live",
        icon: <Link2 className="size-6"/>,
        link: "https://ridemate-2mj3.onrender.com/"
      }
    ]
  },
  {
    title: "StudoSphere",
    completed: true,
    deployed: true,
    description:
      "StudoSphere is a comprehensive campus management platform that bridges communication between students and placement coordinators. It combines AI-powered discussions, collaborative productivity tools, faculty discovery, job management, and a scalable bulk mailing system into a unified application, showcasing modern full-stack development with real-time features, secure authentication, and production-ready architecture.",
    details: [
      {
        heading: "Overview",
        content:
          "StudoSphere is an all-in-one campus collaboration platform developed to improve communication between students, faculty members, and placement coordinators. The platform combines multiple productivity and communication tools into a single application, eliminating the need for separate portals.",
      },
      {
        heading: "Key Features",
        content:
          "The platform includes AI-powered discussion forums, collaborative To-Do lists, integrated Google Calendar scheduling, faculty directory, placement management, job postings, bulk email campaigns, one-to-one messaging, secure authentication, cloud-based file uploads, and a browser-based code editor powered by Monaco Editor.",
      },
      {
        heading: "Technical Highlights",
        content:
          "StudoSphere uses Socket.IO for real-time communication, BullMQ and Redis for scalable background email processing, Passport.js with Google OAuth for authentication, Cloudinary for media management, and Ollama with LLaMA 3.1 to power AI-assisted discussions. The application follows a modular backend architecture that supports scalable feature development.",
      },
      {
        heading: "Challenges & Learnings",
        content:
          "Developing StudoSphere significantly strengthened my backend engineering skills by exposing me to authentication systems, queue-based processing, AI integration, third-party API integration, real-time communication, and large-scale application architecture.",
      },
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "Redis",
      "BullMQ",
      "Nodemailer",
      "Google OAuth",
      "Passport.js",
      "Cloudinary",
      "Multer",
      "Ollama",
      "LLaMA 3.1",
      "Google Calendar API",
      "FullCalendar",
      "Monaco Editor",
      "Axios",
      "JWT",
    ],
    coverImg: "/images/hero-image.jpg",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6"/>,
        link: "https://github.com/MayankA25/StudoSphere"
      },
      {
        name: "Live",
        icon: <Link2 className="size-6"/>,
        link: "https://studosphere-1.onrender.com/"
      }
      ,
    ],
  },
  {
    title: "BulkMailer",
    completed: true,
    deployed: true,
    description:
      "BulkMailer is a scalable email automation platform designed to handle high-volume email campaigns efficiently. Built with a queue-based architecture using BullMQ and Redis, it offloads email processing to background workers while supporting Google OAuth, attachments, CC/BCC, and API-based integration for external applications, ensuring reliable and non-blocking email delivery.",
    details: [
      {
        heading: "Overview",
        content:
          "BulkMailer is an email automation platform built to send thousands of emails reliably without blocking application performance. Instead of processing emails directly during user requests, the application relies on background workers and queues to ensure efficient delivery.",
      },
      {
        heading: "Key Features",
        content:
          "Users can authenticate using Google OAuth, compose campaigns with attachments, manage CC and BCC recipients, schedule bulk email jobs, monitor delivery status, and integrate email functionality through REST APIs.",
      },
      {
        heading: "Technical Highlights",
        content:
          "BullMQ and Redis form the core of the application's asynchronous architecture by processing email jobs in background workers. Nodemailer handles SMTP communication, Passport.js manages Google OAuth authentication, Multer supports attachment uploads, and MongoDB stores campaign information.",
      },
      {
        heading: "Challenges & Learnings",
        content:
          "The project provided hands-on experience with distributed job queues, worker processes, retry strategies, email infrastructure, OAuth authentication, and designing backend systems capable of handling high-throughput workloads.",
      },
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "Nodemailer",
      "Google OAuth",
      "Passport.js",
      "JWT",
      "Multer",
      "Axios",
      "REST API",
    ],
    coverImg: "/images/hero-image.jpg",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6"/>,
        link: "https://github.com/MayankA25/Bulk-Mailer"
      },
    ],
  },
];
