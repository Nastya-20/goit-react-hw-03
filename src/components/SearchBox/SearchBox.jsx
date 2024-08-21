import React from "react";
import css from '../SearchBox/SearchBox.module.css';

export default function SearchBox () {
    return (
        <div className={css.wrapper}>
            <label className={css.search}>Find contacts by name</label>
            <input className={css.find}></input>
        </div>
    );
}