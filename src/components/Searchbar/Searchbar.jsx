import React, { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';
class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button className={css.searchForm_button} type="submit">
            <span className={css.searchForm_button_label}>Search</span>
          </button>
          <input
            className={css.searchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
