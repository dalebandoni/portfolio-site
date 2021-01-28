import styles from '../styles/About.module.scss'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiSass, DiReact } from 'react-icons/di'
import { SiJavascript, SiWebpack } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>About me - </p>
      <p className={styles.paragraph}>
        In 2020, after getting an Honours Degree in Digital Art & Design I
        decided to start learning how to code. Fast-track ‘til now and I design
        and build full-stack applications and websites using the following
        technologies:
      </p>
      <div className={styles.techIcons}>
        <AiFillHtml5 className={styles.techIcon} />
        <DiCss3 className={styles.techIcon} />
        <SiJavascript className={styles.techIcon} />
        <DiSass className={styles.techIcon} />
        <GrNode className={styles.techIcon} />
        <SiWebpack className={styles.techIcon} />
        <DiReact className={styles.techIcon} />
      </div>
    </div>
  )
}

export default About
