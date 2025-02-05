import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
  C,
  Cplus,
  django,
  java,
  python,
  CUB,
  logicalLoop,
  bhujal,
  devdeewan,
  portfolio,
  sih,
  accenture,
  sft,
  iith,
  xav,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id:"https://drive.google.com/file/d/1hNvY8soGVSXA05OGZHHXl0NxKummTWfJ/view?usp=sharing",
    title:"Resume",
  }
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Django Stack Developer",
    icon: django,
  },
  {
    title: "MERN Stack Developer",
    icon: reactjs,
  },
  {
    title: "Java Developer",
    icon: java,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: Cplus,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: " Full Stack Development Intern",
    company_name: "University Website Maintenance Team( Central University of Bilaspur )",
    icon: CUB,
    iconBg: "white",
    date: "April 2023 - September 2023",
    points: [
      "Utilized Django and Bootstrap to develop a visually engaging university guest house webpage, incorporating essential features and ensuring responsive design, resulting in a 50% increase in user engagement.",
      "Collaborated with a cross-functional team to optimize website performance, achieving a 50% improvement in loading times.",
      "Independently designed and deployed a user-friendly HRDC webpage, enhancing accessibility and user experience.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: " LogicalLoops.Inc",
    icon: logicalLoop,
    iconBg: "#E6DEDD",
    date: " October 2022 - March 2023",
    points: [
      "Collaborated with the CTO to develop the 'FlitchCoin' cryptocurrency webpage, implementing front-end technologies to create a responsive layout with animations and hover effects, boosting user engagement by 20%.",
      "Enhanced the user interface interactivity and visual appeal, contributing to a 20% improvement in overall designeffectiveness.",
      "Played a pivotal role in developing a website for the firm's inaugural product, 'C-pay' and ensured its timely completion and successful launch.",
    ],
  },
];

const achievements = [
  {
    achievement:
      "Finalist in Samsung Solve for Tomorrow 2024, selected from over 8,000 teams across India.",
    organization: "Samsung",
    competition: "Samsung Solve For Tomorrow 2024",
    image: sft,
  },
  {
    achievement:
      "1st Runner-Up in Accenture Innovation Challenge 2024, competing among 7,500+ teams.",
      organization: "Accenture",
    competition: "Accenture Innovation Challenge 2024",
    image: accenture,
  },
  {
    achievement:
      "Winner of Smart India Hackathon 2023, for problem statement ID 1305.",
      organization: "Government Of India",
    competition: "Smart India Hackathon 2023",
    image: sih,
  },
  {
    achievement:
      "Top 6 Finalist in Vishwakarma Awards organized by IIT Hyderabad, chosen from 6,000+ teams.",
      organization: "IIT Hyderabad",
    competition: "Vishwakarma Awards 2024",
    image: iith,
  },
  {
    achievement:
      "1st Runner-Up in Xavspark B-School Hackathon organized by St. Xavier's University, Kolkata",
      organization: "St.Xavier's University, Kolkata",
    competition: "XavSpark, B-School Hackathon",
    image: xav,
  },
];

const projects = [
  {
    name: "Bhujal",
    description:
      "Developed the frontend for a groundwater prediction platform, enhancing UI/UX with Tailwind CSS and Chart.js, boosting user interaction by 40%.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
      },
    ],
    image: bhujal,
    source_code_link: "https://github.com/anurag8423/Bhujal-SFT",
    deployment_link:"http://bhujal.tech/",
  },
  {
    name: "DevDeewan",
    description:
      "Built a shop management system with CRUD, product categorization, and advanced search, cutting inventory time by 30% and improving data retrieval by 40%.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: devdeewan,
    source_code_link: "https://github.com/anurag8423/Shop-Management-Freelance-Project",
    deployment_link:"https://shopmanagement-xxnp.onrender.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "Designed and developed a portfolio website with interactive UI, complex animations, and refined aesthetics to showcase professional experiences and expertise.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
    deployment_link:"https://three-js-portfolio-website-one.vercel.app/",
  },
];

export { services, technologies, experiences, achievements, projects };