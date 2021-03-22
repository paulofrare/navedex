import React from 'react';
import {
  ContainerModal,
  Modal,
  ModalImgWrapper,
  ModalDescriptionWrapper,
  ModalDescriptionName,
  ModalDescriptionText,
  ModalDescriptionBox,
  ModalDescriptionSubtitle,
  ModalDescriptionInfo,
  ModalDescriptionActions,
  EditAction,
  DeletetAction,
  CloseAction,
} from './styles';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Edit, Delete, Close } from '../../Assets/icons/index';

const ModalDetail = ({ naver, setModal, setModalDelete }) => {
  const history = useHistory();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(false);
  }

  const getYears = (date) => {
    if (moment(date).fromNow(true).split(' ')[1] !== 'years')
      return `${moment(date).fromNow(true).split(' ')[0]} meses`;
    else return `${moment(date).fromNow(true).split(' ')[0]} anos`;
  };

  return (
    <ContainerModal onClick={handleOutsideClick}>
      <Modal>
        <ModalImgWrapper src={naver.url}></ModalImgWrapper>
        <ModalDescriptionWrapper>
          <CloseAction onClick={() => setModal(false)}>
            <Close />
          </CloseAction>
          <ModalDescriptionInfo>
            <ModalDescriptionBox>
              <ModalDescriptionName>{naver.name}</ModalDescriptionName>
              <ModalDescriptionText>{naver.job_role}</ModalDescriptionText>
            </ModalDescriptionBox>
            <ModalDescriptionBox>
              <ModalDescriptionSubtitle>Idade</ModalDescriptionSubtitle>
              <ModalDescriptionText>
                {getYears(naver.birthdate)}
              </ModalDescriptionText>
            </ModalDescriptionBox>
            <ModalDescriptionBox>
              <ModalDescriptionSubtitle>
                Tempo de empresa
              </ModalDescriptionSubtitle>
              <ModalDescriptionText>
                {getYears(naver.admission_date)}
              </ModalDescriptionText>
            </ModalDescriptionBox>
            <ModalDescriptionBox>
              <ModalDescriptionSubtitle>
                Projetos que participou
              </ModalDescriptionSubtitle>
              <ModalDescriptionText>{naver.project}</ModalDescriptionText>
            </ModalDescriptionBox>
          </ModalDescriptionInfo>
          <ModalDescriptionActions>
            <DeletetAction onClick={() => setModalDelete(true)}>
              <Delete></Delete>
            </DeletetAction>
            <EditAction onClick={() => history.push('/edit-naver', naver)}>
              <Edit></Edit>
            </EditAction>
          </ModalDescriptionActions>
        </ModalDescriptionWrapper>
      </Modal>
    </ContainerModal>
  );
};

export default ModalDetail;
