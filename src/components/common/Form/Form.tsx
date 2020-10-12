import React from 'react'
import { Button, Wrapper } from './Form.styled';
import Input from './Input';

interface Props {
    
}

const Form = (props: Props) => {
    return (
        <Wrapper>
            <Input name="username" label="Username" type="text"/>
            <Input name="password" label="Password" type="password"/>
            <Button>Log in</Button>
        </Wrapper>
    )
}

export default Form
