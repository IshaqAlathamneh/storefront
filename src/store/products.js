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
    let {products, show, active} = state;
    console.log('in prof store', products);

    switch (type) {
        case 'SHOW':
            let showw = products.filter(item=>{
                return item.category == payload && item.inventoryCount >0;
            })
            return{products, show: showw, active: payload};
        case 'ADD':
            let newEdit = products.map(el => {
                if (el.name === payload.name) {
                    el.inventoryCount--
                    console.log('in prod reduer add type', el);
                }
                return el;
            })
            let show2 = show.filter(item=>{
                return item.inventoryCount >0;
            })
            return {products: newEdit, show: show2, active}
        case "DELETE":
            console.log('in the delete',payload);
            let newProd = products.map(el => {
                if (el.name == payload.name) {
                    let inv = init.products.filter(x => x.name == payload.name)
                    console.log('asdasdasd',inv);
                    el.inventoryCount++
                }
                return el;
            })
            let showw3= newProd.filter(item=>{
                return item.category == active && item.inventoryCount >0;
            })
            console.log('in the delete',newProd);
            return {products: [...newProd], show: showw3, active}
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