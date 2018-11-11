// Vendor
import React from 'react';

// Vendor Components
import Modal from 'react-responsive-modal';

// Css
const ModalCss = {
  closeIcon: {
    fill: 'rgba(255, 255, 255, 0.8)'
  },
  modal: {
    backgroundColor: '#171820',
    paddingTop: '40px'
  }
};

// Types
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalComponent: React.SFC<Props> = ({
  children,
  onClose,
  isOpen
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} styles={ModalCss} center>
      {children}
    </Modal>
  );
};

export default ModalComponent;
