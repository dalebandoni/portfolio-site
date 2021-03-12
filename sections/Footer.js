import styled from '@emotion/styled'
import React from 'react'
import Container from '../components/Container'
import { theme } from '../styles/theme'

const StyledFooter = styled.section`
  background: ${theme.colors.black};
  padding: 3.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100vw;
    padding: 1.5rem 0;
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.clay};
  width: 100%;

  .footerLinks {
    list-style: none;
    display: flex;

    .link {
      margin-left: 5rem;
      font-size: 1.6rem;

      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footerLinks {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1.5rem;
      .link {
        margin: 0.5rem 0;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <ContentContainer>
          <p className='copyright'>©2021 – Glasgow, Scotland </p>
          <ul className='footerLinks'>
            <li className='link'>GitHub</li>
            <li className='link'>Twitter</li>
            <li className='link'>LinkedIn</li>
          </ul>
          <div className='logoIconContainer'>
            {' '}
            <img
              src='../assets/images/logoIcon.png'
              width='20px'
              alt='logo icon'
              className='icon'
            />
          </div>
        </ContentContainer>
      </Container>
    </StyledFooter>
  )
}

export default Footer
