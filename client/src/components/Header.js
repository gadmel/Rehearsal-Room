import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyled>
      <LogoText>Rehearsal Room</LogoText>
    </HeaderStyled>
  )
}
export default Header

const HeaderStyled = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: center;
  background: #0a2a45;
  margin: 0;
`
const LogoText = styled.h1`
  background: transparent;
`
