import styled from '@emotion/styled'
import { Link } from 'next/link'
import { theme } from '../styles/theme'
import { RiExternalLinkLine } from 'react-icons/ri'

const StyledNav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 95vw;
  }
`

const NavContainer = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .logoContainer {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 1rem;
    }

    .logoText {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .links {
    list-style: none;
    display: flex;
    font-size: 1.6rem;
    font-weight: 600;

    .link {
      display: flex;
      align-items: center;
      margin-left: 5rem;
      padding: 0.8rem;
      border-radius: 8px;
      transition: all 0.3s cubic-bezier(0, 0.55, 0.45, 1);

      .linkIcon {
        margin-left: 0.5rem;
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

  @media (max-width: 1200px) {
    width: 95vw;
  }

  @media (max-width: 576px) {
    .linksContainer {
      display: none;
    }
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <NavContainer>
        <div className='logoContainer'>
          <img
            src='../assets/images/logoIcon.png'
            width='20px'
            alt='logo icon'
            className='icon'
          />
          <span className='logoText'>Dale Bandoni</span>
        </div>
        <div className='linksContainer'>
          <ul className='links'>
            <a href='https://www.linkedin.com/in/dale-bandoni/'>
              <li className='link'>
                LinkedIn <RiExternalLinkLine className='linkIcon' />
              </li>
            </a>
            <a href='https://twitter.com/dalebandoni'>
              <li className='link'>
                Twitter <RiExternalLinkLine className='linkIcon' />
              </li>
            </a>
            <a href='https://github.com/dalebandoni'>
              <li className='link'>
                GitHub <RiExternalLinkLine className='linkIcon' />
              </li>
            </a>
          </ul>
        </div>
      </NavContainer>
    </StyledNav>
  )
}

export default Navbar
