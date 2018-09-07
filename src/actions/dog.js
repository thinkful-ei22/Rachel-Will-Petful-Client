
import {API_BASE_URL} from '../config'; 

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    //GET redundant?
    return fetch(`${API_BASE_URL}/api/dog`, {method: 'GET' }).then(res => {
        //what does res not okay look like?
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
    dispatch(fetchDogSuccess(data))
).catch(err => {
    dispatch(fetchDogError(err))
})
}


export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST,
    loading: true
});


export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
   
    type: FETCH_DOG_SUCCESS,
    dog,
    loading: false
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error,
    loading: false
});



export const adoptDog = () => dispatch => {
    dispatch(adoptDogRequest());
    return fetch(`${API_BASE_URL}/api/dog`, {method: 'DELETE' }
).then(res => {
        //what does res not okay look like?
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(() =>
    dispatch(fetchDogRequest())
).catch(err => {
    dispatch(adoptDogError(err))
})
}


export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST,
    loading: true
});


// export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
// export const adoptDogSuccess = () => ({
   
//     type: ADOPT_DOG_SUCCESS,
    
// });

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
    type: ADOPT_DOG_ERROR,
    error,
    loading: false
});