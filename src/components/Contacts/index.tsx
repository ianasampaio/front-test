import { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { Title, ContactContainer, Contact, Image, FlexContainer, DivInFlexContainer } from './styled';
import { FaEdit, FaTrash } from 'react-icons/fa'
// import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const Contacts = () => {
  // toast.success('teste');

  interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
  }

  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function getContacts() {
      const response = await axios.get('/contacts');
      const data = response.data as Contact[];
      console.log(data);
      setContacts(data);
    }

    getContacts();
  }, []);

  return (
    <>
    <Container>
      <div>
        <Title>Agenda de Contatos</Title>

        <ContactContainer>
          {contacts.map(contact => (
            <FlexContainer>
              <Image>

              </Image>
              <Contact key={(String(contact.id))}>
                <ul><strong>Nome: </strong>{contact.name}</ul>
                <ul><strong>Email: </strong>{contact.email}</ul>
                <ul><strong>Telefone: </strong>{formatPhoneNumber(contact.phone)}</ul>
                <ul><strong>Data de Nascimento: </strong>{formatDate(contact.birthDate)}</ul>
              </Contact>


              <DivInFlexContainer>
                <Link className="CustomLink" to={`/contacts/${contact.id}`}>
                  <FaEdit size={16} color="#000" />
                </Link>

                <Link to={`/contacts/${contact.id}`}>
                  <FaTrash size={16} color="#f5365c" />
                </Link>
              </DivInFlexContainer>

            </FlexContainer>
          ))}
        </ContactContainer>
      </div>
    </Container>
    </>
  );
};

function formatDate(dateString: string) {
  const dateParts = dateString.split("-");
  return dateParts.join("/");
}

function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length !== 11) {
    return 'Número de telefone inválido';
  }
  const formattedNumber = `(${phoneNumber.substring(0, 2)}) 9 ${phoneNumber.substring(2, 7)} ${phoneNumber.substring(7)}`;
  return formattedNumber;
}