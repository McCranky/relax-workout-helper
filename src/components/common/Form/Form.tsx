import React from "react";
import Joi from "joi";

import {
    Left,
    Right,
    Wrapper,
    Image,
    FormWrapper,
    InnerWrapper,
    Button,
} from "./Form.styled";
import { InputField } from "./../../../utils/types";
import Input from "./Input/Input";

interface Props {
    imgUrl?: string;
    infotext?: string;
    // children: React.ReactNode;
    onSubmit: () => void;
    buttonLabel: string;
    validateSchema: Joi.SchemaLike;
    fields: InputField[];
}

const Form = ({
    imgUrl,
    infotext,
    // children,
    onSubmit,
    validateSchema,
    fields,
    buttonLabel,
    ...props
}: Props) => {
    return (
        <Wrapper>
            {infotext && <h3>{infotext}</h3>}
            <InnerWrapper>
                {imgUrl && (
                    <Left>
                        <Image src={imgUrl} />
                    </Left>
                )}
                <Right>
                    <FormWrapper onSubmit={onSubmit}>
                        {fields.map((field, index) => (
                            <Input
                                key={index + field.label}
                                type={field.type}
                                name={field.name}
                                label={field.label}
                            />
                        ))}
                        <Button>{buttonLabel}</Button>
                    </FormWrapper>
                </Right>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Form;
