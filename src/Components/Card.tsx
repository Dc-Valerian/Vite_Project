import React from 'react'
import styled from 'styled-components'
import { iButton, iCard } from '../types'
import InputData from './Input'
import Button from './Button'
import {Link} from "react-router-dom"

const Card:React.FC<iCard> = ({
    title,
    buttontitle,
    onClick,
    inputTitle,
    inputTitle1,
    inputTitle2,
    sign,
    request,
    path,
    text,
  route,
    path1,
    text1,
  route1,
  call
  

}) => {
  return (
    <div>
        <Main>
            <Text>
                {title}
            </Text>
          <InputData
           inputTitle={inputTitle}
           inputTitle1={inputTitle1}
           inputTitle2={inputTitle2}
             sign={sign} 
             request={request}
             
             />
        
          <Button buttontitle={buttontitle} bg='#000269' c='white'
          onClick={onClick}
          />

          <Content>
          {text} <Span to={`${path}`}>
                {route}
            </Span>
          </Content>
          {
            call ?   <Content>
            {text1} <Span to={`${path1}`}>
                  {route1}
              </Span>
            </Content> :null
          }
        </Main>
    </div>
  )
}

export default Card


const Span = styled(Link)`
margin-left: 5px;
font-weight: bolder;
transition: all 350ms;
text-decoration: none;
:hover{
    cursor: pointer;
    transform: scale(1.007);
}
`

const Content = styled.div`
display: flex;
margin-top: 10px;
`

const Text = styled.div`
margin-top: 40px;
font-weight: 500;
text-transform: uppercase;
font-size: 40px;
`

const Main = styled.div`
width: 400px;
min-height: 400px;
border-radius: 10px;
border-color: silver;
border: 1px solid gray;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
`