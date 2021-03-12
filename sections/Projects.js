import React from 'react'
import Container from '../components/Container'
import Project from '../components/Project'
import projects from '../projects.json'

const Projects = () => {
  return (
    <Container>
      {projects.map(project => (
        <Project project={project} key={project.title} />
      ))}
    </Container>
  )
}

export default Projects
