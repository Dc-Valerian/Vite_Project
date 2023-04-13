import React from 'react'
import styled from 'styled-components'
import { iCard } from '../types'
import InputData from './Input'

const Card:React.FC<iCard> = ({title}) => {
  return (
    <div>
        <Main>
            <Text>
                {title}
            </Text>
          <InputData title='Name'/>
          <InputData title='Email'/>
          <InputData title='Password'/>
        </Main>
    </div>
  )
}

export default Card


const Text = styled.div`
margin-top: 40px;
font-weight: 500;
text-transform: uppercase;
font-size: 40px;
`

const Main = styled.div`
width: 400px;
min-height: 600px;
border-radius: 10px;
border-color: silver;
border: 1px solid gray;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
`