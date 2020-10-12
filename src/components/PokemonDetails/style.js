import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #b3e0f514;
`
export const DetailsBox = styled.div`

  border: 1px solid #b8d8f7;
  width: 80%;
  padding: 10px;
`

export const Table = styled.table`
  width: 100%;
  tr, td {
    border: 1px solid #b8d8f7;
  };
  td {
    padding: 5px 0;
    font-size: 0.9rem;
  }
  border-collapse: collapse;
`
export const Title = styled.h3`
  margin: 0;
  padding: 5px 0;
  letter-spacing: 0.1rem;
  color: #2196F3;
`

export const NoDataMessage = styled.h3`
  padding: 10px;
  line-height: 2rem;
  color: #2196f3;
`
export const Type = styled.span`
  color: ${props => props.color[0]};
`
