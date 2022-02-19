import Head from 'next/head'
import Intro from '../sections/Intro'
import Projects from '../sections/Projects'
import JobProspect from '../sections/JobProspect'
import About from '../sections/About'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dale Bandoni</title>
        <link rel='icon' href='/assets/images/logoIcon.png' />
      </Head>
      <Intro />
    </div>
  )
}
