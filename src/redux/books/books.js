import baseUrl from './api';

const SET_BOOKS = 'BOOK_STORE/BOOKS/SET_BOOK';
const ADD_BOOK = 'BOOK_STORE/BOOKS/ADD_BOOK';
const REMOVE_BOOK = 'BOOK_STORE/BOOKS/REMOVE_BOOK';

const books = [];
export default function bookReducer(state = books, action) {
  switch (action.type) {
    case SET_BOOKS: {
      return action.books;
    }
    case ADD_BOOK: {
      return [...state, action.book];
    }
    case REMOVE_BOOK: {
      const newState = state.filter((book) => book.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export const SetBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

export const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBookToServer = (book) => async (dispatch) => {
  dispatch(AddBook(book));
  const param = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),

  };
  await fetch(`${baseUrl}books`, param);
};

export const getBooksFromServer = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}books`).then((response) => response.json());
  const books = [];
  const booksIds = Object.keys(response);
  booksIds.map((key) => books.push({
    id: key,
    title: response[key][0].title,
    author: response[key][0].author,
    category: response[key][0].category,
  }));
  dispatch(SetBooks(books));
};

export const removeBookfromServer = (bookId) => async (dispatch) => {
  dispatch(RemoveBook(bookId));
  const param = {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: bookId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  await fetch(`${baseUrl}books/${bookId}`, param);
};
