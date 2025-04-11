import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Environmental Engineer with expertise in geospatial analysis, machine learning, and sustainable systems. With field experience across Swiss glaciers and rivers, I combine technical engineering skills with environmental science to develop data-driven solutions for ecological challenges. My work in sediment analysis, climate impact studies, and environmental monitoring bridges the gap between research and practical conservation strategies.`;

export const ABOUT_TEXT = `I am a multidisciplinary Environmental Engineer with a Master's from the University of Lausanne and field experience across Switzerland. My work focuses on:
- Glacial erosion analysis using QGIS/ArcGIS
- Machine learning for environmental monitoring (97% accuracy oil spill detection)
- Sustainable system design (30% water reduction in smart irrigation)
- River sediment management ($2M potential annual savings identified)

Fluent in 4 languages, I thrive in international research teams and have contributed to policies affecting over 100 communities. My technical toolkit includes Python, MATLAB, LiDAR processing, and computational fluid dynamics, applied to solve real-world environmental challenges.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Research Assistant",
    company: "University of Lausanne",
    description: `Analyzed 12 years of glacial elevation data from 6 glaciers, identifying critical erosion points that informed regional management policies. Implemented innovative QGIS/ArcGIS techniques to preprocess digital elevation models, creating reliable datasets that improved climate modeling accuracy.`,
    technologies: ["QGIS", "ArcGIS", "LiDAR", "Python", "Climate Modeling"],
  },
  {
    year: "2023",
    role: "Aquatic Ecology Technician",
    company: "Aquarius Umwelttechnik AG",
    description: `Led data collection on 800+ fish populations in Neuchâtel rivers, developing ecosystem restoration strategies impacting 100+ communities. Executed comprehensive size/weight/health measurements that informed local conservation policies.`,
    technologies: ["Field Research", "Data Analysis", "Conservation Planning"],
  },
  {
    year: "2023",
    role: "Geophysical Technician",
    company: "Geo2x & geool",
    description: `Spearheaded DGPS technology adoption for geophone placement, recording 5,000+ data points for geothermal reservoir identification. Managed logistics for geophone deployment in challenging alpine conditions.`,
    technologies: ["DGPS", "Geophysics", "Data Acquisition"],
  },
  {
    year: "2015 - 2020",
    role: "Mechanical Engineering Roles",
    company: "Various (Lebanon)",
    description: `Designed cost-effective tribometer (1/40th commercial cost), automated smart home systems (30% water reduction), and improved industrial machine efficiency by 25% through troubleshooting and optimization.`,
    technologies: ["SolidWorks", "LabVIEW", "Systems Design"],
  },
];

export const PROJECTS = [
  {
    title: "Glacial Sediment Analysis",
    image: project1,
    description: "Developed sediment management strategies for Swiss rivers, identifying $2M annual savings potential through bypass structure optimization.",
    technologies: ["QGIS", "Field Studies", "Hydrology"],
  },
  {
    title: "Oil Spill Detection AI",
    image: project2,
    description: "Created machine learning model with 97% accuracy for satellite-based oil spill identification, improving environmental monitoring response times.",
    technologies: ["Python", "ML", "Remote Sensing"],
  },
  {
    title: "Smart Irrigation System",
    image: project3,
    description: "Engineered automated system reducing water usage by 30% while improving plant health through LabVIEW-controlled optimized scheduling.",
    technologies: ["LabVIEW", "IoT", "Sustainability"],
  },
  {
    title: "Tribometer Design",
    image: project4,
    description: "Manufactured innovative testing device for RZeppa joints at 1/40th commercial cost while maintaining precision measurements.",
    technologies: ["SolidWorks", "Mechanical Design", "Prototyping"],
  },
];

export const CONTACT = {
  address: "Lausanne, Switzerland",
  phoneNo: "+41 76 438 76 12",
  email: "eliasalalam@outlook.com",
  social: {
    linkedin: "https://www.linkedin.com/in/elias-al-alam/",
    glacierTeam: "https://wp.unil.ch/glace/team/"
  }
};
