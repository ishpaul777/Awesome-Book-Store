import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from './api';

const SET_BOOKS = 'BOOK_STORE/BOOKS/SET_BOOK';
const ADD_BOOK = 'BOOK_STORE/BOOKS/ADD_BOOK';
const REMOVE_BOOK = 'BOOK_STORE/BOOKS/REMOVE_BOOK';

const books = [];
export default function bookReducer(state = books, action) {
  switch (action.type) {
    case `${SET_BOOKS}/fulfilled`: {
      return action.payload;
    }
    case `${ADD_BOOK}/fulfilled`: {
      return [...state, action.payload];
    }
    case `${REMOVE_BOOK}/fulfilled`: {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export const addBookToServer = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
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
    return book;
  },
);

export const getBooksFromServer = createAsyncThunk(
  SET_BOOKS,
  async () => {
    const response = await fetch(`${baseUrl}books`).then((response) => response.json());
    const books = [];
    const booksIds = Object.keys(response);
    booksIds.map((key) => books.push({
      id: key,
      title: response[key][0].title,
      author: response[key][0].author,
      category: response[key][0].category,
    }));
    const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
    return sortedBooks;
  },
);

export const removeBookfromServer = createAsyncThunk(
  REMOVE_BOOK,
  async (bookId) => {
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
    return bookId;
  },
);
