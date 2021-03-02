import styles from '../styles/Project.module.scss'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

const Project = ({ tools, title, codeLink, liveLink, description, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <ul className={styles.tools}>
          {tools.map(tool => (
            <li>{tool}</li>
          ))}
        </ul>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.projectImageMobile}>
          <img className={styles.image} src={image} alt='bookmark image' />
        </div>
        <ul className={styles.projectLinks}>
          <a href={codeLink} className={styles.linkTag}>
            <li className={styles.link}>
              <p>View Code</p> <AiFillGithub className={styles.icon} />
            </li>
          </a>
          {liveLink && (
            <a href={liveLink} className={styles.linkTag}>
              <li className={styles.link}>
                <p>View Live</p> <FiExternalLink className={styles.icon} />
              </li>
            </a>
          )}
        </ul>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.projectImage}>
        <img className={styles.image} src={image} alt='bookmark image' />
      </div>
    </div>
  )
}

export default Project
