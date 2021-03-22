import React from 'react';
import {
  CardWrapper,
  CardImg,
  ImgWrapper,
  DescriptionWrapper,
  DescriptionName,
  DescriptionJob,
  Actions,
  EditAction,
  DeleteAction,
} from './styles';
import { Edit } from '../../Assets/icons/index';
import { Delete } from '../../Assets/icons/index';
import { useHistory } from 'react-router-dom';

const CardNaver = ({ naver, openDetailModal, setModalDelete }) => {
  const history = useHistory();

  return (
    <CardWrapper>
      <ImgWrapper>
        <CardImg src={naver.url} onClick={openDetailModal}></CardImg>
      </ImgWrapper>
      <DescriptionWrapper>
        <DescriptionName>{naver.name}</DescriptionName>
        <DescriptionJob>{naver.job_role}</DescriptionJob>
        <Actions>
          <EditAction onClick={() => history.push('/edit-naver', naver)}>
            <Edit></Edit>
          </EditAction>
          <DeleteAction onClick={() => setModalDelete(true)}>
            <Delete></Delete>
          </DeleteAction>
        </Actions>
      </DescriptionWrapper>
    </CardWrapper>
  );
};

export default CardNaver;
