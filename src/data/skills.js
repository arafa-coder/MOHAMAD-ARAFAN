import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaMobileAlt,
  FaNodeJs,
  FaPlug,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaNpm,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel } from "react-icons/si";

/**
 * level: 1 to 5 — an honest self-assessment shown as a five-segment meter.
 * Adjust these to match where you really are; recruiters notice inflated levels.
 */
export const LEVEL_LABELS = ["Learning", "Basic", "Intermediate", "Proficient", "Advanced"];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 4 },
      { name: "CSS3", icon: FaCss3Alt, level: 4 },
      { name: "JavaScript", icon: FaJs, level: 3 },
      { name: "React.js", icon: FaReact, level: 3 },
      { name: "Bootstrap", icon: FaBootstrap, level: 3 },
      { name: "Responsive Design", icon: FaMobileAlt, level: 4 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 3 },
      { name: "Express.js", icon: SiExpress, level: 3 },
      { name: "REST API", icon: FaPlug, level: 3 },
      { name: "Authentication", icon: FaLock, level: 2 },
      { name: "CRUD Operations", icon: FaSyncAlt, level: 3 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 3 },
      { name: "MySQL", icon: SiMysql, level: 3 },
      { name: "SQL", icon: FaDatabase, level: 3 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 3 },
      { name: "GitHub", icon: FaGithub, level: 3 },
      { name: "VS Code", icon: FaCode, level: 4 },
      { name: "Postman", icon: SiPostman, level: 3 },
      { name: "npm", icon: FaNpm, level: 3 },
      { name: "Vercel", icon: SiVercel, level: 2 },
    ],
  },
];
