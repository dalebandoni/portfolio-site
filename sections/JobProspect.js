import styled from '@emotion/styled'
import { theme } from '../styles/theme'
import Container from '../components/Container'
import { FiAlertCircle } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'

import Button from '../components/Button'
import { Link } from 'react-scroll'

const Section = styled.section`
  background: ${theme.colors.black};
  color: ${theme.colors.clay};

  .icon {
    font-size: 4.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  .contentContainer {
    padding: 10rem 0;

    .title {
      display: flex;
      align-items: center;
      font-size: 5rem;
      font-family: 'Space Mono';
      margin-bottom: 2rem;
    }

    .subTitle {
      font-size: 2rem;
      line-height: 140%;
      margin-bottom: 3rem;

      .subTitleFocus {
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    .contentContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title {
        text-align: center;
        padding: 1.5rem 0;
        font-size: 4rem;
      }

      .subTitle {
        text-align: center;
        padding: 0 0 1.5rem 0;
      }
    }
  }

  @media (max-width: 576px) {
    .contentContainer {
      display: flex;
      flex-direction: column;
      padding: 3rem 0;
      align-items: center;
      justify-content: center;
      .icon {
        font-size: 2rem;
      }
      .title {
        font-size: 2rem;
        text-align: center;
      }

      .subTitle {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
`

const JobProspect = () => {
  return (
    <Section>
      <Container flex>
        <div className='contentContainer'>
          <FiAlertCircle className='icon' />
          <h2 className='title'>I'm looking for a full-time role!</h2>
          <p className='subTitle'>
            I'm looking for roles as a frontend engineer or UX engineer.{' '}
            <span className='subTitleFocus'>
              If you can help please reach out!
            </span>
          </p>
          <a href='mailto:dalebandoni.10@gmail.com'>
            <Button dark>
              Contact me <BsArrowRightShort className='ctaIcon' />
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default JobProspect
