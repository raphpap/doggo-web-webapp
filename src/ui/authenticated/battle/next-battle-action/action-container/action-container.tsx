// Vendor
import styled from 'react-emotion';

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  min-height: 100px;

  @media screen and (min-width: 480px) {
    height: 420px;
  }
`;

export default ActionContainer;
