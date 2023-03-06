import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
//called id=root from index.html
root.render(
  <React.StrictMode>
    <App />    
    
  </React.StrictMode>
);
//called app component from app.js
//render function says,  display app.js componenet inside root id
//then index.html converts all the elements of app.js to html type(jsx to html)



