import styles from '../styles/Navbar.module.scss'

import { FiExternalLink } from 'react-icons/fi'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <p>Dale Bandoni</p>
      </div>
      <div>
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

          <a href='https://www.linkedin.com/in/dale-bandoni/'>
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

export default Navbar
