let init = {
    categories: ['FOOD', 'ELECTRONICS'],
    active: 'FOOD'
}

export default (state = init, action) => {
    let { type, payload } = action;
    let { categories, active } = state
    console.log('in cate store', state);
    switch (type) {
        case 'SHOW':

            return { categories, active: payload };

        default:
            return {categories, active};
    }
}

export const choose = (name) => {
    console.log('in choose', name);
    return {
        payload: name,
        type: 'SHOW'
    }
}