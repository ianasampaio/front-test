import { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa'
import { Button } from './styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Certifique-se de definir o elemento raiz do aplicativo.

export const ContactAdd = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Você pode adicionar lógica para o modal aqui se necessário.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal}>
        <FaPlus size={10} color="#000"/> Novo
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>Tab navigation</button>
          <button>Stays</button>
          <button>Inside</button>
          <button>The modal</button>
        </form>
      </Modal>
    </div>
  );
};
