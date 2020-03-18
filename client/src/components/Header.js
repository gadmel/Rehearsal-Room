import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyled>
      <LogoText>Rehearsal R</LogoText>
      <LogoIcon src="./speakers_white.svg"></LogoIcon>
      <LogoText>m</LogoText>
    </HeaderStyled>
  )
}
export default Header

const HeaderStyled = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: center;
  background: #1e3145;
  margin: 0;
`
const LogoText = styled.h1`
  background: transparent;
  font-size: 3rem;
`
const LogoIcon = styled.img`
  height: 38px;
  width: 43px;
  background: transparent;
`
