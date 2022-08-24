import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookfromServer } from '../redux/books/books';

const Book = ({
  author, title, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>
        By-
        {author}
      </p>
      <p>
        Category-
        {category}
      </p>
      <button type="button" onClick={() => dispatch(removeBookfromServer(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
