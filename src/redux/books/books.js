const ADD_BOOK = 'BOOK_STORE/BOOKS/ADD_BOOK';
const REMOVE_BOOK = 'BOOK_STORE/BOOKS/REMOVE_BOOK';

const books = [];
export default function bookReducer(state = books, action) {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.book];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

export const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});
