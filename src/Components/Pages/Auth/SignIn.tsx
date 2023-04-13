import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <div>
        <Main>
        <Card 
        buttontitle='SignIn' 
        title='Sign In'
        inputTitle="Email"
        inputTitle1="Password"
        inputTitle2="ConfirmPassword"
        sign={true}
        request={false}
         onClick={()=>{
            console.log("Valerian");
        }}/>
        </Main>
    </div>
  )
}

export default SignIn

const Main = styled.div`
display: flex;
height: calc(100vh - 300px);
width: 100%;
justify-content: center;
align-items: center;
`