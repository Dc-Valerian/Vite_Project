import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const Register = () => {
  return (
    <div>
        <Main>
        <Card 
        buttontitle='Sign Up' 
        title='Register'
        inputTitle='Register'
        inputTitle1="Email"
        inputTitle2="Password"
        sign={true}
        request={true}
         onClick={()=>{
            console.log();
        }}/>
        </Main>
    </div>
  )
}

export default Register

const Main = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
`