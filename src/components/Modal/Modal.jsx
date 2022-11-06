import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { Overlay, ModalStyled } from './Modal.styled';
import { ContactDataUpdateForm } from 'components/ContactDataUpdateForm/ContactDataUpdateForm';
// =================================

export const Modal = ({ onCloseModal, updateContactId }) => {
  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [onCloseModal]);

  const handleModal = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <>
      <Overlay onClick={handleModal}>
        <ModalStyled>
          <ContactDataUpdateForm
            onCloseModal={onCloseModal}
            updateContactId={updateContactId}
          />
        </ModalStyled>
      </Overlay>
    </>
  );
};

Modal.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
