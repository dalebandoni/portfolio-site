import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../styles/theme'

const CTAbutton = styled.span`
  display: inline-block;
  background-color: ${props =>
    props.inverse ? `none` : props.dark ? `none` : `${theme.colors.primary}`};
  color: ${props =>
    props.inverse
      ? `${theme.colors.primary}`
      : props.dark
      ? `${theme.colors.white}`
      : `${theme.colors.white}`};
  border: ${props =>
    props.dark ? `.2rem solid ${theme.colors.white}` : 'none'};
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 5.9rem;
  max-width: 100%;
  padding: 0 2.4rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s cubic-bezier(0, 0.55, 0.45, 1);

  :hover {
    cursor: pointer;
    background-color: ${props =>
      props.dark ? `${theme.colors.white}` : ` ${theme.colors.primaryLight}`};
    color: ${theme.colors.primary};

    .ctaIcon {
      transform: translateX(0.5rem);
    }
  }

  .ctaIcon {
    margin-left: 1rem;
    font-size: 2.5rem;
    transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`

const Button = ({ children, inverse, dark }) => {
  return (
    <CTAbutton inverse={inverse ? inverse : null} dark={dark ? dark : null}>
      {children}
    </CTAbutton>
  )
}

export default Button
