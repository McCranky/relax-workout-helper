import React from 'react'
import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import Form from '../../common/Form/Form';
import { Button } from '../../common/Form/Form.styled';
import Input from '../../common/Form/Input/Input';
import Modal from '../../common/Modal/Modal';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ModalRegisterForm = ({visible, onClose, ...props}: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);

    const handleSubmit = () => {
        console.log("Submited.")
    }
    
    return (
        <Modal title="Sign Up" onClose={onClose} divRef={modalRef} visible={visible}>
            <Form imgUrl="/images/signup.svg" infotext="Register and become a member of the best workout helper ever!" onSubmit={handleSubmit}>
                <Input name="username" label="Username" type="text"/>
                <Input name="password" label="Password" type="password"/>
                <Input name="password" label="Repeat password" type="password"/>
                <Input name="email" label="Email" type="text"/>
                <Button>Sign Up</Button>
            </Form>
        </Modal>
    )
}

export default ModalRegisterForm
