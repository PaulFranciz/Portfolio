import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

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
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Firebase",
    "MongoDB",
    "Solidity",
    "Hardhat",
    "Thirdweb",
    "Sanity CMS",
    "Git",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },

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
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
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
      start: "August 2024",
      end: "Present",
      description:
        "I spearheaded the development of the Landing page and the admin dashboard using Next.js, significantly improving data management efficiency by 40% through the implementation of real-time monitoring and updates. By collaborating closely with the design team to adhere to accessibility standards, I enhanced usability across diverse user groups, resulting in a 20% increase in user satisfaction. Additionally, I optimized the dashboard's performance through techniques such as lazy loading and code splitting, cutting initial load times by 50% to ensure a seamless and efficient user experience.",
    },
    {
      company: "Rehabify",
      badges: [],
      href: "https://rehabifyng.com",
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
      href: "https://Rehabifyng.com",
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
        "Sanity CMS",
        "Paystack",
      ],
      links: [
        {
          type: "Website",
          href: "https://Rehabifyng.com",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "",
      video: "https://portfolio-video-demo.netlify.app/videos/rehabify-vid.mp4",
    },
    {
      title: "Hogis Group - OrderNow",
      href: "https://hogis-group.netlify.app",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "Experience ultimate convenience with Hogis Group's OrderNow platform! Whether you're craving delicious meals, booking an event, or need hotel services, OrderNow connects you seamlessly with any of our three branches.",
      technologies: [
       "React.js",
        "Javascript",
        "Firebase",
        "Tailwind css",
        "CSS3",
        "Netlify severless function",
        "Paystack",
      ],
      links: [
        {
          type: "Website",
          href: "https://hogis-group.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/OrderNow.png",
      video: "",
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
         "RESTful API"
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
      title: "Sharpcutz",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "GSAP",
        "Shadcn UI",
        "Radix",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://portfolio-video-demo.netlify.app/videos/sharpcutz demo.mp4",
    },
  ],
  hackathons: [
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
    },
    {
      title: "Aries (E-Commerce)",
      dates: "Currently Working On",
      location: "",
      description:
        "Teamed up with a Friend to build an e-commerce website that will sell luxury fashion, gadgets, and home interior products, featuring top-tier brands like LV, Nike, Gucci, Apple, Samsung, and more. The goal is to build a dynamic, user-friendly platform where products can be managed using Sanity CMS.",
      image:
        "/Aries.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
   
    {
      title: "TipJar",
      dates: "Currently Working On",
      location: "",
      description:
        "A decentralized blockchain application that enables seamless, transparent, and secure peer-to-peer tipping and micropayments.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
  ],
} as const;
