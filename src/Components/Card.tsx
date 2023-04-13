import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <div>
        <Main>
            <Text>
                Text
            </Text>
            <Field>
                Field
            </Field>
        </Main>
    </div>
  )
}

export default Card

const Field = styled.div``

const Text = styled.div`

`

const Main = styled.div`
width: 400px;
min-height: 600px;
border-radius: 10px;
border-color: silver;
background-color: green;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
`