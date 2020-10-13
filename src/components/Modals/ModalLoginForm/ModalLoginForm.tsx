import React from 'react'
import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import { Button } from '../../common/Form/Form.styled';
import Input from '../../common/Form/Input/Input';
import Modal from '../../common/Modal/Modal'
import Form from './../../common/Form/Form';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ModalLoginForm = ({ visible, onClose, ...props}: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);

    const handleSubmit = () => {
        console.log("Submited.")
    }

    return (
        <Modal title="Login" onClose={onClose} divRef={modalRef} visible={visible}>
            <Form imgUrl="/images/auth.svg" infotext="Login to fully enjoy all features of this website." onSubmit={handleSubmit}>
                <Input name="username" label="Username" type="text"/>
                <Input name="password" label="Password" type="password"/>
                <Button>Log in</Button>
            </Form>
        </Modal>
    )
}

export default ModalLoginForm
