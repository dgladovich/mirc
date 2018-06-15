

const URL = 'http://localhost:5000/controllers';

export const fetchControllers = ()=> (dispatch, getState) => {
    return fetch(URL)
        .then((data)=>{
            console.log('fetched controllers list')
        })
        .catch((e)=>{
            console.log(e)
        })

};