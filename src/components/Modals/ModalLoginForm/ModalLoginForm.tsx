import React from "react";
import Joi from "joi";

import Modal from "../../common/Modal/Modal";
import Form from "./../../common/Form/Form";
import { InputField } from "../../../utils/types";

import { useOnClickOutside } from "../../../utils/useOnClickOutside";

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ModalLoginForm = ({ visible, onClose, ...props }: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);
    const fields: InputField[] = [
        { type: "text", name: "username", label: "Username" },
        { type: "password", name: "password", label: "Password" },
    ];

    const schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    const handleSubmit = () => {
        console.log("Submited.");
    };

    return (
        <Modal title='Login' onClose={onClose} divRef={modalRef} visible={visible}>
            <Form
                imgUrl='/images/auth.svg'
                infotext='Login to fully enjoy all features of this website.'
                onSubmit={handleSubmit}
                buttonLabel='Log In'
                validateSchema={schema}
                fields={fields}
            />
        </Modal>
    );
};

export default ModalLoginForm;
