import React from "react";
import Joi from "joi";

import Modal from "../../common/Modal/Modal";
import Form from "../../common/Form/Form";
import { InputField } from "./../../../utils/types";

import { useOnClickOutside } from "../../../utils/useOnClickOutside";

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ModalRegisterForm = ({ visible, onClose, ...props }: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);
    const fields: InputField[] = [
        { type: "text", name: "username", label: "Username" },
        { type: "password", name: "password", label: "Password" },
        { type: "password", name: "Repeat password", label: "Password" },
        { type: "text", name: "email", label: "Email" },
    ];

    const schema = {
        username: Joi.string().required().label("Username"),
        email: Joi.string()
            .required()
            .email({ tlds: { allow: false } })
            .label("Email"),
        password: Joi.string().required().min(6).label("Password"),
    };

    const handleSubmit = () => {
        console.log("Submited.");
    };

    return (
        <Modal title='Sign Up' onClose={onClose} divRef={modalRef} visible={visible}>
            <Form
                imgUrl='/images/signup.svg'
                infotext='Register and become a member of the best workout helper ever!'
                onSubmit={handleSubmit}
                buttonLabel='Sign Up'
                validateSchema={schema}
                fields={fields}
            />
        </Modal>
    );
};

export default ModalRegisterForm;
