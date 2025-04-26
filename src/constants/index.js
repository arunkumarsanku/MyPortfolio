import cicd from "../assets/projects/cicd.avif";
import cicd2 from "../assets/projects/cicd2.png";
import fm from "../assets/projects/fm.png";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `I design, develop, and innovate in the world of technology. With a degree in ICT and a drive to solve complex problems, I’m looking for opportunities to apply my skills in software development, Devops principles.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const ExperienceS = [
  
  {
  year: " Jan 2024 - Mar 2024",
  role: "Research Intern",
  company: "University of Padova",
  description: "Interpreting Customer preferences and Strategic Decision-Making in Graph-Based and Action Tree Analysis of Simulated Game Environments",    technologies: ["Python-Pandas","Excel"],
  },
  {
  year: " Mar 2024 - Oct 2024",
  role: "Game Developer ",
  company: "University of Padova",
  description: `For my thesis Developed an interactive rhythm game using Kinect and Processing enhances therapy for visually impaired children by making sessions engaging, multi-sensory, and effective through movement-based interactions.`,
  technologies: ["Processing","Java","Kinect"],
  },
  {
    year: "Sep 2020 - Feb 2021",
    role: "Internship Trainee",
    company: "Techasoft Pvt Ltd",
    description: "Assisted in developing UI components using Angular to create a dynamic FAQ page with Markdown files. Implemented Angular services to retrieve backend data for UI rendering and contributed to debugging and defect resolution.",
    technologies: ["AngularJS", "Markdown"]
  }
  ];

export const PROJECTS = [
  {
  title: "Continues Integration -Continues Delivary",
  image: cicd,
  description:
    "Optimized containerized deployment by implementing multi-stage Docker builds, automating CI/CD with GitHub Actions and Argo CD, managing high-availability Kubernetes clusters, and configuring Ingress controllers for seamless domain routing.",
  technologies: ["Docker", "Github Actions", "Kubernetes", "Argo CD" ],
  },
  {
  title: "CI-CD Pipeline",
  image: cicd2,
  description:
    "Implemented end-to-end DevOps for a MERN stack application by provisioning infrastructure with Terraform, automating CI/CD with Jenkins and Argo CD, configuring Ingress and Route 53 for domain routing, and enhancing observability with Prometheus and Grafana.",
  technologies: ["Terraform", "Kubernetes", "Jenkins", "Argo CD", "Prometheus", "Grafana"],
  },
  {
  title: "Full-Stack AI Finance Platform",
  image: fm,
  description:"Built a full-stack AI-driven finance platform with Next.js, Supabase, and Tailwind CSS, leveraging AI insights via Inngest and ArcJet, real-time data management with Supabase, and optimized database operations using Prisma ORM for seamless performance.",
  technologies: ["Next.js", "Supabase", "Tailwind CSS", "Inngest", "ArcJet", "Prisma ORM"]
  },
  {
  title: "Full-Stack Blog Application",
  image: project2,
  description:"Built a full-stack blog application with a React frontend and Node.js backend, integrating Prisma ORM for database management, JWT authentication for secure access, and RESTful APIs with role-based access control for content management.",
  technologies: ["React", "Node.js", "Prisma ORM", "JWT", "RESTful APIs"]
  
  }
];

export const CONTACT = {
  address: "Padova, Italy ",
  email: "arunkumarsanku0408@gmail.com",
};


export const HOBBIES = [
  'Cooking',
  'Photography',
  'Traveling',
  'Reading',
  'Playing Cricket'
];

export const ITALY_EXPERIENCE = [
  {
    title: 'Living in Italy',
    description: 'Currently residing in Italy, immersing myself in the culture and language. I am actively learning Italian to enhance my communication skills and fully experience the rich heritage of this beautiful country. I am also exploring the local cuisine, art, and history, which has deepened my appreciation for Italian culture. I am excited to continue my journey here and embrace the opportunities that come with living in such a vibrant and diverse environment.'
  }
];