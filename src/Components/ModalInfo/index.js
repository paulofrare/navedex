import React from 'react';
import { Close } from '../../Assets/icons';
import {
  ContainerModal,
  ContainerModalText,
  ContainerModalTitle,
  Modal,
  CloseAction,
} from './styles';

const ModalInfo = ({ title, text, setModalInfo }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalInfo(false);
  }

  return (
    <ContainerModal onClick={handleOutsideClick}>
      <Modal>
        <CloseAction onClick={() => setModalInfo(false)}>
          <Close />
        </CloseAction>
        <div>
          <ContainerModalTitle>{title}</ContainerModalTitle>
          <ContainerModalText>{text}</ContainerModalText>
        </div>
      </Modal>
      ;
    </ContainerModal>
  );
};

export default ModalInfo;
