// Vendor
import styled from 'react-emotion';

export const ActionContainer = styled.button`
  width: 160px;
  height: 160px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 60px 0;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export const CardContainer = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
`;

export const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export const CardSelectionButton = styled.button`
  width: 400px;
  height: 80px;
  border: 1px solid #fff;
  margin-top: 16px;
  background-color: transparent;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

export const ModalCss = {
  closeIcon: {
    fill: 'rgba(255, 255, 255, 0.8)'
  },
  modal: {
    backgroundColor: '#171820',
    paddingTop: '40px'
  }
};
