import React, { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    imageQuery: '',
  };

  hendleSearchChange = event => {
    this.setState({ imageQuery: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.imageQuery.trim() === '') {
      Notiflix.Notify.failure('Please write what you want to find!');
      return;
    }
    this.props.onSubmit(this.state.imageQuery);
    this.setState({ imageQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.hendleSubmit} className={css.searchForm}>
          <button className={css.searchForm_button} type="submit">
            <span className={css.searchForm_button_label}>Search</span>
          </button>
          <input
            className={css.searchForm_input}
            type="text"
            autoFocus
            value={this.state.imageQuery}
            onChange={this.hendleSearchChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
