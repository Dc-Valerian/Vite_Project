import React from 'react'
import styled from 'styled-components'
import { iButton } from '../types'


const Button:React.FC<iButton> = ({buttontitle,c,bg,onClick}) => {
  return (
    <div>
        <Main bg={bg} c={c} 
        onClick={onClick}
        >
            <Text>
                {buttontitle}
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
height: 50px;
background-color: ${({bg})=> bg} ;
color:${({c})=>c};
border-radius:3px;
display: flex;
align-items: center;
justify-content:center;
transition:all 350ms;
margin:10px;

:hover{
    cursor:pointer;
    transform:scale(0.97)
}
`
