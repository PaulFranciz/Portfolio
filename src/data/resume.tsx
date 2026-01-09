import { Icons } from "@/components/icons";
import { HomeIcon, BookOpenIcon } from "lucide-react";

export const DATA = {
  name: "Paul Francis",
  initials: "PF",
  url: "https://paulfrancis.vercel.app",
  location: "Calabar, Cross River State",
  locationLink: "https://maps.app.goo.gl/BgGw4aVoYwKjutUX6",
  description:
    "Software Engineer. I love building things and helping founders bring ideas to life with fast, SEO-optimized builds. Very active on 𝕏.",
  summary:
    "I transformed my tech journey by shifting from a developer mindset to a software engineer's perspective. This change unlocked a world beyond just coding; I now tackle complex challenges across the entire software lifecycle, architecting solutions, optimizing scalability, ensuring robust security, and crafting resilient infrastructures. It’s more than mastering frameworks; it’s about engineering impactful, end-to-end solutions that elevate user experiences and drive innovation. This evolution has empowered me to think not just in terms of tools, but in terms of crafting solutions that shape the future.",
  avatarUrl: "/Paul-F.jpeg",
  skills: [
    "Typescript",
    "Next.js",
    "React",
    "Convex",
    "Clerk",
    "SQL & NoSQL Databases",
    "Sanity",
    "Redis",
    "Docker",
    "TailwindCSS",
    "Git",
    "Github",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: BookOpenIcon, label: "Blog" },
  ],
  contact: {
    email: "pauledet339@gmail.com",
    tel: "+2347061188005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/paulfranciz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paulfranciz",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Paul_Franciz",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "pauledet339@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Circo Digital Academy",
      href: "https://www.circodigitalacademy.com",
      badges: ["Freelance"],
      location: "Calabar, Nigeria",
      title: "Software Engineer",
      logoUrl: "/circo.jpeg",
      start: "Dec 2025",
      end: "Jan 2026",
      description:
        "Built a comprehensive ed-tech platform using Next.js and Convex, featuring real-time video calls, livestreaming, Paystack payments, role-based access control, certificate generation, forums, and an in-app messaging system with offline detection.",
    },
    {
      company: "Goshen",
      href: "#",
      badges: ["Freelance"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/Goshen.jpeg",
      start: "Dec 2025",
      end: "Present",
      description: "",
    },
    {
      company: "Nextbud (Now Jami)",
      href: "https://nextbudapp.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/Nextbud.jpg",
      start: "Aug, 2024",
      end: "Jan, 2025",
      description:
        "I spearheaded the development of the Landing page and the admin dashboard using Next.js, significantly improving data management efficiency by 40% through the implementation of real-time monitoring and updates. By collaborating closely with the design team to adhere to accessibility standards, I enhanced usability across diverse user groups, resulting in a 20% increase in user satisfaction. Additionally, I optimized the dashboard's performance through techniques such as lazy loading and code splitting, cutting initial load times by 50% to ensure a seamless and efficient user experience.",
    },
    {
      company: "Rehabify Learn",
      badges: [],
      href: "https://www.rehabifylearn.com",
      location: "Remote",
      title: "Lead Software Engineer",
      logoUrl: "/Rehabify.jpeg",
      start: "May 2025",
      end: "Present",
      description:
        `I led and built RehabifyLearn, a comprehensive learning management system using Next.js 15, React 19, and TypeScript that integrates Sanity CMS for content management, Clerk for authentication, and Paystack for secure payments, featuring a user-centric interface with custom dark mode using honeydew-tinted text, responsive design across all devices, modular course structure with real-time progress tracking, multimedia support, and optimized performance through server components.`,
    },
    {
      company: "RehabifyHealth",
      badges: [],
      href: "https://www.rehabifyhealth.com",
      location: "Remote",
      title: "CTO | Software Engineer",
      logoUrl: "/Rehabify.jpeg",
      start: "August 2024",
      end: "Present",
      description:
        "I led the design and optimization of reusable components and modular CSS frameworks, accelerating feature development by 30% and enhancing code maintainability. Working within a cross-functional team of eight developers and designers, I played a key role in architecting the application and integrating Firebase for backend services, which streamlined development processes and ensured robust scalability. Additionally, I collaborated closely with the design team to transform UX/UI mockups into dynamic, accessible, and mobile-responsive interfaces, creating a seamless and engaging user experience that laid the groundwork for the product's long-term success.",
    },
    {
      company: "Hogis Group",
      href: "https://www.hogisluxurysuites.com",
      badges: ["Freelance"],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/Hogis-group.jpg",
      start: "Freelance",
      end: "August 2024",
      description:
        "Led the development of a comprehensive digital menu platform that seamlessly incorporated customer feedback mechanisms. Enhanced the user experience through custom motion design advertisements, which contributed significantly to business growth, achieving a 60% increase in sales revenue.",
    },
    {
      company: "Circo Digital Academy",
      href: "#",
      badges: ["Contract"],
      location: "Calabar, Nigeria",
      title: "React Native Instructor",
      logoUrl: "/circo.jpeg",
      start: "June 2025",
      end: "Aug. 2025",
      description:
        "Delivered comprehensive React Native training to aspiring mobile developers, covering core concepts including component architecture, state management, navigation, and native module integration. Designed and implemented hands-on curriculum with real-world projects, enabling students to build production-ready cross-platform mobile applications. Mentored students through the complete app development lifecycle from ideation to deployment.",
    },
  ],
  education: [
    {
      school: "Scrimba",
      href: "https://v2.scrimba.com",
      degree: "Software Engineering",
      logoUrl: "/scrimba_logo.jpeg",
      start: "2022",
      end: "2023",
    },
    {
      school: "University of Calabar",
      href: "https://unical.edu.ng",
      degree: "Bachelor's Degree of Biochemistry",
      logoUrl: "/logo-wide.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Circo Digital Academy",
      href: "https://www.circodigitalacademy.com",
      dates: "Dec 22 2025 - Jan 09 2026",
      active: true,
      description:
        "Developed a comprehensive ed-tech platform using Next.js and Convex, featuring real-time video calls, livestreaming, Paystack payments, role-based access control, certificate generation, forums, and an in-app messaging system with offline detection.",
      technologies: [
        "SaaS",
        "NextJs",
        "TypeScript",
        "Convex (real-time backend)",
        "Clerk",
        "Sanity CMS",
        "Stream Video SDK, Gumlet",
        "Resend, React Email",
        "ImageKit",
        "Tailwind css",
        "shadcn/ui, Radix UI, Tremor",
        "Paystack",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.circodigitalacademy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dzrnkgvts/image/upload/v1767961040/circo-cover-image.webp",
      video: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto:good,f_auto,w_1280,h_720,br_1.5m/circo-demo.mp4",
    },
    {
      title: "Rehabifyhealth",
      href: "https://Rehabifyhealth.com",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Connect with qualified physiotherapists for personalized care. Book online sessions, track your progress, and improve your health with expert guidance.",
      technologies: [
        "SaaS",
        "NextJs",
        "TypeScript",
        "ConvexDB",
        "Clerk",
        "Cloudflare R2",
        "Posthog",
        "Zustand",
        "Tailwind css",
        "Shadcn UI",
        "Radix",
        "Paystack",
      ],
      links: [
        {
          type: "Website",
          href: "https://Rehabifyhealth.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto/v1765633499/rehabifyhealth_online-video-cutter.com_w0mzve.mp4",
    },
    {
      title: "Urban Vogue - E-commerce Platform",
      href: "https://urban-vogue-psi.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        `A comprehensive e-commerce platform for clothing and accessories.`,
      technologies: [
        "Next.js",
        "Sanity CMS",
        "Clerk",
        "PayStack",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://urban-vogue-psi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/PaulFranciz/Rehabify-Learn.git",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://res.cloudinary.com/dzrnkgvts/image/upload/v1750873440/localhost_3000__Nest_Hub_Max_43_tm8xy0.webp",
      video:
        "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto/v1765633548/Screen_Recording_2025-12-13_at_2.41.45_PM_envjwf.mp4",
    },
    {
      title: "Nextbud (Now Jami)",
      href: "https://nextbudapp.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Connecting African immigrants in a new country to fellow Africans and Local African-Owned businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "TailwindCSS",
        "Firebase",
        "Shadcn UI",
        "SaaS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nextbudapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://portfolio-video-demo.netlify.app/videos/Nextbud-vid.mp4",
    },
    {
      title: "Goshen Physiotherapy",
      href: "https://www.goshenphysiotherapyng.org",
      dates: "December 2025 - Present",
      active: true,
      description:
        "A comprehensive digital platform for Goshen Physiotherapy, designed to streamline patient engagement and service delivery. Features include appointment scheduling, detailed service catalogs, and an informative health blog, all wrapped in a modern, responsive design for an optimal user experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.goshenphysiotherapyng.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dzrnkgvts/video/upload/q_auto,f_auto/v1765635263/Goshen_t4kumd.mov",
    },
    {
      title: "Rehabify Learn - Interactive Rehabilitation Education Platform",
      href: "https://www.rehabifylearn.com",
      dates: "May 2025 - Present",
      active: true,
      description:
        `A comprehensive learning platform for rehabilitation professionals. Access courses, interactive exercises, and certification programs designed to enhance rehabilitation knowledge and techniques.`,
      technologies: [
        "Next.js",
        "Sanity CMS",
        "Clerk",
        "PayStack",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.rehabifylearn.com",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/PaulFranciz/Rehabify-Learn.git",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://rehabifylearn.com/image/og-image.webp",
      video:
        "",
    },

    {
      title: "Hogis OrderNow - Online Food Ordering & Delivery",
      href: "https://hogis-group-order-now.vercel.app",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        `Order delicious food from Hogis branches in Calabar. Easy online ordering, fast delivery, and multiple restaurant options from the premier hospitality group.`,
      technologies: [
        "Next.js",
        "Convex",
        "Clerk",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hogis-group-order-now.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PaulFranciz/Hogis-Group-OrderNow.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/diaknp7in/image/upload/v1744036785/ChatGPT_Image_Apr_7_2025_02_02_25_PM_zcmnux.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Screenlify",
      dates: "Currently Working On",
      location: "",
      description:
        "A comprehensive digital signage and advertising platform built with Next.js, TypeScript, and Convex. Features a Player app for displaying dynamic content on screens, a Web Admin dashboard for managing campaigns, venues, and analytics, real-time content synchronization, proof-of-play tracking, and Cloudflare R2 integration for media storage. The platform enables businesses to manage targeted advertising across multiple screen locations.",
      image:
        "",
      links: [
        {
          title: "Screenlify",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://screenlify-web-marketing.vercel.app/",
        },
      ],
    },
    {
      title: "Team Lead at Rehabify",
      dates: "Leadership and Team Collaboration",
      location: "Remote",
      description:
        "Focused on clear communication and planning to ensure project success.",
      icon: "public",
      image:
        "/Rehabify.jpeg",
      links: [],
    },
    {
      title: "Cowrywise Campus Ambassador",
      dates: "Community Engagement",
      location: "Calabar, Nigeria",
      description:
        "Enlightened students about financial literacy and digital financial solutions.",
      image:
        "/cowrywise.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Ai Codelabs 2.0 @ DevFest Calabar 24",
      dates: "Conference Participation",
      location: "Youreka Hub, State Housing Estate, Calabar,",
      description:
        "Attended DevFest (Ai Codelabs 2.0 @ DevFest Calabar 24) to stay on the cutting edge of technologies like AI and blockchain.",
      image:
        "/DF24-Logo-Lockup_xeJa5Hb.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ]
} as const;
