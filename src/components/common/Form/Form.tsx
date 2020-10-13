import React from 'react'
import { Left, Right, Wrapper, Image, FormWrapper, InnerWrapper } from './Form.styled';

interface Props {
    imgUrl?: string;
    infotext?: string;
    children: React.ReactNode;
    onSubmit: () => void;
}

const Form = ({imgUrl, infotext, children, onSubmit, ...props}: Props) => {
    return (
        <Wrapper>
            {infotext && <h3>{infotext}</h3>}
            <InnerWrapper>
                {imgUrl && <Left>
                    <Image src={imgUrl}/>
                </Left>}
                <Right>
                    <FormWrapper onSubmit={onSubmit}>
                        {children}
                    </FormWrapper>
                </Right>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Form
