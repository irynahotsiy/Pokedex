import styled from 'styled-components';
import {getTypeColor} from "./helpers";

export const Type = styled.div`
  background: linear-gradient(to top right, ${props => getTypeColor(props.type)[0]}, ${props => getTypeColor(props.type)[1]});
  padding: 5px 10px;
  margin: 0 2px;
  border-radius: 0.3rem;
  border: 1px solid ${props => getTypeColor(props.type)[0]};
`;


