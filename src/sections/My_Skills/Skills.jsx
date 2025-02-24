import { motion } from "framer-motion";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import styles from "./SkillsStyles.module.css";

const skills = [
  { name: "HTML", link: "https://example.com/html-certificate" },
  { name: "CSS", link: "https://example.com/css-certificate" },
  { name: "JavaScript", link: "https://example.com/javascript-certificate" },
  { name: "React", link: "https://example.com/react-certificate" },
  { name: "Java", link: "https://example.com/nextjs-certificate" },
  { name: "Redux", link: "https://example.com/redux-certificate" },
  { name: "Node.js", link: "https://example.com/nodejs-certificate" },
  { name: "Tailwind CSS", link: "https://example.com/tailwind-css-certificate" },
  { name: "Python", link: "https://example.com/typescript-certificate" },
  { name: "Github", link: "https://example.com/git-certificate" },
  { name: "Firebase", link: "https://example.com/firebase-certificate" },
  { name: "MongoDB", link: "https://example.com/mongodb-certificate" },
];

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.skillItem}
          >
            <img src={checkMarkIcon} alt="✔" className={styles.checkIcon} />
            <span className={styles.skillText}>{skill.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
