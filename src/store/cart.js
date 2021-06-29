let init = [{
    item: 'Apples',
    description: 'fruit',
    price: 5,
    category: 'FOOD',
    inventory: 5,
    image: 'https://source.unsplash.com/random?Apples',
    quantity: 1
}]

export default ( state = init, action) =>{
    let {type, payload} = action;

    switch (type) {
        case "ADD":
            let checked = false;
            state.forEach(x => {
                if (x.item == payload.item) {
                    checked = true;
                }
            })
            if(checked){
                console.log('in checked');
                return state.map(el => {
                    if (el.item == payload.item) {
                        el.quantity +=1
                    }
                    return el
                })
            } 
            console.log('out checked');
            let arr = [...state, {...payload, quantity: 1}]
            return arr;
        case "DELETE":
            let ids = false;
            let newState = state.map(el => {
                if (el.item == payload.item) {
                    el.quantity--
                    if (el.quantity == 0) {
                        ids = true;
                    }
                }
                return el;
            })
            if (ids) {
                return state.filter(ele => ele.item != payload.item)
            }
            console.log('---', payload.quantity);
            return newState;
    
        default:
            return state;
    }
}

export const add = (payload) => {
    return{
        type: 'ADD',
        payload
    }
}

export const remove = (payload) => {
    return{
        type: 'DELETE',
        payload
    }
}