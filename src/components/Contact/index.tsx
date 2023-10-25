import { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa'
import { Button, ButtonDiv, CancelButton, ErrorMessage, FormContainer, FormField, NewTitle, SubmitButton } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import { secondaryColor } from '../../config/colors';
import validator from "validator";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Control, Controller, useForm } from "react-hook-form";




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

// const customInput = (
//   <input
//     type="text"
//     className="custom-datepicker-input"
//     style={{
//       display: 'block',
//       marginBottom: '20px',
//       width: '100%',
//       padding: '10px',
//       fontSize: '16px',
//       border: '1px solid #e6e6e8',
//       borderRadius: '10px',
//       cursor: 'pointer',
//     }}
//   />
// );


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
interface RHFDatePickerFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}

const RHFDatePickerField = (props: RHFDatePickerFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required"
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <DatePicker
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              format="DD-MM-YYYY"
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
            />
            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export const ContactAdd = () => {
    const { control } = useForm<{
      startDate: string;
      endDate: string;
    }>();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      birthDate: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValidationMessage, setEmailValidationMessage] = useState('');


    const [isNameFilled, setIsNameFilled] = useState(false);
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isPhoneFilled, setIsPhoneFilled] = useState(false);
    const [isBirthDateFilled, setIsBirthDateFilled] = useState(false);



    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
      setIsOpen(false);
    }

    const validateEmail = (email: string) => {
      if (validator.isEmail(email)) {
        setEmailValidationMessage("");
      } else {
        // FormField.style = {{ border: '1px solid red', backgroundColor: 'lightpink' }}
        setEmailValidationMessage("Please, enter a valid Email!");
      }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      if (name === 'name') {
        setIsNameFilled(!!value);
      } else if (name === 'email') {
        setIsEmailFilled(!!value);
      } else if (name === 'phone') {
        setIsPhoneFilled(!!value);
      } else if (name === 'birthDate') {
        setIsBirthDateFilled(!!value);
      }

    };


    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Verifique se todos os campos obrigatórios estão preenchidos
      if (isNameFilled && isEmailFilled && isPhoneFilled && isBirthDateFilled) {
        // Faça algo com os dados do formulário, por exemplo, envie para um servidor
        setErrorMessage(''); // Limpa a mensagem de erro
        closeModal(); // Fecha o modal após envio bem-sucedido
      } else {
        setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
        closeModal();
      }
    };

    const clearForm = () => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
      });
      closeModal();
      setErrorMessage('');
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
       {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <p>Nome:</p>
            <FormField
              required
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
              onChange={(e) => {
                handleChange(e);
                validateEmail(e.target.value);
              }}
              style={{
                border: formData.email && !validator.isEmail(formData.email) ? '1px solid red' : '1px solid #e6e6e8',
              }}
            />
            {emailValidationMessage && <ErrorMessage>{emailValidationMessage}</ErrorMessage>}
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
            <RHFDatePickerField
            placeholder="Selecione a data"
            control={control}
            name="birthDate"
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
