import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Heading from 'components/Heading/Heading';
const ContactsPage = function () {
  return (
    <div>
      <Heading text='Contacts' />
      <ContactsForm />
      <Heading tag='h2' text='Contacts List' />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
