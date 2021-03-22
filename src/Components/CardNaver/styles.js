import styled from 'styled-components';

const CardWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;
const CardImg = styled.img`
  width: 100%;
`;
const ImgWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 70%;
`;
const DescriptionWrapper = styled.div`
  margin-top: 15px;
`;
const DescriptionName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
const DescriptionJob = styled.div`
  margin-top: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;
const Actions = styled.div`
  margin-top: 7px;
  display: flex;
`;
const DeleteAction = styled.div`
  cursor: pointer;
`;

const EditAction = styled.div`
  margin-right: 7px;
  cursor: pointer;
`;

export {
  CardWrapper,
  CardImg,
  ImgWrapper,
  DescriptionWrapper,
  DescriptionName,
  DescriptionJob,
  Actions,
  DeleteAction,
  EditAction,
};
