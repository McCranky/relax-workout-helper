import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const InnerWrapper = styled.div`
  background: #ecf0f1;
  margin: 7% auto;
  max-width: 800px;
  /* min-height: 500px; */
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2), 0 7px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 990px) {
    max-width: 500px;
  }

  @media screen and (max-width: 570px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const Title = styled.h4`
  display: flex;
  font-weight: 900;
  font-size: 1.2rem;
`;

export const Content = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
`;

// export const InnerWrapper = styled.div`
//   background: #ecf0f1;
//   margin: 10% auto;
//   width: 60%;
//   min-height: 500px;
//   box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2), 0 7px 20px rgba(0, 0, 0, 0.2);
//   border-radius: 3px;
//   position: relative;

//   video {
//     width: 100%;
//     height: 100%;
//   }
// `;

export const CloseBtn = styled(FaTimes)`
  display: flex;
  z-index: 11;
  font-size: 1.15rem;
  color: gray;
  transform: translateX(-50%);
  cursor: pointer;
`;
