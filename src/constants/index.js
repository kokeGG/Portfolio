import {
    backend,
    mysql,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    CDMX,
    carrent,
    jobit,
    tripguide,
    threejs,
    Ixpan,
    frontend,
    designer,
    database,
    telcel,
    soportetec,
    ajolopiicsa
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
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database",
      icon: database,
    },
    {
      title: "UX/UI Designer",
      icon: designer,
    }
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MYSQL",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Automation and Cybersecurity Consultant",
      company_name: "Ixpan Seguridad",
      icon: Ixpan,
      iconBg: "#383E56",
      date: "Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Undersecretary of Urban Works and Services of Mexico City",
      icon: CDMX,
      iconBg: "#E6DEDD",
      date: "April 2022 - December 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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
      name: "Telcel Portability Simulator",
      description:
        "Web application based on Telcel's system that consists of switching a user from another phone company to Telcel.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
      ],
      image: telcel,
      source_code_link: "https://github.com/kokeGG/simuladorPortabilidadTelcel",
      link: "https://telcel-simulador.web.app/"
    },
    {
      name: "Technical Support",
      description:
        "Web application used to keep track of users and computers assigned to them, to report on the status of the computers and to provide technical assistance if necessary. Username: Alex | Password: 123456",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: soportetec,
      source_code_link: "https://github.com/kokeGG/soportetec/tree/main",
      link: "https://soporte-tecnico-9fb85.web.app/"
    },
    {
      name: "Ajolopiicsa",
      description:
        "Mobile application that shows all the locations in the city that are responsible for receiving donations for the indigenous peoples of Mexico and for the preservation of salamanders.",
      tags: [
        {
          name: "Figma",
          color: "green-text-gradient",
        },
      ],
      image: ajolopiicsa,
      link: "https://www.figma.com/community/file/1244863419240200808"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };