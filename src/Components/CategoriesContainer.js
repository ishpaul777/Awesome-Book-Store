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
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h2>{state || null }</h2>
    </div>
  );
};

export default CategoriesContainer;
