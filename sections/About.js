import styled from '@emotion/styled'
import React from 'react'
import Container from '../components/Container'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiSass, DiNodejs, DiReact } from 'react-icons/di'
import { SiJavascript, SiStyledComponents } from 'react-icons/si'

const ContentContainer = styled.div`
  width: 100%;
  padding: 7rem 0;

  .title {
    font-size: 4rem;
    font-family: 'Space Mono';
    font-weight: 500;
    line-height: 135%;
    margin-bottom: 7rem;
  }

  .iconContainer {
    display: flex;
    justify-content: space-evenly;
    .techIcon {
      font-size: 7rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 95vw;
  }

  @media (max-width: 576px) {
    .title {
      font-size: 1.5rem;
    }

    .iconContainer {
      .techIcon {
        font-size: 3.5rem;
      }
    }
  }
`

const About = () => {
  return (
    <Container>
      <ContentContainer id='about'>
        <h2 className='title'>
          About me –
          <br />
          <br />
          In 2020, after getting an Honours Degree in Digital Art & Design I
          decided to start learning how to code. Fast-track ‘til now and I
          design and build websites and applications using these technologies:
        </h2>
        <div className='iconContainer'>
          <AiFillHtml5 className='techIcon' />
          <DiCss3 className='techIcon' />
          <SiJavascript className='techIcon' />
          <DiSass className='techIcon' />
          <DiNodejs className='techIcon' />
          <DiReact className='techIcon' />
          <SiStyledComponents className='techIcon' />
        </div>
      </ContentContainer>
    </Container>
  )
}

export default About
