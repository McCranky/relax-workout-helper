import React from 'react'
import { Wrapper } from './Form.styled';
import Input from './Input';

interface Props {
    
}

const Form = (props: Props) => {
    return (
        <Wrapper>
            <Input name="username" label="Username" type="text"/>
            <Input name="password" label="Password" type="password"/>
            <button>Log In</button>
        </Wrapper>
    )
}

export default Form
