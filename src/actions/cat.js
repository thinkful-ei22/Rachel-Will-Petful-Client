
export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    return fetch('/cat').then(res => {
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
    type: FETCH_CAT_REQUEST,
    loading: true
});


export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
   
    type: FETCH_CAT_SUCCESS,
    cat,
    loading: false
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error,
    loading: false
});



export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    return fetch('/cat', { method: 'DELETE' }
    ).then(res => {
        //what does res not okay look like?
        if(!res.ok){
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(() =>
    dispatch(fetchCatRequest())
).catch(err => {
    dispatch(fetchCatError(err))
})
}




export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST,
    loading: true
});


export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
   
    type: FETCH_CAT_SUCCESS,
    loading: false
    
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
    type: ADOPT_CAT_ERROR,
    error,
    loading: false
});