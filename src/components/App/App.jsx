import 'react';
import 'react-dom';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import contacts from '../../contacts.json';
import { nanoid } from 'nanoid';


export default function App() {
    return (
        <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
       </div>
    );
}
