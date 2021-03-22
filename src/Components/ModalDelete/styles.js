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
  position: relative;
  overflow: hidden;
  width: 592px;
  height: 233px;
  background: #ffffff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 685px) {
    width: 450px;
  }
  @media (max-width: 530px) {
    width: 300px;
    height: 410px;
  }
`;

const ContainerModalTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
`;
const ContainerModalText = styled.div`
  margin-top: 24px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const ModalDeleteActions = styled.div`
  display: flex;
  align-self: flex-end;
  flex-wrap: wrap;

  @media (max-width: 530px) {
    justify-content: center;
  }
`;

const DeletetAction = styled.div`
  width: 176px;
`;
const CancelAction = styled.div`
  width: 176px;
  margin-right: 24px;

  @media (max-width: 530px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const CloseAction = styled.div`
  position: absolute;
  right: 32px;
  cursor: pointer;
`;

export {
  ContainerModal,
  Modal,
  ContainerModalTitle,
  ContainerModalText,
  ModalDeleteActions,
  DeletetAction,
  CancelAction,
  CloseAction,
};
