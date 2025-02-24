import styles from './FooterStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

function Footer() {
  const { theme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <footer className={`${styles.container} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
      <div className={styles.content}>
        
        <nav className={styles.nav}>
          <a href="#hero">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <p className={styles.tagline}>Creating with passion & purpose.</p>

        <div className={styles.socialIcons}>
          <a href="https://github.com/varshala28" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/varshathaya28/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </div>

        <p className={styles.copyright}>
          &copy; 2025 Varsha Thayananthan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
