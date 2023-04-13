import React from 'react'
import styled from 'styled-components'
import { iInput } from '../types'

const InputData:React.FC<iInput> = ({title}) => {
  return (
    <div>
          <Field>
                <Form>
                    <Input
                    placeholder={title}
                    />
                </Form>
            </Field>
    </div>
  )
}

export default InputData

const Input  = styled.input`
border-radius: 4px;
border: 1px solid gray;
height: 40px;
width: 300px;
padding-left:10px;
margin: 5px 0;
`

const Form = styled.form`
width: 100%;

`


const Field = styled.div`
display: flex;
flex-direction: column;

`