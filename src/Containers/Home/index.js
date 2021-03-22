import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button/index.js';
import CardNaver from '../../Components/CardNaver/index.js';
import { getNavers } from '../../Services/naversService.js';
import {
  HomeContainer,
  NaversHeader,
  HeaderTitle,
  ContainerCards,
} from './styles';
import ModalDetail from '../../Components/ModalDetail';
import ModalDelete from '../../Components/ModalDelete';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';

const Home = () => {
  const token = window.localStorage.getItem('token');
  const [naver, setNaver] = useState(null);
  const [navers, setNavers] = useState([]);
  const [modalDetail, setModalDetail] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchNavers() {
      const res = await getNavers(token);
      setNavers(res);
    }
    fetchNavers();
  }, [token]);

  const openDetailModal = (naver) => {
    setNaver(naver);
    setModalDetail(true);
  };
  const closeModalDetail = () => {
    setModalDetail(false);
  };
  const closeModalDelete = () => {
    setModalDelete(false);
  };
  const selectNaverDelete = (naver) => {
    setNaver(naver);
    setModalDelete(true);
  };

  return (
    <div>
      {modalDetail && (
        <ModalDetail
          naver={naver}
          setModal={setModalDetail}
          setModalDelete={setModalDelete}
        ></ModalDetail>
      )}
      {modalDelete && (
        <ModalDelete
          naver={naver}
          setModalDelete={closeModalDelete}
          setModal={closeModalDetail}
        ></ModalDelete>
      )}
      <Header></Header>
      <HomeContainer>
        <NaversHeader>
          <HeaderTitle>Navers</HeaderTitle>
          <div>
            <Button onclick={() => history.push('create-naver')}>
              Adicionar Naver
            </Button>
          </div>
        </NaversHeader>
        <ContainerCards>
          {navers.map((naver) => (
            <CardNaver
              naver={naver}
              key={naver.id}
              openDetailModal={() => openDetailModal(naver)}
              setModalDelete={() => selectNaverDelete(naver)}
            ></CardNaver>
          ))}
        </ContainerCards>
      </HomeContainer>
    </div>
  );
};

export default Home;
