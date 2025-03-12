import cicd from "../assets/projects/cicd.avif";
import cicd2 from "../assets/projects/cicd2.png";


export const HERO_CONTENT = `I design, develop, and innovate in the world of technology. With a degree in ICT and a drive to solve complex problems, I’m looking for opportunities to apply my skills in software development, Devops principles.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. 
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  
  {
    year: " Jan 2024 - Mar 2024",
    role: "Research Intern",
    company: "University of Padova",
    description: `Interpreting Customer preferences and Strategic Decision-Making in Graph-Based and Action Tree Analysis of Simulated Game Environments`,
    technologies: ["Python-Pandas","Excel"],
  },
  {
    year: " Mar 2024 - Oct 2024",
    role: "Game Developer",
    company: "University of Padova",
    description: `Developed an interactive rhythm game using Kinect and Processing enhances therapy for visually impaired children by making sessions engaging, multi-sensory, and effective through movement-based interactions.`,
    technologies: ["Processing","Java","Kinect"],
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
  }
];

export const CONTACT = {
  address: "Padova, Italy ",
  email: "arunkumarsanku0408@gmail.com",
};
