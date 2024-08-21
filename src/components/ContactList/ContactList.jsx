import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';


export default function ContactList({contacts}) {
    return (
        <ul className={css.list}>
            {contacts.map(({id, name, number }) => (
                <li key={{id}} className={css.item} >
                <Contact  name={name}  number={number}/>
                </li>
            ))}
        </ul>
    );
}