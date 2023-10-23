import { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, ContactContainer } from './styled';
// import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const Contacts = () => {
  // toast.success('teste');

  interface Contact {
    id: number;
    name: string;
    // Adicione outras propriedades aqui, se necessário
  }

  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function getContacts() {
      const response = await axios.get('/contacts');
      const data = response.data as Contact[]; // Força o TypeScript a reconhecer o tipo
      console.log(data);
      setContacts(data);
    }

    getContacts();
  }, []);

  return (
    <>
    <Container>
      <div>
        <Title>Contacts</Title>

        <ContactContainer>
          {contacts.map(contact => (
            <div key={(String(contact.id))}>
              {contact.name}
            </div>
          ))}
        </ContactContainer>
      </div>
    </Container>
    </>
  );
};