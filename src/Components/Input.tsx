import React from 'react'
import styled from 'styled-components'
import { iInput } from '../types'

const InputData:React.FC<iInput> = ({
    inputTitle,
    inputTitle1,
    inputTitle2,
    sign,
    request,
    email,
    password,
    userName
   
}) => {

    const [email,setEmail] = React.useState("")

  return (
    <div>
          <Field>
                <Form>
                <Input
                        placeholder={inputTitle}
                        value={email}
                        onChange={(e:any)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    {
                        sign ?  <Input
                        placeholder={inputTitle1}
                        /> :null
                    }
                    {
                        request ?  <Input
                        placeholder={inputTitle2}
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