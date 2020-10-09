import React, { useRef } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import {
  CloseBtn,
  Content,
  Header,
  InnerWrapper,
  Title,
  Wrapper,
} from "./Modal.styled";

interface Props {
  visible: boolean;
  divRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const Modal = ({ visible, divRef, onClose, ...props }: Props) => {
  const refModalWrapper = useRef(null);

  return (
    <Wrapper visible={visible}>
      <InnerWrapper ref={divRef}>
        <Header>
          <Title>Video title</Title>
          <CloseBtn onClick={onClose} />
        </Header>
        <Content>
          <VideoPlayer url="/videos/1.mp4" />
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Modal;
