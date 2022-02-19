import styled from '@emotion/styled'
import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-scroll'

const StyledIntro = styled.section`
  margin-top: 13.5rem;
  margin-bottom: 14rem;

  .title {
    font-size: 10rem;
    font-family: 'Inter';
    line-height: 140%;
    margin-bottom: 3rem;
  }

  .subTitle {
    font-family: 'Inter';
    font-style: italic;
    font-size: 6rem;
    line-height: 140%;
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    margin: 5rem 0;

    .title {
      font-size: 2.2rem;
      width: 95vw;
      margin-bottom: 1.5rem;
    }

    .subTitle {
      font-size: 1.6rem;
    }
  }
`

const Intro = () => {
  return (
    <Container>
      <StyledIntro>
        <h1 className='title'>
          Dale Bandoni <br />
        </h1>
        <p className='subTitle'>
          — Cloud Engineer, <br /> web development, ex art student.
        </p>
      </StyledIntro>
    </Container>
  )
}

export default Intro
