import {
  amlbd,
  self,
  mobile,
  backend,
  creator,
  web,
  NET,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  bootstrap,
  tailwind,
  C,
  C_plus_plus,
  C_sharp,
  SqlServer,
  MySql,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  emajohn,
  linkedin,
  email,
  phone,
  ontheway,
  tshirtmania,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: C_plus_plus,
  },
  {
    name: "C#",
    icon: C_sharp,
  },
  {
    name: ".NET Framework",
    icon: NET,
  },
  {
    name: "SQL Server",
    icon: SqlServer,
  },
  {
    name: "My SQL",
    icon: MySql,
  },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: ".NET Framework",
    company_name: "Abdul Monem Ltd.",
    icon: amlbd,
    iconBg: "#383E56",
    date: "September 2022 - January 2023",
    points: [
      "Designing, developing and maintaining Windows application using .NET Framework with C# language.",
      "Web reporting system using  ASP.NET, Devexpress and Crystal report creation",
      "Using 'Stored Procedure' to handle transactional process in SqlServer",
      "Participating in code reviews and providing constructive feedback to other developers and users.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Self-Employed",
    icon: self,
    // icon: starbucks,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    date: "",
    points: ["Developing web applications using React.js and other related technologies.", "Implementing responsive design and ensuring cross-browser compatibility."],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const contacts = {
  name: "Md. Monjurul Arif",
  email: "monjurularif@gmail.com",
  phone: "01638200033",
  linkedin_link: "https://www.linkedin.com/in/monjurularif/",
  github_link: "https://github.com/MonjurulArif/",
};

const projects = [
  {
    name: "Ema-John",
    description: "E-commerce website for fashion lover. A nice online shopping system for buying clothes and shoes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "localStorage",
        color: "pink-text-gradient",
      },
    ],
    image: emajohn,
    source_code_link: "https://github.com/MonjurulArif/ema-john-simple",
    live_demo_link: "https://ema-john-react-silver.netlify.app/",
  },
  {
    name: "On-The-Way",
    description: "Online medicine buying and online doctor consultancy system for patients. Also works as a blood bank info hub by providing the information of blood banks of Dhaka.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ontheway,
    source_code_link: "https://github.com/MonjurulArif/On-The-Way",
    live_demo_link: " ",
  },
  {
    name: "T-shirt-mania",
    description: "User interface for Context API and conditional rendering.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: tshirtmania,
    source_code_link: "https://github.com/MonjurulArif/t-shirt-mania",
    live_demo_link: "https://t-shirt-mania-silver.netlify.app/",
  },
  // {
  //   name: "Job IT",
  //   description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects, contacts };
