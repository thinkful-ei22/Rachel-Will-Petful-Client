import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { store } from './store';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';
// import { combineReducers  } from 'redux';
// import { catReducer } from './reducers/cat';
// import { dogReducer } from './reducers/dog';
import { Provider } from 'react-redux';



const dog1 = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  
  const cat1 = {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };

  ReactDOM.render(

    <Provider store={store}>
        <Dashboard dogToAdopt={{ 
             imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
                imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
                name: 'Zeus',
             sex: 'Male',
             age: 3,
             breed: 'Golden Retriever',
                 story: 'Owner Passed away'
                 }} catToAdopt={cat1} />
      </Provider>,
    
       document.getElementById('root'));
    registerServiceWorker();
    