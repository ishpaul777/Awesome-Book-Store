const CHECK_STATUS = 'BOOK_STORE/CATEGORIES/CHECK_STATUS';

const initialState = '';
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under construction...';
    }
    default: {
      return state;
    }
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
