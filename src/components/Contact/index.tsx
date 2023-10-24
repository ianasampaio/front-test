import { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa'
import { Button, ButtonDiv, CancelButton, FormContainer, FormField, NewTitle, SubmitButton } from './styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { secondaryColor } from '../../config/colors';

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

const customInput = (
  <input
    type="text"
    className="custom-datepicker-input"
    style={{
      display: 'block',
      marginBottom: '20px',
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #e6e6e8',
      borderRadius: '10px',
      cursor: 'pointer',
    }}
  />
);
const PhoneInput = styled(InputMask)`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${secondaryColor};
  border-radius:10px;
`;

Modal.setAppElement('#root');

export const ContactAdd = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Faça algo com os dados do formulário, por exemplo, envie para um servidor
    };

    const clearForm = () => {
      setFormData({
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
       <NewTitle>Novo Contato</NewTitle>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <p>Nome:</p>
            <FormField
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
            <p>Email:</p>
            <FormField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <p>Telefone:</p>
            <PhoneInput
            type="phone"
            name="phone"
            placeholder="(__) _____-____"
            mask="(99) 99999-9999"
            maskChar="_"
            value={formData.phone}
            onChange={handlePhoneChange}
          />
            <p>Data de Nascimento:</p>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecione a data"
              customInput={customInput}
            />
            <ButtonDiv>
              <CancelButton onClick={clearForm}>Cancelar</CancelButton>
              <SubmitButton type="submit">Salvar</SubmitButton>
            </ButtonDiv>

          </FormContainer>
        </form>
      </Modal>
    </div>
  );
};
