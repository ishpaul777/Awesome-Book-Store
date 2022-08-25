import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import ChangingProgressProvider from './ChangingProgressProvider';
import { removeBookfromServer } from '../redux/books/books';
import '../styles/Book.css';

const Book = ({
  author,
  title,
  id,
  category,
  currentChapter,
  totalChapter,
}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const percentageRead = Math.floor(
    (parseInt(currentChapter, 10) / parseInt(totalChapter, 10)) * 100,
  );

  return (
    <div className="book--panel">
      <div className="book--info">
        <p className="book--category">{category}</p>
        <h3 className="book--name">{title}</h3>
        <p className="author--name">
          -
          {' '}
          {author}
        </p>
        <div className="btn--container">
          <button type="button" className="btn notes">
            Notes
          </button>
          <button
            type="button"
            className="btn remove"
            onClick={() => dispatch(removeBookfromServer(id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="reading--progress">
        <div className="progress--bar">
          <div className="progress--circle">
            <CircularProgressbar
              value={percentageRead}
              // text={}
              styles={buildStyles({
                textColor: '#121212',
                pathColor: 'linear-gradient(to bottom, #307bbe, #379cf6)',
              })}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4>
              {`${percentageRead}%`}
            </h4>
            <span className="Completed Text-Style-2">Completed</span>
          </div>
        </div>
        <div className="progress--info">
          <p className="current--chapter--head">Current Chapter</p>
          <p className="current--chapter">
            Chapter
            {' '}
            {currentChapter}
          </p>
          <button type="button" className="btn update--progress">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
  totalChapter: PropTypes.string.isRequired,
};

export default Book;
