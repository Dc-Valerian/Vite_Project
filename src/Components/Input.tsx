import React from 'react'
import styled from 'styled-components'
import { iInput } from '../types'

const InputData:React.FC<iInput> = ({title}) => {

    const [sign,setSign] = React.useState(false)
    const [request,setRequest] = React.useState(false)

  return (
    <div>
          <Field>
                <Form>
                <Input
                        placeholder={title}
                        />
                    {
                        sign ?  <Input
                        placeholder={title}
                        /> :null
                    }
                    {
                        request ?  <Input
                        placeholder={title}
                        /> :null
                    }
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
display: flex;
flex-direction: column;
`


const Field = styled.div`
display: flex;
flex-direction: column;

`