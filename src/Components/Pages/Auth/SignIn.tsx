import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const SignIn = () => {
  return (
    <div>
        <Main>
        <Card 
        buttontitle='Sign In' 
        title='Sign In'
        inputTitle="Email"
        inputTitle1="Password"
        inputTitle2="ConfirmPassword"
        sign={true}
        request={false}
        text="Don't Have An Account !!"
        route="Create One Now"
        path='/SignIn'
        text1="Forget Your Password"
        route1="Create One Now"
        path1='/Reset'
        call={true}
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
height: calc(100vh - 270px);
width: 100%;
justify-content: center;
align-items: center;
`