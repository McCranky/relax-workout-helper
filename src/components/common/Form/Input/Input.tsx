import React from 'react'
import { Wrapper, InputField, Label } from './Input.styled'

interface Props {
    name: string;
    label: string;
    type: string;
}

const Input = ({name, label, type, ...props}: Props) => {
    return (
        <Wrapper>
            <Label htmlFor={name}>{label}</Label>
            <InputField type={type} id={name} name={name} placeholder={name}/>
        </Wrapper>
    )
}

export default Input
