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
        case 'GET':
            let arr = categories;
            payload.forEach(element => {
                let text = element.category.toUpperCase()
                if(!categories.includes(text)) arr.push(text)
            });
            return {categories:arr, active}
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