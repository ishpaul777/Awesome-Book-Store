/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './redux/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// // LOGIC FOR PERCENTAGE
// const els = document.querySelectorAll('.progress--circle');
// console.log(els);
// els.forEach((el) => {
//   const options = {
//     percent: el.getAttribute('data-percent') || 25,
//     size: el.getAttribute('data-size') || 220,
//     lineWidth: el.getAttribute('data-line') || 15,
//     rotate: el.getAttribute('data-rotate') || 0,
//   };

//   const canvas = document.createElement('canvas');
//   canvas.classList.add('progress--span');
//   const span = document.createElement('span');
//   span.classList.add('progress--span');
//   span.textContent = `${options.percent}%`;
//   if (typeof (window.G_vmlCanvasManager) !== 'undefined') {
//     window.G_vmlCanvasManager.initElement(canvas);
//   }

//   const ctx = canvas.getContext('2d');
//   // eslint-disable-next-line no-multi-assign
//   canvas.width = canvas.height = options.size;

//   el.appendChild(span);
//   el.appendChild(canvas);

//   ctx.translate(options.size / 2, options.size / 2); // change center
//   ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//   // imd = ctx.getImageData(0, 0, 240, 240);
//   const radius = (options.size - options.lineWidth) / 2;

//   const drawCircle = function (color, lineWidth, percent) {
//     // eslint-disable-next-line no-param-reassign
//     percent = Math.min(Math.max(0, percent || 1), 1);
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
//     ctx.strokeStyle = color;
//     ctx.lineCap = 'round'; // butt, round or square
//     ctx.lineWidth = lineWidth;
//     ctx.stroke();
//   };

//   drawCircle('#efefef', options.lineWidth, 100 / 100);
//   drawCircle('#555555', options.lineWidth, options.percent / 100);
// });
