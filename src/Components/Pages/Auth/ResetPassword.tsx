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
         sign={true}
         request={false}
         route='Reset Password'
         text='Forgot Your Password.?'
         path='/Reset'
         route1='Reset Password'
         text1='Forgot Your Password.?'
         path1='/Reset'
         call={true}

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
height: calc(100vh - 270px);
width: 100%;
justify-content: center;
align-items: center;
`