import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  shopify,
  mysql,
  sass,
  expressjs,
  btcrack,
  manouchti,
  zeal,
  ewow,
  legacy,
  cocowork,
  php,
  symfony,
  mariadb,
  restapi,
  oop,
  doctrine,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
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
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "OOP",
    icon: oop,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Doctrine ORM",
    icon: doctrine,
  },
  {
    name: "Rest API",
    icon: restapi,
  },
  {
    name: "MariaDB",
    icon: mariadb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "ExpressJs",
    icon: expressjs,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BTCrack",
    description:"BTCrack (short for Bug Tracker Crack) is a collaborative, forum-style platform designed to help colleagues work together on specific LaPlateform internship projects across various technology stacks.",
    tags:[
      {
        name: "Symfony",
        color: "green-text-gradient"
      },
      {
        name: "MySQL",
        color: "pink-text-gradient"
      },
      {
        name: "DoctrineORM",
        color: "orange-text-gradient"
      },
      {
        name: "CSS",
        color: "blue-text-gradient"
      },
      {
        name: "Twig",
        color: "green-text-gradient"
      },
    ],
    image: btcrack,
    source_code_link: "https://btcrack.webatif.fr/tickets"
  },
  {
    name: "CoCoWork",
    description:
      "Web-based platform for Co-Working reservations/management Developed for a hackathon, with the development based on a provided project brief. It involves teamwork through collaborating with a designer.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        // color: "blue-text-gradient",
      },
      {
        name: "MariaDB",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: cocowork,
    source_code_link: "https://github.com/SZ-Leaf/Cocowork-server",
  },
  {
    name: "Manouchti",
    description:
      "Manouchti is an shopify eCommerce startup company selling mainly in Lebanon and Côte d'Ivoire, providing everything from clothing & health products to accessories & toys.",
    tags: [
      {
        name: "Shopify",
        color: "green-text-gradient",
      },
      {
        name: ".Liquid",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
      },
    ],
    image: manouchti,
    source_code_link: "https://manouchti.com",
  },
  {
    name: "Zeal MENA",
    description:
      "ZEAL MENA is a marketing consultancy and media production company. A young boutique agency based in the heart of Beirut. Website to be remade with react.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
      },
      {
        name: "Mailer",
        color: "green-text-gradient",
      },
    ],
    image: zeal,
    source_code_link: "https://zealmena.com",
  },
  //  {
  //   name: "LegacyTrustFinancial",
  //   description: "Financial sercives company website.",
  //   tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Scss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "NodeJS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "ExpressJS",
  //     },
  //   ],
  //   image: legacy,
  //   source_code_link: '#',
  //  },
  {
    name: "eWow Community",
    description:
      "eWoW is a private forum developed for a private Word of Warcraft Server.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "MariaDB",
        color: "green-text-gradient",
      },
    ],
    image: ewow,
    source_code_link: "https://github.com/SZ-Leaf/Forumify-Server",
  },
];

export { services, technologies, testimonials, projects };
