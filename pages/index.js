import Head from 'next/head'
import Project from '../components/Project'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'

const bookmark = require('../public/assets/images/bookmark.png')
const portfolio = require('../public/assets/images/portfolio.png')
const movielibrary = require('../public/assets/images/movielibrary.png')

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dale Bandoni</title>
        <link rel='icon' href='public/assets/images/favicon.png' />
      </Head>
      <Header />
      <Project
        title='BookMark App'
        tools={['React/', 'Node.js/', 'Express/', 'MongoDB']}
        description='A full-stack MERN application.  Users can keep track of books they have read by adding, deleting, editing and filtering.'
        image={bookmark}
        codeLink='https://github.com/dalebandoni/bookmark'
        liveLink='https://limitless-crag-13210.herokuapp.com/'
      />
      <Project
        title='Portfolio Site'
        tools={['Next.Js/', 'SASS']}
        description='This exact site built with Next.Js and styled with SASS.'
        image={portfolio}
        codeLink='https://github.com/dalebandoni/portfolio-site'
      />
      <Project
        title='Movie Library'
        tools={['HTML/', 'CSS/', 'JavaScript/', 'Webpack']}
        description='HTML, CSS & JavaScript application. Configured with Webpack and Babel. Fetches OMDb API.'
        image={movielibrary}
        codeLink='https://github.com/dalebandoni/movie-library'
        liveLink='https://dalebandoni.github.io/movie-library/'
      />
      <About />
      <Footer />
    </div>
  )
}
