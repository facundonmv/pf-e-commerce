
const initialState={
    product:[],
    product_copy: [],
    category:[],
    productosFiltrados: []
}


function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_PRODUCT" :
            return{
                ...state,
                product: action.payload,
                productosFiltrados: action.payload 
            }
        case "GET_CATEGORIES":
            return {
                ...state,
                category: action.payload
            }
            
        case "FILTRO":
            const products = state.product_copy
            const filtro = action.payload === '' ? products : products.filter(p => {
                if(p.category === action.payload){
                    return p
                }
            })
            return{
                ...state,
                product: filtro
            }
        case "ordenAZ":
            let productosAZ = []
            let order = action.payload;
            
            if(order === ''){
                productosAZ = state.product.sort(function(a, b){
                    if(a.name.length > b.name.length) return 1
                    if(a.name.length < b.name.length) return -1
                    return 0
                })
            }
            if(order === 'Asc'){
                productosAZ = state.product.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    return 0
                })
            }
            if(order === 'Desc'){
                productosAZ = state.product.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    return 0
                })
            }
            return ({
                ...state,
                product: [...productosAZ]
        })
        case "BUSQUEDA":
                let filtroPorNombre = state.productosFiltrados.filter((e) => {
                    return (e.name.toUpperCase().includes(action.payload.toUpperCase()))
                });
    
                return {
                    ...state,
                    productosFiltrados: filtroPorNombre
                }
        case "POST_PRODUCT":
                return{
                    ...state
                }
    
        default:
            return state
    }

}

export default rootReducer;