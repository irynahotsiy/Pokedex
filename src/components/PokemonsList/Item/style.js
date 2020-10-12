import styled from 'styled-components';

export const ElContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d0e7fd;
  padding: 10px 0 50px 0;
  margin: 10px;
  &:hover{
    background: #edf7ff;
    cursor: pointer;
  }
`

export const ImageContainer = styled.div`
 padding: 20px;
`

export const Title = styled.h4`
  margin: 0;
  padding: 0 0 10px 0;
  color: #3aa1f4;
`

export const TypesContainer = styled.div`
  display: flex;
`