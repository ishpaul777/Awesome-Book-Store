import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <div>
    <h3>{title}</h3>
    <p>{author}</p>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
