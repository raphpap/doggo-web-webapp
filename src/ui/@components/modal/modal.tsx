// Vendor
import React from 'react';

// Theme
import theme from 'doggo/theme';

// Vendor Components
import Modal from 'react-responsive-modal';

// Css
const ModalCss = {
  closeIcon: {
    fill: theme.colors.white.transparent
  },
  modal: {
    backgroundColor: theme.colors.grey.grey60,
    paddingTop: `${theme.padding.unit * 5}px`
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
