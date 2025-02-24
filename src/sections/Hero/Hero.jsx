import heroImg from '../../assets/hero-img.png'
import styles from './HeroStyles.module.css'
import themeIcon from '../../assets/sun.svg'
import githubIcon from '../../assets/github-light.svg'
import LinkedinIcon from '../../assets/linkedin-light.svg'
import Cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'

function Hero () {
  const {theme,toggleTheme} = useTheme();

  const themeIcon = theme ==='light' ? sun : moon;
  const githubIcon = theme ==='light' ? githubLight : githubDark;
  const LinkedinIcon = theme ==='light' ? LinkedinLight : LinkedinDark;
  
  return ( 
    <section id="hero" className={styles.container}> 
     <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Miss Varsha"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Varsha 
          <br />
          Thayananthan 
        </h1>
        <h2> Software Engineer Intern </h2>
        <span>
          <a href="https://github.com/varshala28" target="_blank">
          <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/varshathaya28/" target="_blank">
          <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate about developing modern React web applications, focusing on building scalable and user-friendly solutions.
        </p>
        <a href={Cv} download>
          <button className="hover" > Resume</button>
        </a>
      </div>
      </section>
    )
  }

export default Hero