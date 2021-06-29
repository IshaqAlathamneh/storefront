let food = [{
    item: 'Apples',
    description: 'fruit',
    price: 5,
    category: 'FOOD',
    inventory: 5,
    image: 'https://source.unsplash.com/random?Apples'
}, {
    item: 'Calzones',
    description: 'Fast Food',
    price: 20,
    category: 'FOOD',
    inventory: 30,
    image: 'https://source.unsplash.com/random?Calzones'
}]
let elec = [{
    item: 'Keyboard',
    description: 'Mechanical',
    price: 20,
    category: 'ELECTRONICS',
    inventory: 30,
    image: 'https://source.unsplash.com/random?Keyboard'
},
{
    item: 'TV',
    description: 'Secreen',
    price: 150,
    category: 'ELECTRONICS',
    inventory: 10,
    image: 'https://source.unsplash.com/random?TV'
},
{
    item: 'Mouse',
    description: 'Red Dragon',
    price: 20,
    category: 'ELECTRONICS',
    inventory: 3,
    image: 'https://source.unsplash.com/random?Mouse'
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
                return item.category.toUpperCase() == payload && item.inventory >0;
            })
            return{products, show: showw, active: payload};
        case 'ADD':
            let newEdit = products.map(el => {
                if (el.item === payload.item) {
                    el.inventory--
                    console.log('in prod reduer add type', el);
                }
                return el;
            })
            let show2 = show.filter(item=>{
                return item.inventory >0;
            })
            return {products: newEdit, show: show2, active}
        case "DELETE":
            console.log('in the delete',payload);
            let newProd = products.map(el => {
                if (el.item == payload.item) {
                    let inv = init.products.filter(x => x.item == payload.item)
                    console.log('asdasdasd',inv);
                    el.inventory++
                }
                return el;
            })
            let showw3= newProd.filter(item=>{
                return item.category == active && item.inventory >0;
            })
            console.log('in the delete',newProd);
            return {products: [...newProd], show: showw3, active}
        case 'GET':
            let arr = [...products, ...payload]
            return {
                products: arr,
                show,
                active
            }
        case 'PUT':
            let arr2 = products.map(el => {
                if(el.item == payload.item){
                    return {...el, ...payload}
                }
                return el;
            })
            return { products: arr2, show, active}
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