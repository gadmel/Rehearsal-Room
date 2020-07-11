import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function LoginPage({ signIn }) {
   const { register, handleSubmit } = useForm({})

   return (
      <LoginStyled
         onSubmit={handleSubmit(loginCredentials => {
            signIn(loginCredentials.email, loginCredentials.password)
         })}
      >
         <input name="email" type="email" ref={register} />
         <input name="password" type="password" ref={register} />
         <button>Log in</button>
      </LoginStyled>
   )
}

export default withRouter(LoginPage)

const LoginStyled = styled.form`
   grid-area: stage;
   display: flex;
   height: 100%;
   width: 100vw;
   margin: 0;
   padding: 12px 12px 16px 12px;
   background: #d5c9b7;
   color: white;
   align-items: flex-start;
   overflow-x: auto;
   position: relative;
`
