import {API_BASE_URL} from '../config'; 

//console.log(API_BASE_URL, 'URL>>>>>>>');
export const fetchCat = () => dispatch => {
    console.log('Cat Action');
    dispatch(fetchCatRequest());
    return fetch(`${API_BASE_URL}/api/cat`).then(res => {
       // console.log()
        //what does res not okay look like?
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
    dispatch(fetchCatSuccess(data))
).catch(err => {
    dispatch(fetchCatError(err))
})
}



export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
    
});


export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
   
    type: FETCH_CAT_SUCCESS,
    data: cat
    
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
   
});



export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    return fetch(`${API_BASE_URL}/api/cat`, { method: 'DELETE' }
    ).then(res => {
        console.log(res);
        //what does res not okay look like?
        if(!res.ok){
            throw new Error(res.statusText);
        }
//just return -> no json because nothing sent except error message
        return;
    }).then(() =>
    {console.log('about to fetch from adopt promise')
    dispatch(fetchCat())}
).catch(err => {
    console.log(err);
    dispatch(fetchCatError(err))
})
}




export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST
   
});


export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
   
    type: FETCH_CAT_SUCCESS
   
    
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
    type: ADOPT_CAT_ERROR,
    error

});