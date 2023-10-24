import { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa'
import { Button, FormContainer, FormField, SubmitButton } from './styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '1px solid #cfcfd0',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

export const ContactAdd = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      email: '',
      phone: '',
      birthDate: '',
    });

    const [selectedDate, setSelectedDate] = useState(new Date());


    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
      setIsOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date: Date) => {
      // Converte a data para o formato desejado (por exemplo, string)
      // e atualiza o estado do formulário
      const formattedDate = date.toLocaleDateString('pt-BR'); // Altere o local se necessário
      setFormData({ ...formData, birthDate: formattedDate });
      setSelectedDate(date); // Atualiza a data no date picker
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Faça algo com os dados do formulário, por exemplo, envie para um servidor
    };

    const clearForm = () => {
      setFormData({
        id: '',
        name: '',
        email: '',
        phone: '',
        birthDate: '',
      });
      closeModal(); // Feche o modal após limpar o formulário
    };

  return (
    <div>
    <Button onClick={openModal}>
      <FaPlus size={10} color="#000" /> Novo
    </Button>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
       <h2>Novo Contato</h2>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <FormField
              type="number"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
            />
            <FormField
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormField
              type="text"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecione a data"
            />
            <SubmitButton type="submit">Salvar</SubmitButton>
            <button onClick={clearForm}>Cancelar</button>
          </FormContainer>
        </form>
      </Modal>
    </div>
  );
};
