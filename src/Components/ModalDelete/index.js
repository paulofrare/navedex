import React, { useEffect, useState } from 'react';
import Button from '../Button';
import {
  CancelAction,
  ContainerModal,
  ContainerModalText,
  ContainerModalTitle,
  DeletetAction,
  Modal,
  ModalDeleteActions,
  CloseAction,
} from './styles';

import { Close } from '../../Assets/icons/index';
import { deleteNaver } from '../../Services/naversService';

const ModalDelete = ({ naver, setModal, setModalDelete }) => {
  const [success, setSuccess] = useState(false);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalDelete(false);
  }

  async function fetchDelete() {
    const res = await deleteNaver(naver.id);
    if (res) setSuccess(true);
    else console.log('Não foi possivel deletar o Naver');
  }

  useEffect(() => {
    setModal(false);
  }, [setModal]);

  return (
    <ContainerModal onClick={handleOutsideClick}>
      {success ? (
        <Modal style={{ height: '160px' }}>
          <CloseAction onClick={() => window.location.reload()}>
            <Close />
          </CloseAction>
          <div>
            <ContainerModalTitle>Naver Excluído</ContainerModalTitle>
            <ContainerModalText>Naver excluído com sucesso!</ContainerModalText>
          </div>
        </Modal>
      ) : (
        <Modal>
          <div>
            <ContainerModalTitle>Excluir Naver</ContainerModalTitle>
            <ContainerModalText>
              Tem certeza que deseja excluir este Naver?
            </ContainerModalText>
          </div>
          <ModalDeleteActions>
            <CancelAction>
              <Button white onclick={() => setModalDelete(false)}>
                Cancelar
              </Button>
            </CancelAction>
            <DeletetAction>
              <Button onclick={() => fetchDelete()}>Excluir</Button>
            </DeletetAction>
          </ModalDeleteActions>
        </Modal>
      )}
    </ContainerModal>
  );
};

export default ModalDelete;
