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
    font-size: 5rem;
    font-family: 'Space Mono';
    line-height: 140%;
    margin-bottom: 3rem;
  }

  .subTitle {
    font-family: 'Nunito Sans';
    font-size: 2rem;
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
          I'm Dale – <br /> a Designer & Developer <br /> based in Glasgow,
          Scotland.
        </h1>
        <p className='subTitle'>
          I specialise in creating beautiful user interfaces <br /> for
          applications and websites.
        </p>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button>
            View my work
            <BsArrowRightShort className='ctaIcon' />
          </Button>
        </Link>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <Button inverse>
            Learn more about me
            <BsArrowRightShort className='ctaIcon' />
          </Button>
        </Link>
      </StyledIntro>
    </Container>
  )
}

export default Intro
