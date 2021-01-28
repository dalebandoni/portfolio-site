import styles from '../styles/Header.module.scss'
import { BsArrowRightShort } from 'react-icons/bs'

const Header = () => {
  return (
    <div className={styles.headerText}>
      <p>
        Hey. I’m Dale Bandoni, a Glasgow based developer currently working on
        building full-stack JavaScript applications and designing beautiful
        websites.
      </p>
      <a href='mailto:dale@dalebandoni.com'>
        <button className={styles.contactButton}>
          Contact me
          <BsArrowRightShort className={styles.icon} />
        </button>
      </a>
    </div>
  )
}

export default Header
  