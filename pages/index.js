import Head from 'next/head'
import Project from '../components/Project'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'

const bookmark = require('../public/assets/images/bookmark.png')
const github = require('../public/assets/images/githubjobs.png')
const movielibrary = require('../public/assets/images/movielibrary.png')

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dale Bandoni</title>
        <link rel='icon' href='/favicon.ico' />
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
        title='GitHub Jobs'
        tools={['React/', 'React Bootstrap']}
        description='Uses the GitHub API to fetch and display jobs in real time. Uses pagination & filter for full-time roles.'
        image={github}
        codeLink='https://github.com/dalebandoni/github-jobs'
        liveLink='https://dalebandoni.github.io/github-jobs/'
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
