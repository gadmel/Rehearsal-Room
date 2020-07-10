import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fbAuth } from '../base'

function Footer() {
   return (
      <FooterStyled>
         <NavItem to="/calendar">
            <Icon icon={['far', 'calendar-alt']}></Icon>
         </NavItem>
         <NavItem to="/members">
            <Icon icon={'users'}></Icon>
         </NavItem>
         <NavItem to="/" onClick={() => fbAuth.signOut()}>
            <Icon icon={'sign-out-alt'}></Icon>
         </NavItem>
      </FooterStyled>
   )
}

export default Footer

const FooterStyled = styled.footer`
   display: flex;
   align-items: center;
   justify-content: center;
   grid-area: footer;
   background: #0a2a45;
`
const NavItem = styled(NavLink)`
   display: flex;
   justify-content: center;
   justify-self: stretch;
   align-items: center;
   flex-grow: 1;
   margin: 0;
   padding: 0;
   background: transparent;
   text-decoration: none;
   color: white;
   font-size: 3.4rem;
   &.active {
      color: #a0bcd9;
   }
   &:hover {
      color: #a0bcd9;
   }
`

const Icon = styled(FontAwesomeIcon)`
   background: transparent;
`
