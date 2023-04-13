import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
        <Main bg='red' c='black'>
            <Text>
                Button
            </Text>
        </Main>
    </div>
  )
}

export default Button

const Text = styled.div`
font-weight: bold;

`

const Main = styled.div<
{bg:string, c:string}
>`
width: 120px;
height: 80px;
background-color: ${({bg})=> bg} ;
color:${({c})=>c};
border-radius:3px;
align-items:center;
justify-content:center;
transition:all 350ms;

:hover{
    cursor:pointer;
    transform:scale(0.97)
}
`
