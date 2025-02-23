import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/sms.png';
import freshBurger from '../../assets/chatapp.png';
import hipsster from '../../assets/port.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://github.com/varshala28/chatapp"
          h3="Real-time Chat Application"
          p="Built a real-time chat app using React JS & Firebase with secure authentication, messaging, user profiles, 
          and file uploads. Integrated state management, search, chat UI, and real-time status updates via Firestore & Storage. 🚀"
          imgStyle={{ width: '500px', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
          />
        <ProjectCard
          src={hipsster}
          link="https://github.com/varshala28/my_portfolio"
          h3="My portfolio"
          p="Built a responsive React Portfolio Website with light & dark mode, an AI-generated hero image, and modern UI/UX. 
          Implemented React components, theme switching, and project showcases for an interactive experience. 🚀"
          imgStyle={{ width: '500px', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
        />
         <ProjectCard
          src={viberr}
          link="https://github.com/varshala28/Sch_Manage_Sys"
          h3="School Mangement System"
          p="Streaming App ilt a responsive React Portfolio Website with light & dark mode, an AI-generated hero image, and modern UI/UX. 
          Implemented React components, theme switching, and project"
          imgStyle={{ width: '500px', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

export default Projects;
