import { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import { Title, ContactContainer, Contact, Image, FlexContainer, DivInFlexContainer, SubmitButton, CancelButton, Subtitle } from './styled';
import { FaEdit, FaTrash } from 'react-icons/fa'
import axios from '../../services/axios';
import Modal from 'react-modal';
import { ContactAdd } from '../Contact';
import { ButtonDiv } from '../Contact/styled';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const deleteStyle = {
  content: {
    width:'400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    border: '1px solid #cfcfd0',
    borderRadius: '10px',
    padding: '30px',
  },
};

Modal.setAppElement('#root');

export const Contacts = () => {
  // toast.success('teste');

  const navigate = useNavigate();

  interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
  }

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [totalContacts, setTotalContacts] = useState(0);

  useEffect(() => {
    async function getContacts() {
      const response = await axios.get('/contacts');
      const data = response.data as Contact[];
      const sortedContacts = data.sort((a, b) => a.name.localeCompare(b.name));
      setContacts(sortedContacts);
      setTotalContacts(sortedContacts.length);
    }
    getContacts();
  }, []);

  const handleDeleteAsk = (contact: Contact) => {
    setContactToDelete(contact);
    setModalIsOpen(true);
  };

  const handleconfirmDelete = (contactId: number)=> {
    axios.delete(`/contacts/${contactId}`)
      .then((response) => {
        console.log("Contato excluído com sucesso", response);
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
        setModalIsOpen(false);
        navigate('/contacts');
      })
      .catch((error) => {
        console.error("Erro ao excluir o contato", error);
      });
  };


  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/contacts');
  };

  return (
    <>
    <Container>
      <div>
        <Title>Agenda de Contatos</Title>

        <Subtitle>
          <h3>Contatos cadastrados: {totalContacts}</h3>
          <ContactAdd></ContactAdd>
        </Subtitle>

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

                <Link onClick={() => handleDeleteAsk(contact)}to={`/contacts/${contact.id}`}>
                  <FaTrash size={16} color="#f5365c" />
                </Link>
              </DivInFlexContainer>

            </FlexContainer>
          ))}
        </ContactContainer>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={deleteStyle}
        >
          <p>Tem certeza de que deseja excluir o contato:</p>
          <p><strong>{contactToDelete && contactToDelete.name}</strong></p>
          <ButtonDiv>
            <CancelButton onClick={closeModal}>Cancelar</CancelButton>
            <SubmitButton onClick={() => contactToDelete?.id && handleconfirmDelete(contactToDelete.id)}>Confirmar</SubmitButton>
          </ButtonDiv>
        </Modal>

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