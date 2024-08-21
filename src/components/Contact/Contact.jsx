import css from './Contact.module.css';

export default function Contact({ name, number }) {
    return (
        <div className={css.container}>
            <div className={css.wrap}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            </div>
            <button className={css.btn}>Delete</button>
        </div>
    );
}