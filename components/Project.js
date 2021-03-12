import styled from '@emotion/styled'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'

import { theme } from '../styles/theme'

const ProjectLayout = styled.section`
  display: flex;
  border-bottom: 0.15rem solid black;
  padding: 5rem 0;

  .projectInfo {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    .projectTechnologies {
      font-size: 2rem;
      margin-bottom: 4rem;
      font-family: 'Space Mono';
    }

    .projectTitle {
      font-size: 4.1rem;
      font-family: 'Space Mono';
      margin-bottom: 5rem;
    }

    .linkContainer {
      display: flex;
      width: 60%;
      justify-content: space-between;
      margin-bottom: 7rem;

      .link {
        font-size: 2rem;
        display: flex;
        align-items: center;
        padding: 0.8rem;
        border-radius: 8px;
        transition: all 0.3s cubic-bezier(0, 0.55, 0.45, 1);

        .linkIcon {
          margin-left: 1rem;
          transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
        }
        :hover {
          cursor: pointer;
          color: ${theme.colors.primary};
          background: ${theme.colors.primaryLight};
          .linkIcon {
            transform: translateY(-0.5rem);
          }
        }
      }
    }

    #mobileLinks {
      display: none;
    }

    .projectDescription {
      font-size: 2rem;
      width: 60%;
      line-height: 160%;
    }
  }

  .projectImage {
    width: 797px;
    flex: 1;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    .projectInfo {
      .linkContainer {
        width: 75%;
      }
      .projectDescription {
        width: 100%;
      }
    }
    .projectImage {
      flex: 1.5;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .projectInfo {
      padding-bottom: 5rem;
    }

    .linkContainer {
      display: flex;
      min-width: 100%;
      flex-direction: column;

      .link {
        align-items: center;
        justify-content: center;
        border: 2px solid ${theme.colors.primary};
        margin-bottom: 1rem;
        width: 100%;
      }
    }

    .projectImage {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    max-width: 95vw;
    flex-direction: column;

    .projectInfo {
      margin-bottom: 0;
      padding: 0;
      .projectTechnologies {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .projectTitle {
        margin-bottom: 0.5rem;
      }

      .linkContainer {
        display: none;
      }

      #mobileLinks {
        display: flex;

        width: 100%;
        margin-bottom: 2rem;
        flex-direction: column;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid ${theme.colors.primary};
          margin-bottom: 0.5rem;
        }
      }

      .projectDescription {
        width: 100%;
        margin: 2rem 0;
      }

      .projectTitle {
        font-size: 2.5rem;
      }
    }

    .projectImage {
      width: 100%;
    }
  }
`

const Project = ({ project }) => {
  return (
    <ProjectLayout id='projects'>
      <div className='projectInfo'>
        <span className='projectTechnologies'>{project.technologies}</span>
        <span className='projectTitle'>{project.title}</span>
        <div className='linkContainer'>
          <a href={project.githubLink}>
            <span className='link'>
              View Code <AiFillGithub className='linkIcon' />
            </span>
          </a>
          {project.hostedLink && (
            <a href={project.hostedLink}>
              <span className='link'>
                View Live <RiExternalLinkLine className='linkIcon' />
              </span>
            </a>
          )}
        </div>
        <span className='projectDescription'>{project.description}</span>
        <div id='mobileLinks' className='linkContainer '>
          <a href={project.githubLink}>
            <span className='link'>
              View Code <AiFillGithub className='linkIcon' />
            </span>
          </a>
          {project.hostedLink && (
            <a href={project.hostedLink}>
              <span className='link'>
                View Live <RiExternalLinkLine className='linkIcon' />
              </span>
            </a>
          )}
        </div>
      </div>
      <div className='projectImage'>
        <img src={project.image} alt='project pic' className='image' />
      </div>
    </ProjectLayout>
  )
}

export default Project
