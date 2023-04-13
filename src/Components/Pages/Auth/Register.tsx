import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const Register = () => {
  return (
    <div>
        <Main>
        <Card 
        buttontitle='Register' 
        title='Register'
        inputTitle='Register'
        inputTitle1="Email"
        inputTitle2="Password"
        sign={true}
        request={true}
        route='Register'
        path='/Register'
        route1='Reset Password'
        text1='Forgot Your Password.?'
        path1='/Reset'
        call={true}
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
height: calc(100vh - 270px);
width: 100%;
justify-content: center;
align-items: center;
`