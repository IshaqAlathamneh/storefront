import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/products';

export const getRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
   return superagent.get(api).then(res=> {
        dispatch(getAction(res.body));
    });
}

export const putRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
   return superagent.put(api).send({inventory: state.inventory++}).then(res=> {
        dispatch(putAction(res.body));
    });
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}