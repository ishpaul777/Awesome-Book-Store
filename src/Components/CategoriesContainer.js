import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Navbar from './Navbar';
import { checkStatus } from '../redux/categories/categories';

const CategoriesContainer = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categoriesContainer">
      <Navbar />
      <button
        style={{ margin: '0 45vw' }}
        type="button"
        className="btn submit--btn"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <h2 style={{ textAlign: 'center', margin: '20px', color: '#0290ff' }}>{state || null}</h2>
    </div>
  );
};

export default CategoriesContainer;
