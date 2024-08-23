import React from "react";
import css from '../SearchBox/SearchBox.module.css';

export default function SearchBox ({ value, onSearch}) {
    return (
        <div className={css.wrapper}>
            <p className={css.search}>Find contacts by name</p>
            <input className={css.find} type="text" value={value} onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}