let food = [{
    name: 'Apples',
    description: 'fruit',
    price: 5,
    category: 'FOOD',
    inventoryCount: 5,
    src: 'https://source.unsplash.com/random?Apples'
}, {
    name: 'Calzones',
    description: 'Fast Food',
    price: 20,
    category: 'FOOD',
    inventoryCount: 30,
    src: 'https://source.unsplash.com/random?Calzones'
}]
let elec = [{
    name: 'Keyboard',
    description: 'Mechanical',
    price: 20,
    category: 'ELECTRONICS',
    inventoryCount: 30,
    src: 'https://source.unsplash.com/random?Keyboard'
},
{
    name: 'TV',
    description: 'Secreen',
    price: 150,
    category: 'ELECTRONICS',
    inventoryCount: 10,
    src: 'https://source.unsplash.com/random?TV'
},
{
    name: 'Mouse',
    description: 'Red Dragon',
    price: 20,
    category: 'ELECTRONICS',
    inventoryCount: 3,
    src: 'https://source.unsplash.com/random?Mouse'
}]
let init = {
    products: [...food, ...elec],
    show: [...food],
    active: 'FOOD'
}
export default (state = init, action) => {
    let {type, payload} = action;
    let {products, active} = state;
    console.log('in prof store');

    switch (type) {
        case 'SHOW':
            let show = products.filter(item=>{
                return item.category == payload;
            })
            return{products, show, active: payload};
    
        default:
            return state;
    }
}
// export const filter = (name) => {
//     console.log('in filter', name);
//     return{
//         type: 'SHOW',
//         payload: name
//     }
// }