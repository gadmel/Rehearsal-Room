import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function LoginPage({ signIn }) {
   const { register, handleSubmit } = useForm({})

   return (
      <LoginStyled
         onSubmit={handleSubmit((loginCredentials) => {
            signIn(loginCredentials.email, loginCredentials.password)
         })}
      >
         <Input name="email" type="email" ref={register} />
         <Input name="password" type="password" ref={register} />
         <Button>Log in</Button>
      </LoginStyled>
   )
}

export default withRouter(LoginPage)

const LoginStyled = styled.form`
   grid-area: stage;
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100vw;
   margin: 0;
   padding: 50px;
   background: #d5c9b7;
   color: white;
   align-items: center;
   overflow-x: auto;
   position: relative;
`
const Input = styled.input`
   margin: 20px;
   color: white;
`
const Button = styled.button`
   margin: 20px;
   color: white;
`
