import styled from '@emotion/styled'
import React from 'react'
//const breakpoints = [576, 768, 992, 1200]

const StyledContainer = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: ${props => (props.flex ? 'flex' : 'block')};
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 95vw;
  }

  @media (max-width: 768px) {
    max-width: 95vw;
  }

  @media (max-width: 576px) {
    width: 95vw;
    margin: 0 auto;
  }
`

const Container = ({ children, flex }) => {
  return <StyledContainer flex={flex ? flex : null}>{children}</StyledContainer>
}

export default Container
