import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";

import skillsImg1 from "./assets/html-logo.svg";
import skillsImg2 from "./assets/css-logo.svg";
import skillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/tailwind-css-logo.svg";

import skillsImg6 from "./assets/figma-logo.svg";
import skillsImg7 from "./assets/sketch-logo.svg";
import skillsImg8 from "./assets/adobe-xd-logo.svg";
import skillsImg9 from "./assets/adobe-photoshop-logo.svg";
import skillsImg10 from "./assets/invision-logo.svg";

import projectImg1 from "./assets/project-1.jpg";
import projectImg2 from "./assets/project-2.jpg";
import projectImg3 from "./assets/project-3.jpg";
import projectImg4 from "./assets/project-4.jpg";
import projectImg5 from "./assets/project-5.jpg";

import Theme1 from "./assets/red.png";
import Theme2 from "./assets/blueviolet.png";
import Theme3 from "./assets/blue.png";
import Theme4 from "./assets/magenta.png";
import Theme5 from "./assets/yellowgreen.png";
import Theme6 from "./assets/orange.png";
import Theme7 from "./assets/yellow.png";

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },
  {
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },
  {
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },
  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

// personal info
export const personalInfo = [
  {
    title: "First Name : ",
    description: "Nitkarsh Kumar",
  },

  {
    title: "Last Name : ",
    description: "Upadhyay",
  },

  {
    title: "Age : ",
    description: "21 Years",
  },

  {
    title: "Nationality : ",
    description: "Indian",
  },

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Amritsar",
  },

  {
    title: "Phone : ",
    description: "+91 7564051627",
  },

  {
    title: "Email : ",
    description: "nitkarshupadhyay08@mail.com",
  },

  {
    title: "Skype : ",
    description: "nitkarsh.kumar",
  },

  {
    title: "Langages : ",
    description: "Hindi, English",
  },
];

//  experience stats

export const stats = [
  {
    no: "only Traning",
    title: "Fressers ",
  },

  {
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    no: "1+",
    title: "Happy <br /> Customers",
  },

  {
    no: "4+",
    title: " Awards <br /> Won",
  },
];

// skills
export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: "HTML",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 2,
    img: skillsImg2,
    title: "CSS",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 3,
    img: skillsImg3,
    title: "JavaScript",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "Basic",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "PHP",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "SQL",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 7,
    img: skillsImg7,
    title: "Express.js",
    level: "Basic",
    category: "designer",
  },

  {
    id: 8,
    img: skillsImg8,
    title: "Adobe XD",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 9,
    img: skillsImg9,
    title: "Photoshop",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 10,
    img: skillsImg10,
    title: "InvisionApp",
    level: "Basic",
    category: "designer",
  },
];

// EDUCATION & EXPERIENCE

export const resume = [
  // {
  //   id: 1,
  //   category: "experience",
  //   icon: <RiBriefcase4Fill />,
  //   year: "2018 - Present",
  //   title: "Web Developer <span> Envato </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
  // },

  {
    id: 3,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2013 - 2018",
    title: "Bachelor Degree",
    desc: "Amritsar Group Of Colleges, Amritsar,Punjab",
  },

  // {
  //   id: 2,
  //   category: "education",
  //   icon: <RiGraduationCapFill />,
  //   year: "2022 - Present",
  //   title: "UI/UX Designer <span> Themeforest </span>",
  //   desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.",
  // },

  // {
  //   id: 4,
  //   category: "education",
  //   icon: <RiGraduationCapFill />,
  //   year: "2015",
  //   title: "Engineering Degree <span> Oxford University </span>",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.",
  // },

  {
    id: 5,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2020 - 2022",
    title: " MATRIC(Xth)",
    desc: "P T J L N Secondary School ,Sirni Kothi, sirni , Bihar",
  },

  {
    id: 6,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2019-2020",
    title: " INTERMEDIATE(XIIth) ",
    desc: "M S S G College, Areraj, Bihar ",
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: "Coffee Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "",
  },

  {
    id: 2,
    img: projectImg2,
    title: "Food Product Design",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg6, skillsImg7],
    link: "",
  },

  {
    id: 3,
    img: projectImg3,
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "",
  },

  {
    id: 4,
    img: projectImg4,
    title: "Barbershop Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "",
  },

  {
    id: 5,
    img: projectImg5,
    title: "Construction Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "",
  },
];

export const themes = [
  {
    img: Theme1,
    hue: "4",
  },

  {
    img: Theme2,
    hue: "271",
  },

  {
    img: Theme3,
    hue: "225",
  },

  {
    img: Theme4,
    hue: "339",
  },

  {
    img: Theme5,
    hue: "80",
  },

  {
    img: Theme6,
    hue: "19",
  },

  {
    img: Theme7,
    hue: "42",
  },
];
