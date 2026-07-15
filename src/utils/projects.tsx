import { Link2 } from "lucide-react";
import {
  FaMapMarkedAlt,
  FaRobot,
  FaServer,
  FaTasks,
  FaUpload,
} from "react-icons/fa";
import { FaEnvelope, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiCloudinary,
  SiDaisyui,
  SiExpress,
  SiGooglecalendar,
  SiGraphiteEditor,
  SiJsonwebtokens,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiOllama,
  SiPassport,
  SiProtoncalendar,
  SiReactquery,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const projects = [
  {
    title: "RecruitIt",
    completed: false,
    deployed: false,
    description: [
      "RecruitIt modernizes employee administration by bringing workforce management and document issuance into a single platform. From maintaining employee records to generating official documents, the application emphasizes automation, security, and an intuitive user experience powered by a scalable full-stack architecture.",
    ],
    details: [
      {
        heading: "Overview",
        content: [
          "RecruitIt is a modern HR and employee management platform built to simplify workforce administration for organizations of different sizes. Instead of relying on spreadsheets and disconnected tools, RecruitIt provides a centralized workspace where HR teams can manage employees, issue official documents, verify identities, and automate repetitive administrative tasks. The platform is designed with scalability in mind, allowing organizations to manage multiple departments and employees while maintaining secure access control.",
        ],
      },
      {
        heading: "Key Features",
        content: [
          "Secure authentication using JWT and Google OAuth.",
          "Role-based access control for administrators, HR managers, and employees.",
          "Employee profile creation and management.",
          "Generate and distribute official employee documents.",
          "Cloud-based document storage with Cloudinary.",
          "Background email processing using BullMQ and Redis.",
          "Automated email notifications for administrative workflows.",
          "Search and filter employee records efficiently.",
          "Client-side data caching and synchronization with TanStack Query.",
        ],
      },
      {
        heading: "Technical Highlights",
        content: [
          "Built with Next.js for the frontend and Express.js for the backend.",
          "MongoDB used as the primary database with Mongoose ODM.",
          "Redis and BullMQ power asynchronous background jobs.",
          "Cloudinary integrated for secure document storage.",
          "Multer handles file uploads.",
          "Zod provides request validation and type safety.",
          "Modular API architecture with reusable components.",
          "Scalable folder structure designed for future feature expansion.",
        ],
      },
      {
        heading: "Challenges & Learnings",
        content: [
          "Implemented secure authentication and authorization workflows.",
          "Designed a scalable document management system.",
          "Built queue-based background processing using BullMQ and Redis.",
          "Improved client-side state management with TanStack Query.",
          "Strengthened understanding of scalable backend architecture.",
          "Gained hands-on experience with production-ready deployment practices.",
        ],
      },
    ],
    techStack: [
      {
        icon: (
          <RiNextjsFill className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <FaReact className="size-7 md:size-9 text-cyan-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "React",
      },
      {
        icon: (
          <SiTypescript className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "TypeScript",
      },
      {
        icon: (
          <RiTailwindCssFill className="size-7 md:size-9 text-sky-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "Tailwind",
      },
      {
        icon: (
          <FaNodeJs className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Node.js",
      },
      {
        icon: (
          <SiExpress className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Express.js",
      },
      {
        icon: (
          <SiMongodb className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "MongoDB",
      },
      {
        icon: (
          <SiMongoose className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Mongoose",
      },
      {
        icon: (
          <SiJsonwebtokens className="size-7 md:size-9 text-pink-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "JWT",
      },
      {
        icon: (
          <FcGoogle className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "OAuth",
      },
      {
        icon: (
          <SiRedis className="size-7 md:size-9 text-red-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Redis",
      },
      {
        icon: (
          <FaTasks className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "BullMQ",
      },
      {
        icon: (
          <FaEnvelope className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Nodemailer",
      },
      {
        icon: (
          <SiCloudinary className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Cloudinary",
      },
      {
        icon: (
          <FaUpload className="size-7 md:size-9 text-orange-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Multer",
      },
      {
        icon: (
          <SiZod className="size-7 md:size-9 text-indigo-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Zod",
      },
      {
        icon: (
          <SiReactquery className="size-7 md:size-9 text-red-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "TanStack",
      },
      {
        icon: (
          <SiAxios className="size-7 md:size-9 text-purple-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Axios",
      },
    ],
    coverImg: "/images/Project_Images/ManageIt/1.png",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6" />,
        link: "https://github.com/MayankA25/Bulk-Mailer",
      },
    ],
  },
  {
    title: "RideMate",
    completed: true,
    deployed: true,
    description: [
      "RideMate is a full-stack carpooling platform that connects drivers and passengers through intelligent ride matching while prioritizing safety and user privacy. It features real-time chat, live location sharing, document-based user verification, admin moderation, ride notifications, and a scalable backend architecture designed for reliable, real-world transportation workflows.",
    ],
    details: [
      {
        heading: "Overview",
        content:
          "RideMate is a ride-sharing platform developed to make daily commuting safer, more affordable, and environmentally friendly. The platform enables drivers to publish rides while passengers can discover, request, and join available trips. The application focuses heavily on user trust through profile verification and secure communication.",
      },
      {
        heading: "Key Features",
        content: [
          "Create and publish ride listings.",
          "Search for rides based on pickup and destination locations.",
          "Real-time chat between drivers and passengers using Socket.IO.",
          "Live location sharing during rides.",
          "Upload verification documents for user authentication.",
          "Receive ride requests and booking notifications.",
          "Manage ride bookings and trip history.",
          "Admin dashboard for user verification and platform moderation.",
        ],
      },
      {
        heading: "Technical Highlights",
        content: [
          "Built with React, Tailwind, and DaisyUI for the frontend.",
          "Express.js and MongoDB power the backend services.",
          "Socket.IO enables real-time messaging and notifications.",
          "Cloudinary manages storage of verification documents.",
          "Leaflet and OpenStreetMap provide interactive maps and route visualization.",
          "JWT-based authentication secures protected routes.",
          "RESTful APIs designed with a scalable backend architecture.",
        ],
      },
      {
        heading: "Challenges & Learnings",
        content: [
          "Implemented reliable real-time communication using Socket.IO.",
          "Integrated geolocation and interactive mapping services.",
          "Designed secure authentication and document verification workflows.",
          "Built scalable REST APIs for ride management.",
          "Managed media uploads and cloud storage efficiently.",
          "Learned to design applications around real-world transportation workflows.",
        ],
      },
    ],
    techStack: [
      {
        icon: (
          <FaReact className="size-7 md:size-9 text-cyan-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "React",
      },
      {
        icon: (
          <RiTailwindCssFill className="size-7 md:size-9 text-sky-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "Tailwind",
      },
      {
        icon: (
          <SiDaisyui className="size-7 md:size-9 text-fuchsia-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "DaisyUI",
      },
      {
        icon: (
          <FaNodeJs className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Node.js",
      },
      {
        icon: (
          <SiExpress className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Express.js",
      },
      {
        icon: (
          <SiMongodb className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "MongoDB",
      },
      {
        icon: (
          <SiMongoose className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Mongoose",
      },
      {
        icon: (
          <SiSocketdotio className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Socket.IO",
      },
      {
        icon: (
          <SiJsonwebtokens className="size-7 md:size-9 text-pink-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "JWT",
      },
      {
        icon: (
          <SiCloudinary className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Cloudinary",
      },
      {
        icon: (
          <FaUpload className="size-7 md:size-9 text-orange-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Multer",
      },
      {
        icon: (
          <SiLeaflet className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Leaflet",
      },
      {
        icon: (
          <FaMapMarkedAlt className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "OpenStreetMap",
      },
      {
        icon: (
          <FaEnvelope className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Nodemailer",
      },
      {
        icon: (
          <SiAxios className="size-7 md:size-9 text-purple-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Axios",
      },
      {
        icon: (
          <TbBrandReactNative className="size-7 md:size-9 text-cyan-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "Context API",
      },
    ],
    coverImg: "/images/Project_Images/RideMate/1.png",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6" />,
        link: "https://github.com/MayankA25/RideMate",
      },
      {
        name: "Live",
        icon: <Link2 className="size-6" />,
        link: "https://ridemate-2mj3.onrender.com/",
      },
    ],
  },
  {
    title: "StudoSphere",
    completed: true,
    deployed: true,
    description: [
      "StudoSphere is a comprehensive campus management platform that bridges communication between students and placement coordinators. It combines AI-powered discussions, collaborative productivity tools, faculty discovery, job management, and a scalable bulk mailing system into a unified application, showcasing modern full-stack development with real-time features, secure authentication, and production-ready architecture.",
    ],
    details: [
      {
        heading: "Overview",
        content: [
          "StudoSphere is an all-in-one campus collaboration platform developed to improve communication between students, faculty members, and placement coordinators. The platform combines multiple productivity and communication tools into a single application, eliminating the need for separate portals.",
        ],
      },
      {
        heading: "Key Features",
        content: [
          "AI-powered discussion forums for collaborative learning.",
          "Collaborative To-Do lists for team productivity.",
          "Google Calendar integration for scheduling and task management.",
          "Faculty directory with search and discovery features.",
          "Placement management and job posting system.",
          "Bulk email campaigns using a queue-based architecture.",
          "One-to-one real-time messaging between users.",
          "Secure authentication with Google OAuth.",
          "Cloud-based file uploads and media management.",
          "Browser-based code editor powered by Monaco Editor.",
        ],
      },
      {
        heading: "Technical Highlights",
        content: [
          "Socket.IO enables real-time messaging and communication.",
          "BullMQ and Redis handle scalable background email processing.",
          "Passport.js with Google OAuth provides secure authentication.",
          "Cloudinary manages file and media storage.",
          "Ollama with LLaMA 3.1 powers AI-assisted discussions.",
          "Google Calendar API integrates scheduling functionality.",
          "Modular backend architecture designed for scalability and maintainability.",
          "RESTful APIs built to support multiple interconnected modules.",
        ],
      },
      {
        heading: "Challenges & Learnings",
        content: [
          "Implemented secure authentication and authorization workflows.",
          "Built a scalable queue-based email processing system.",
          "Integrated AI capabilities into a real-world application.",
          "Worked with multiple third-party APIs, including Google Calendar and Cloudinary.",
          "Developed real-time communication features using Socket.IO.",
          "Strengthened backend engineering skills through large-scale application design.",
        ],
      },
    ],
    techStack: [
      {
        icon: (
          <FaReact className="size-7 md:size-9 text-cyan-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "React",
      },
      {
        icon: (
          <RiTailwindCssFill className="size-7 md:size-9 text-sky-400 transition-all duration-200 hover:scale-110" />
        ),
        name: "Tailwind",
      },
      {
        icon: (
          <SiDaisyui className="size-7 md:size-9 text-fuchsia-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "DaisyUI",
      },
      {
        icon: (
          <FaNodeJs className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Node.js",
      },
      {
        icon: (
          <SiExpress className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Express.js",
      },
      {
        icon: (
          <SiMongodb className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "MongoDB",
      },
      {
        icon: (
          <SiMongoose className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Mongoose",
      },
      {
        icon: (
          <SiSocketdotio className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Socket.IO",
      },
      {
        icon: (
          <SiRedis className="size-7 md:size-9 text-red-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Redis",
      },
      {
        icon: (
          <FaTasks className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "BullMQ",
      },
      {
        icon: (
          <FaEnvelope className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Nodemailer",
      },
      {
        icon: (
          <FcGoogle className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "OAuth",
      },
      {
        icon: (
          <SiPassport className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Passport.js",
      },
      {
        icon: (
          <SiCloudinary className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Cloudinary",
      },
      {
        icon: (
          <FaUpload className="size-7 md:size-9 text-orange-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Multer",
      },
      {
        icon: (
          <SiOllama className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Ollama",
      },
      {
        icon: (
          <FaRobot className="size-7 md:size-9 text-purple-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "LLaMA 3.1",
      },
      {
        icon: (
          <SiGooglecalendar className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Google Calendar API",
      },
      {
        icon: (
          <SiProtoncalendar className="size-7 md:size-9 text-indigo-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "FullCalendar",
      },
      {
        icon: (
          <SiGraphiteEditor className="size-7 md:size-9 text-blue-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Monaco Editor",
      },
      {
        icon: (
          <SiAxios className="size-7 md:size-9 text-purple-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Axios",
      },
      {
        icon: (
          <SiJsonwebtokens className="size-7 md:size-9 text-pink-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "JWT",
      },
    ],
    coverImg: "/images/Project_Images/StudoSphere/1.png",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6" />,
        link: "https://github.com/MayankA25/StudoSphere",
      },
      {
        name: "Live",
        icon: <Link2 className="size-6" />,
        link: "https://studosphere-2.onrender.com/",
      },
    ],
  },
  {
    title: "BulkMailer",
    completed: true,
    deployed: true,
    description: [
      "BulkMailer is a scalable email automation platform designed to handle high-volume email campaigns efficiently. Built with a queue-based architecture using BullMQ and Redis, it offloads email processing to background workers while supporting Google OAuth, attachments, CC/BCC, and API-based integration for external applications, ensuring reliable and non-blocking email delivery.",
    ],
    details: [
      {
        heading: "Overview",
        content: [
          "BulkMailer is an email automation platform built to send thousands of emails reliably without blocking application performance. Instead of processing emails directly during user requests, the application relies on background workers and queues to ensure efficient delivery.",
        ],
      },
      {
        heading: "Key Features",
        content: [
          "Secure authentication using Google OAuth.",
          "Compose and send bulk email campaigns.",
          "Support for file attachments in emails.",
          "Manage CC and BCC recipients.",
          "Schedule email campaigns for later delivery.",
          "Track email delivery status and campaign progress.",
          "Expose email functionality through REST APIs.",
          "Queue-based processing for reliable, non-blocking email delivery.",
        ],
      },
      {
        heading: "Technical Highlights",
        content: [
          "BullMQ and Redis power asynchronous background job processing.",
          "Dedicated worker processes handle email delivery efficiently.",
          "Nodemailer manages SMTP communication.",
          "Passport.js provides Google OAuth authentication.",
          "Multer handles email attachment uploads.",
          "MongoDB stores campaign and email metadata.",
          "Scalable backend architecture designed for high-volume email processing.",
        ],
      },
      {
        heading: "Challenges & Learnings",
        content: [
          "Built and managed distributed job queues using BullMQ.",
          "Implemented worker-based background processing.",
          "Designed retry strategies for failed email deliveries.",
          "Gained hands-on experience with email infrastructure and SMTP.",
          "Integrated secure OAuth authentication.",
          "Learned to build backend systems capable of handling high-throughput workloads.",
        ],
      },
    ],
    techStack: [
      {
        icon: (
          <FaNodeJs className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Node.js",
      },
      {
        icon: (
          <SiExpress className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "Express.js",
      },
      {
        icon: (
          <SiMongodb className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "MongoDB",
      },
      {
        icon: (
          <SiMongoose className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Mongoose",
      },
      {
        icon: (
          <SiRedis className="size-7 md:size-9 text-red-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Redis",
      },
      {
        icon: (
          <FaTasks className="size-7 md:size-9 text-red-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "BullMQ",
      },
      {
        icon: (
          <FaEnvelope className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Nodemailer",
      },
      {
        icon: (
          <FcGoogle className="size-7 md:size-9 transition-all duration-200 hover:scale-110" />
        ),
        name: "OAuth",
      },
      {
        icon: (
          <SiPassport className="size-7 md:size-9 text-green-600 transition-all duration-200 hover:scale-110" />
        ),
        name: "Passport.js",
      },
      {
        icon: (
          <SiJsonwebtokens className="size-7 md:size-9 text-pink-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "JWT",
      },
      {
        icon: (
          <FaUpload className="size-7 md:size-9 text-orange-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Multer",
      },
      {
        icon: (
          <SiAxios className="size-7 md:size-9 text-purple-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "Axios",
      },
      {
        icon: (
          <FaServer className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
        ),
        name: "REST API",
      },
    ],
    coverImg: "/images/Project_Images/BulkMailer/1.png",
    links: [
      {
        name: "GitHub",
        icon: <FaGithub className="size-6" />,
        link: "https://github.com/MayankA25/Bulk-Mailer",
      },
      {
        name: "Live",
        icon: <Link2 className="size-6" />,
        link: "https://bulk-mailer-0vsb.onrender.com/",
      },
    ],
  },
];
