import { Icons } from "@/components/icons";
import { HomeIcon, BookOpenIcon } from "lucide-react";

export const DATA = {
  name: "Paul Francis",
  initials: "PF",
  url: "https://paulfrancis.vercel.app",
  location: "Calabar, Cross River State",
  locationLink: "https://maps.app.goo.gl/BgGw4aVoYwKjutUX6",
  description:
    "Senior Frontend Engineer. I love building things and helping people. Very active on 𝕏.",
  summary:
    "I transformed my tech journey by shifting from a developer mindset to a software engineer's perspective. This change unlocked a world beyond just coding; I now tackle complex challenges across the entire software lifecycle—architecting solutions, optimizing scalability, ensuring robust security, and crafting resilient infrastructures. It’s more than mastering frameworks; it’s about engineering impactful, end-to-end solutions that elevate user experiences and drive innovation. This evolution has empowered me to think not just in terms of tools, but in terms of crafting solutions that shape the future.",
  avatarUrl: "/me.webp",
  skills: [
    "Typescript",
    "Next.js",
    "React",
    "Convex",
    "Clerk",
    "NoSQL",
    "SQL",
    "Sanity",
    "Redis",
    "TailwindCSS",
    "Git",
    "Github",
    "Figma",
    "Shadcn UI",
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
        url: "https://dub.sh/yQres2n",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/Paul_Franciz",
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
      company: "Nextbud",
      href: "https://nextbudapp.com",
      badges: [],
      location: "Remote",
      title: "Senior Frontend Engineer",
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
      company: "Rehabify",
      badges: [],
      href: "https://www.rehabifyhealth.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/Rehabify.jpeg",
      start: "August 2024",
      end: "Present",
      description:
        "I led the design and optimization of reusable components and modular CSS frameworks, accelerating feature development by 30% and enhancing code maintainability. Working within a cross-functional team of eight developers and designers, I played a key role in architecting the application and integrating Firebase for backend services, which streamlined development processes and ensured robust scalability. Additionally, I collaborated closely with the design team to transform UX/UI mockups into dynamic, accessible, and mobile-responsive interfaces, creating a seamless and engaging user experience that laid the groundwork for the product's long-term success.",
    },
    {
      company: "Hogis Group",
      href: "https://www.hogisluxurysuites.com",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/Hogis-group.jpg",
      start: "Freelance",
      end: "August 2024",
      description:
        "Led the development of a comprehensive digital menu platform that seamlessly incorporated customer feedback mechanisms. Enhanced the user experience through custom motion design advertisements, which contributed significantly to business growth, achieving a 60% increase in sales revenue.",
    },
  ],
  education: [
    {
      school: "Scrimba",
      href: "https://v2.scrimba.com",
      degree: "Frontend Engineering",
      logoUrl: "/scrimba_logo.jpeg",
      start: "2022",
      end: "2023",
    },
    {
      school: "University of Calabar",
      href: "https://unical.edu.ng",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/logo-wide.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Rehabify Learn - Interactive Rehabilitation Education Platform",
      href: "https://urban-vogue-psi.vercel.app/",
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
    {
      title: "TicketCrib - A Ticketing Platform",
      href: "https://ticket-crib.vercel.app/",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        `TicketCrib is a real-time event ticketing platform built with Next.js, Convex, Clerk, and Paystack. It features real-time ticket availability, smart queue management, secure payment processing, digital ticketing with QR codes, and automated refunds. The platform leverages modern UI libraries (Tailwind CSS, shadcn/ui) for a responsive, accessible user experience and integrates authentication and real-time backend updates for seamless event management and ticket sales.`,
      technologies: [
        "Next.js",
        "Convex",
        "Clerk",
        "Typescript",
        "Paystack",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ticket-crib.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OtuEmmanuella/TicketCrib.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dzrnkgvts/image/upload/v1746032511/ChatGPT_Image_Apr_30_2025_06_01_28_PM_aahqsv.png",
      video: "",
    },
    {
      title: "Trainify - A Learning Management System",
      href: "https://trainify-weld.vercel.app/",
      dates: "March 2025 - Present",
      active: true,
      description:
        `A modern, feature-rich Learning Management System built with Next.js 15, Sanity CMS, Clerk, and Stripe. Features real-time content updates, course progress tracking, and secure payment processing.`,
      technologies: [
        "Next.js",
        "Sanity",
        "Clerk",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://trainify-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PaulFranciz/Trainify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dzrnkgvts/video/upload/v1746027654/Screen_Recording_2025-04-30_at_16.37.51_fqddpz.mov",
    },
   
    {
      title: "Nextbud",
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
      title: "Rehabify",
      href: "https://Rehabifyhealth.com",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Connect with qualified physiotherapists for personalized care. Book online sessions, track your progress, and improve your health with expert guidance.",
      technologies: [
        "SaaS",
        "NextJs",
        "TypeScript",
        "Firebase",
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
      video: "https://portfolio-video-demo.netlify.app/videos/rehabify-vid.mp4",
    },
    {
      title: "Otoño - music player",
      href: "https://otono-music.netlify.app",
      dates: "Jan 2025",
      active: true,
      description:
        "Minimalistic music player | A limited range of handpicked songs using a simple but sleek interface.",
      technologies: [
        "React.js",
        "TypeScript", 
         "RESTful API",
         "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://otono-music.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PaulFranciz/Otono",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://portfolio-video-demo.netlify.app/videos/Otono video demo.mp4",
    },
    {
      title: "Tesser",
      href: "https://tesser.netlify.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Tesser is a project management tool | Features similar capabilities as Jira",
      technologies: [
        "React.js",
        "TypeScript", 
         "SCSS",
         "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://tesser.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PaulFranciz/Tesser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "#",
    },
  ],
  hackathons: [
    {
      title: "Hogis-OrderNow",
      dates: "Currently Working On",
      location: "",
      description:
        " full-featured online food ordering platform built with Next.js and TypeScript. It supports user authentication, shared cart functionality, payment integration, and an admin dashboard for order and menu management. The application features a modern UI   with Tailwind CSS and leverages Convex for backend operations.",
      image:
        "",
      links: [
        {
          title: "OrderNow",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://hogis-group-order-now.vercel.app/",
        },
      ],
    },
    {
      title: "TicketCrib",
      dates: "Currently Working On",
      location: "",
      description:
        `Developed TicketCrib, a real-time event ticketing platform built with Next.js, Convex, Clerk, and Paystack. Implemented features including real-time ticket availability, smart queue management, secure payment processing, digital ticketing with QR codes, and automated refunds. Leveraged modern UI libraries (Tailwind CSS, shadcn/ui) for a responsive, accessible user experience, and integrated authentication and real-time backend updates for seamless event management and ticket sales.`,
      image:
        "",
      links: [
        {
          title: "TicketCrib",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ticket-crib.vercel.app/",
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
