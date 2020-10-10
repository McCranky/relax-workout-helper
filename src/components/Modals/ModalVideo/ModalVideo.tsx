import React from 'react'
import { useOnClickOutside } from '../../../utils/useOnClickOutside';
import Modal from '../../common/Modal/Modal'
import VideoPlayer from '../../common/VideoPlayer/VideoPlayer'

interface Props {
    title: string;
    url: string;

    visible: boolean;
    onClose: () => void;
}

const ModalVideo = ({title, url, visible, onClose, ...props}: Props) => {
    const modalRef = useOnClickOutside<HTMLDivElement>(onClose);
    
    return (
        <Modal
        title={title}
        visible={visible}
        divRef={modalRef}
        onClose={onClose}
      >
        <VideoPlayer url={url} />
      </Modal>
    )
}

export default ModalVideo
