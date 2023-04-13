import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const Register = () => {
  return (
    <div>
        <Main>
        <Card buttontitle='Sign Up' title='Register' onClick={()=>{
            console.log("Valerian");
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