import { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../../contacts.json'; 

export default function App() {
    // Зчитування контактів з локального сховища або початкове значення
    const fetchInitialContacts = () => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    };

    const [contacts, setContacts] = useState(fetchInitialContacts);
    const [search, setSearch] = useState('');

    // Зберігання контактів в локальному сховищі при їх зміні
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) => { 
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };
    
    const deleteContact = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== contactId)
        );
    };

    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={search} onSearch={setSearch} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
    );
}


