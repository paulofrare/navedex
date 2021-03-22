import React, { useState } from 'react';
import { ArrowArea, Container, HeaderNaver, Title } from './styles';
import { Arrow } from '../../Assets/icons/index';
import Header from '../../Components/Header';
import FormNaver from '../../Components/FormNaver';
import ModalInfo from '../../Components/ModalInfo';
import { createNaver } from '../../Services/naversService';
import { useHistory } from 'react-router-dom';

const CreateNaver = () => {
  const [modalInfo, setModalInfo] = useState(false);
  const history = useHistory();

  const submitData = async (data) => {
    const res = await createNaver(data);
    if (res) setModalInfo(true);
    else console.log('Não foi possivel criar o cadastro');
  };

  return (
    <>
      {modalInfo && (
        <ModalInfo
          title="Naver criado"
          text="Naver criado com sucesso"
          setModalInfo={setModalInfo}
        ></ModalInfo>
      )}
      <Header></Header>
      <Container>
        <HeaderNaver>
          <ArrowArea onClick={() => history.push('/')}>
            <Arrow></Arrow>
          </ArrowArea>
          <Title>Adicionar Naver</Title>
        </HeaderNaver>
        <FormNaver setData={submitData}></FormNaver>
      </Container>
    </>
  );
};

export default CreateNaver;
