import styled from 'styled-components';

const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Modal = styled.div`
  overflow: hidden;
  width: 1000px;
  height: 500px;
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1100px) {
    width: 800px;
  }
  @media (max-width: 880px) {
    width: 600px;
    height: 410px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    width: 80%;
    height: none;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: auto;
`;
const ModalImgWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

const ModalDescriptionWrapper = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ModalDescriptionName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
`;
const ModalDescriptionText = styled.div`
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;
const ModalDescriptionSubtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
const ModalDescriptionBox = styled.div`
  margin-bottom: 24px;
`;
const ModalDescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalDescriptionActions = styled.div`
  margin-top: 7px;
  display: flex;
`;

const DeletetAction = styled.div`
  cursor: pointer;
  margin-right: 7px;
`;

const EditAction = styled.div`
  cursor: pointer;
`;
const CloseAction = styled.div`
  position: absolute;
  right: 32px;
  cursor: pointer;
`;

export {
  ContainerModal,
  Modal,
  ModalImg,
  ModalImgWrapper,
  ModalDescriptionWrapper,
  ModalDescriptionName,
  ModalDescriptionText,
  ModalDescriptionBox,
  ModalDescriptionSubtitle,
  ModalDescriptionInfo,
  ModalDescriptionActions,
  DeletetAction,
  EditAction,
  CloseAction,
};
