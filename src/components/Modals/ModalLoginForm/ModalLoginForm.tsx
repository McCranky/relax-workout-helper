import React from 'react'
import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import Modal from '../../common/Modal/Modal'
import Form from './../../common/Form/Form';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const ModalLoginForm = ({ visible, onClose, ...props}: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);

    return (
        <Modal title="Login" onClose={onClose} divRef={modalRef} visible={visible}>
            <Form/>
        </Modal>
    )
}

export default ModalLoginForm
