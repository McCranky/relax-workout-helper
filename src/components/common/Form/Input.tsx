import React from 'react'
import { InputField, InputWrapper, Label } from './Form.styled'

interface Props {
    name: string;
    label: string;
    type: string;
}

const Input = ({name, label, type, ...props}: Props) => {
    return (
        <InputWrapper>
            <Label htmlFor={name}>{label}</Label>
            <InputField type={type} id={name} name={name} placeholder={name}/>
        </InputWrapper>
    )
}

export default Input
