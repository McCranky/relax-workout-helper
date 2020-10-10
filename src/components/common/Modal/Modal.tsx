import React from "react";
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
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ title, visible, divRef, onClose, children, ...props }: Props) => {
  return (
    <Wrapper visible={visible}>
      <InnerWrapper ref={divRef}>
        <Header>
          <Title>{title}</Title>
          <CloseBtn onClick={onClose} />
        </Header>
        <Content>
          {children}
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Modal;
