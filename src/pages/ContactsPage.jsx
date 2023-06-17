import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
const ContactsPage = function () {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
