import initialContacts from '../../contacts.json';
import 'react-dom';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';



export default function App() {
    const [contacts, setContacts] = useState(initialContacts);

    const addContact = (newContact) => { 
        setContacts((prevContacts) => {
            return [...prevContacts, newContact];
        });
    };
    return (
        <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addContact} />
        <SearchBox />
        <ContactList contacts={contacts} />
       </div>
    );
}
