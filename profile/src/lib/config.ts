const AstroRegional = new URL(
  "../assets/projects/AstroRegional.jpeg",
  import.meta.url,
).href;

export const socialMediaLinks = {
  github: "https://github.com/Kaique-Sique",
  linkedin: "https://www.linkedin.com/in/kaique-siqueira-99b0b7391/",
  instagram: "https://www.instagram.com/_kaique_dps/",
  email: "kaiquedpsiqueira@gmail.com",
  whatsapp: "+55 11996123440",
};

export const technologies = [
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css", color: "1572B6" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Node.js", icon: "nodedotjs", color: "339933" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "Java", icon: "coffeescript", color: "8B949E" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "GitHub", icon: "github", color: "8B949E" },
  { name: "Arduino", icon: "arduino", color: "00979D" },
  { name: "Postgresql", icon: "postgresql", color: "336791" },
  { name: "Springboot", icon: "springboot", color: "6DB33F" },
];

export const highlights = [
  {
    id: "astro-rebuilt",
    title: "ASTRO Rebuilt - FRC 7563",
    image: AstroRegional,
    description:
      "ASTRO Rebuilt is a competitive robot developed by FRC Team MegaZord 7563 for the FIRST Robotics Competition (FRC). Designed to deliver high performance through advanced software, autonomous routines, and integrated sensors and actuators, the robot achieved outstanding results at Brazilian regional competitions. Its accomplishments include winning the Regional Winner title at two Brazilian regionals and earning Autonomous Awards in recognition of its autonomous performance.",
    projectsLink: "/projects",
    projectLink: "/projects/astro-rebuilt",
  },
  // { id: "...", title: "...", image: ..., description: "...", projectsLink: "/projects", projectLink: "/projects/..." },
];