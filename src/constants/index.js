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
    ajolopiicsa,
    tacoAca,
    preregistro,
    suiteAndroid,
    suiteIOS,
    email,
    linkedin,
    phone,
    ANEPSA,
    ADDCONTROL
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
      title: "Frontend Developer",
      company_name: "ADDCONTROL",
      icon: ADDCONTROL,
      iconBg: "#E6DEDD",
      date: "June 2023 - Current",
      points: [
        "Mobile application development with Flutter.",
        "Deployment in App Store and Playstore.",
        "Compilation and execution with Xcode and Android Studio.",
        "UX/UI design",
        "Frontend development with Angular.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "ANEPSA",
      icon: ANEPSA,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Development of web apps with Node.js and React.js",
        "Templates design with Figma",
      ],
    },
    {
      title: "Automation and Cybersecurity Consultant",
      company_name: "Ixpan Seguridad",
      icon: Ixpan,
      iconBg: "#383E56",
      date: "December 2022 - June 2023",
      points: [
        "Design of flow diagrams for the creation of robots.",
        "Development of robots and automated processes in tools such as UFT, UiPath, RPA, Rocketbot.",
        "Vulnerability detection in computer systems with Fortify SCA and WebInspect, identifying vulnerabilities following standards such as OWASP, PCI, etc.",
        "Design and creation of databases in MYSQL and SQL Server.",
        "Support in the creation of test matrix, use cases and documentation.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Subsecretaría de obras y servicios urbanos de la Ciudad de México",
      icon: CDMX,
      iconBg: "#E6DEDD",
      date: "April 2022 - December 2022",
      points: [
        "Database design and development in PostgreSQL and MySQL.",
        "Layout and development of web systems with javascript, using the React.js library and styles and design with CSS and Material UI.",
        "Querying API's using Postman.",
        "Backend development with javascript, using Node.js.",
        "Deployment of database, backend app and frontend app in CPanel hosting."
      ],
    },
  ];
  
  const datas = [
    {
      data:
        "+52 7441276492",
      name: "Phone",
      image: phone,
    },
    {
      data:
        "Jorge Hernández",
      name: "Linkedin",
      image: linkedin,
      link: ""
    },
    {
      data:
        "jorgerhr99@gmail.com",
      name: "Email",
      image: email,
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
        "Web application used to keep track of users and computers assigned to them, to report on the status of the computers and to provide technical assistance if necessary. Username: Koke | Password: 123456",
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
        {
          name: "MySQL",
          color: "red-text-gradient"
        }
      ],
      image: soportetec,
      source_code_link: "https://github.com/kokeGG/soportetec/tree/main",
      link: "https://soporte-tecnico-9fb85.web.app/"
    },
    {
      name: "Ajolopiicsa",
      description:
        "Mobile application that shows all the locations in the city that are responsible for receiving donations for the indigenous peoples of Mexico and for the preservation of axolotl.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
        {
          name: "UX/UI",
          color: "blue-text-gradient",
        },
      ],
      image: ajolopiicsa,
      link: "https://www.figma.com/community/file/1244863419240200808"
    },
    {
      name: "pre-registration social service",
      description:
        "Web application that helps schools students to register to perform their social service in the goverment agency, and to keep order and control in the delivery of paperwork.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "white-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient"
        },
        {
          name: "Postgresql",
          color: "pink-text-gradient"
        }
      ],
      image: preregistro,
      // source_code_link: "https://github.com/kokeGG/sistema_ventas_JAVA",
      link: "https://preregistro.netlify.app/"
    },
    {
      name: "tacoAca",
      description:
        "Mobile food delivery application focused on tacos, the user can choose from different varieties and receive his order in a matter of minutes.",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient"
        },
        {
          name: "UX/UI",
          color: "blue-text-gradient",
        },
      ],
      image: tacoAca,
      // source_code_link: "https://github.com/kokeGG/sistema_ventas_JAVA",
      link: "https://www.figma.com/community/file/1248663287441684682"
    },
    {
      name: "AddControl Android Apps",
      description:
        "Suite of addcontrol tools available for android.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
      ],
      image: suiteAndroid,
      // source_code_link: "https://github.com/kokeGG/sistema_ventas_JAVA",
      link: "https://play.google.com/store/apps/developer?id=Addcontrol&hl=es_MX"
    },
    {
      name: "AddControl IOS Apps",
      description:
        "Suite of addcontrol tools available for IOS.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
      ],
      image: suiteIOS,
      // source_code_link: "https://github.com/kokeGG/sistema_ventas_JAVA",
      link: "https://apps.apple.com/ca/developer/jorge-roberto-hernandez-rios/id1714733644"
    },
  ];
  
  export { services, technologies, experiences, datas, projects };