import React from 'react';
import { ButtomArea, ContainerForm } from './styles';
import useForm from '../../Hooks/useForm';
import InputForm from '../Input';
import Button from '../Button';
import moment from 'moment';

const FormNaver = ({ naver, setData }) => {
  const name = useForm(naver ? naver.name : '');
  const job_role = useForm(naver ? naver.job_role : '');
  const birthdate = useForm(
    naver ? moment(naver.birthdate).format('DD/MM/YYYY') : '',
    'date',
  );
  const admission_date = useForm(
    naver ? moment(naver.admission_date).format('DD/MM/YYYY') : '',
    'date',
  );
  const project = useForm(naver ? naver.project : '');
  const url = useForm(naver ? naver.url : '');

  const data = {
    name: name.value,
    job_role: job_role.value,
    birthdate: birthdate.value,
    admission_date: admission_date.value,
    project: project.value,
    url: url.value,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      name.validate() &&
      job_role.validate() &&
      birthdate.validate() &&
      admission_date.validate() &&
      project.validate() &&
      url.validate()
    ) {
      setData(data);
    }
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <InputForm
        label="Nome"
        type="text"
        placeholder="Nome"
        {...name}
      ></InputForm>
      <InputForm
        label="Cargo"
        type="text"
        placeholder="Cargo"
        {...job_role}
      ></InputForm>
      <InputForm
        label="Data de nascimento"
        type="text"
        placeholder="Data de nascimento"
        {...birthdate}
      ></InputForm>
      <InputForm
        label="Data de admissão"
        type="text"
        placeholder="Data de admissão"
        {...admission_date}
      ></InputForm>
      <InputForm
        label="Projetos que participou"
        type="text"
        placeholder="Projetos que participou"
        {...project}
      ></InputForm>
      <InputForm
        label="URL da foto do Naver"
        type="text"
        placeholder="URL da foto do Naver"
        {...url}
      ></InputForm>
      <div></div>
      <ButtomArea>
        <Button>Salvar</Button>
      </ButtomArea>
    </ContainerForm>
  );
};

export default FormNaver;
