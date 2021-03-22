import React, { useState } from 'react';
import { ArrowArea, Container, HeaderNaver, Title } from './styles';
import { Arrow } from '../../Assets/icons/index';
import Header from '../../Components/Header';
import FormNaver from '../../Components/FormNaver';
import ModalInfo from '../../Components/ModalInfo';
import { editNaver } from '../../Services/naversService';
import { useHistory } from 'react-router-dom';

const EditNaver = (props) => {
  const [modalInfo, setModalInfo] = useState(false);
  const history = useHistory();

  const submitData = async (data) => {
    const res = await editNaver(data, props.location.state.id);
    if (res) setModalInfo(true);
    else console.log('Não foi possivel atualizar o cadastro');
  };

  return (
    <>
      {modalInfo && (
        <ModalInfo
          title="Naver Atualizado"
          text="Naver atualizado com sucesso"
          setModalInfo={setModalInfo}
        ></ModalInfo>
      )}
      <Header></Header>
      <Container>
        <HeaderNaver>
          <ArrowArea onClick={() => history.push('/')}>
            <Arrow></Arrow>
          </ArrowArea>
          <Title>Editar Naver</Title>
        </HeaderNaver>
        <FormNaver
          naver={props.location.state}
          setData={submitData}
        ></FormNaver>
      </Container>
    </>
  );
};

export default EditNaver;
