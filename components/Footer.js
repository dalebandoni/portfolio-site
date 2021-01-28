import styles from '../styles/Footer.module.scss'
import { FiExternalLink } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.copyright}>©2021 – Glasgow, Scotland </p>
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
          <a href='https://github.com/dalebandoni'>
            <li className={styles.link}>
              <p className={styles.linkName}>GitHub</p>
              <FiExternalLink className={styles.icon} />
            </li>
          </a>
          <a href='https://twitter.com/dalebandoni'>
            <li className={styles.link}>
              <p className={styles.linkName}> Twitter </p>
              <FiExternalLink className={styles.icon} />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/dale-bandoni'>
            <li className={styles.link}>
              <p className={styles.linkName}>LinkedIn</p>{' '}
              <FiExternalLink className={styles.icon} />
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Footer
