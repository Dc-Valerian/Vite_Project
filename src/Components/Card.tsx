import React from 'react'
import styled from 'styled-components'
import { iButton, iCard } from '../types'
import InputData from './Input'
import Button from './Button'

const Card:React.FC<iCard> = ({title,buttontitle,onClick}) => {
  return (
    <div>
        <Main>
            <Text>
                {title}
            </Text>
          <InputData
           title='OTP'
            // title1='Password'
             sign={false} 
             request={false}
             />
        
          <Button buttontitle={buttontitle} bg='#000269' c='white'
          onClick={onClick}
          />
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