import {  FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR,
    ADOPT_CAT_REQUEST,  ADOPT_CAT_ERROR } from '../actions';
 //import  { FETCH_CAT_ERROR }  from '../actions';
 
 
  
  const cat1 = {
     imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
     imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
     name: 'Fluffy',
     sex: 'Female',
     age: 2,
     breed: 'Bengal',
     story: 'Thrown on the street'
   };
 
  // console.log(cat1);
  
 const initialState = {
     loading: false,
     data: null,
     error: null
 }
 //console.log(initialState);
 
 export const catReducer = (state=initialState, action) => {
     if( action.type===FETCH_CAT_REQUEST){
         return Object.assign({}, state, {
             loading: true
         })
     } else if( action.type===FETCH_CAT_SUCCESS){
         return Object.assign({}, state, {
             loading: false,
             data: action.data
         })
     } else if( action.type===FETCH_CAT_ERROR){
         return Object.assign({}, state, {
             loading: false,
             error: action.error
         })
     } else if( action.type===ADOPT_CAT_REQUEST){
         return Object.assign({}, state, {
             loading: true
            
         })
     }  else if( action.type===ADOPT_CAT_ERROR){
         return Object.assign({}, state, {
             loading: false
            
         })
     } return state;
 
 };
 
 