import React from 'react'
import Card from '../../Card'
import styled from 'styled-components'

const ResetPassword = () => {
  return (
    <div>
        <Main>
        <Card buttontitle='ResetPassword' title='Reset Password' onClick={()=>{
            console.log("Valerian");
        }}/>
        </Main>
    </div>
  )
}

export default ResetPassword

const Main = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
`