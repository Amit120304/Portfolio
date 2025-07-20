// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import recoilLogo from './assets/tech_logo/recoil.png';
import JEE_MAINS from './assets/education_logo/JEE_MAINS_NTA.png'
import JEE_ADVANCED from './assets/education_logo/Jee_advance.png'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import college from './assets/education_logo/college.png';
import school from './assets/education_logo/cbse.jpeg';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import agentic_ragLogo from './assets/work_logo/Pdf_chat_bot.png';
import ChattyLogo from './assets/work_logo/Chatty.png';
import ChessLogo from './assets/work_logo/Chess.png';
import RagPdfLogo from './assets/work_logo/pdf_rag_chat.png';
import MediaCraftLogo from './assets/work_logo/MediaCraft_AI.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Recoil', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Recoil', logo: recoilLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: college,
      school: "Delhi Technological University, New Delhi",
      date: "Sept 2022 - July 2026",
      grade: "8.48 CGPA till 5th semester",
      desc: "",
      degree: "B.Tech. in Computer Engineering",
    },
    {
      id: 1,
      img: JEE_ADVANCED,
      school: " ",
      date: "2022",
      grade: "8230 RANK ",
      desc: "",
      degree: "JEE(Joint Entrance Examination)-Advanced",
    },    {
      id: 2,
      img: JEE_MAINS,
      school: " ",
      date: "2022",
      grade: "99.60 percentile / 3738 RANK ",
      desc: "",
      degree: "JEE(Joint Entrance Examination)-MAINS",
    },
    {
      id: 3,
      img: school,
      school: "IP Convent Senior Secondary School, New Delhi",
      date: "2018 - 2022",
      grade: "92.17% in 10th & 94.6% in 12th",
      desc: "",
      degree: "Senior Secondary and Secondary Education from CBSE Board",
    }
  ];

  export const projects = [
    {
      id: 0,
      title: "IntelliDoc",
      description:
        "Agentic AI system using LangGraph that intelligently retrieves document context, maintains conversation\n" +
          "history, and provides contextually relevant responses across multi-turn conversations",
      image: agentic_ragLogo,
      tags: ["React.js", "Node.js", "LangChain", "PostgreSQL", "Google Gemini"],
      github: "https://github.com/Amit120304/IntelliDoc",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Chatty",
      description:
     "Chat application using Next.js 14 and TypeScript, with Upstash Redis Pub/Sub for message storage and Pusher Channels to deliver new messages to users in real time without page reload",
      image: ChattyLogo,
      tags: ["Next.js", "TypeScript", "Redis", "Pusher", "Kinde Auth"],
      github: "https://github.com/Amit120304/Chatty",
      // webapp: "",
    },
    {
      id: 2,
      title: "Real Time Chess",
      description:
        "Real-time chess game backend using Node.js and WebSockets for live communication between players. Implemented bidirectional WebSockets messaging layer via Socket.io , eliminating per‐move HTTP handshake.\n" +
          "overhead and boosting game responsiveness.",
      image: ChessLogo,
      tags: ["Node.js", "WebSocket", "Express", "EJS", "JavaScript"],
      github: "https://github.com/Amit120304/Chess_backend_project/",
      webapp: "https://chess-backend-project.onrender.com/",
    },
    {
      id: 3,
      title: "MediaCraft AI",
      description:
        "Converts uploaded images into tailored social media  and generates contextual video previews and compressed download-ready formats",
      image: MediaCraftLogo,
      tags: ["Next.js", "Daisy UI", "Clerk", "zod", "Cloudinary AI"],
      github: "https://github.com/Amit120304/MEDIACRAFT_AI",
      webapp: "https://saa-s-7azl.vercel.app/signup",
    },
    {
      id: 4,
      title: "Rag Pdf Chat Bot",
      description:
        "",
      image: RagPdfLogo,
      tags: [],
      github: "https://github.com/Amit120304/Pdf_chat_bot",
      // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
  ];  