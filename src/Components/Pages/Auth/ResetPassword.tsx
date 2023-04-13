import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const ResetPassword = () => {
  return (
    <div>
        <Main>
        <Card 
        buttontitle='ResetPassword'
         title='Reset Password'
         inputTitle="Email"
         inputTitle1="Password"
         inputTitle2="Confirm Password"
         sign={false}
         request={false}
          onClick={()=>{
            console.log("Valerian");
        }}/>
        </Main>
    </div>
  )
}

export default ResetPassword

const Main = styled.div`
display: flex;
height: calc(100vh - 300px);
width: 100%;
justify-content: center;
align-items: center;
`