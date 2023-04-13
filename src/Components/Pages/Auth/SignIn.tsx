import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <div>
        <Main>
        <Card buttontitle='SignIn' title='Sign In' onClick={()=>{
            console.log("Valerian");
        }}/>
        </Main>
    </div>
  )
}

export default SignIn

const Main = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
`