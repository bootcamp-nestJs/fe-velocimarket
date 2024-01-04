import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

interface ProductoCarrito {
    id: number;
    nombre: string;
    precio: number;
    avatarVendedor: string;
    ubicacionVendedor: string;
    imgProducto: string;
    descripcion: string;

}
interface CarritoState {
    id: number;
    productos: ProductoCarrito []; 
    total: number;
    valorEnvio: number;
    metodoPago: string;
}

const defaultInitialState: CarritoState = { // estado inicial 
    id: 0,
    productos: <ProductoCarrito[]>[],
    total: 0,
    valorEnvio: 0,
    metodoPago: "Onepay"
}

const initialState = () =>{
    const estadoPersistente = localStorage.getItem("_redux_carrito");
    return estadoPersistente? JSON.parse(estadoPersistente):defaultInitialState;
}


export const carritoSlice = createSlice({
    name: "carrito",
    initialState, // 
    reducers: {
        createCarrito: (state, action: PayloadAction<CarritoState>) => { // aqui servira para guardar el estado de la persona logueada
            const newState = { ...action.payload }
            console.log("createCarrito reducer", newState)
            return newState
        },
        deleteCarrito: (state) => { // se busca dejar como el estado inicial por lo tanto a diferencia de login este no le agregaremos un action
            console.log("deleteCarrito reducer ", state.productos)
            return { ...defaultInitialState }
        },
        addProductCarrito: (state, action: PayloadAction<ProductoCarrito>) =>{
            console.log("Agrego producto a Carrito reducer")
            let newState = {...state};
            /* const newProduct = action.payload as ProductoCarrito;
            newState.productos.push(newProduct); */
            const newProduct = action.payload as ProductoCarrito;
            newState.productos = [...state.productos]
            console.log("AQUI ESTA EL NEW PRODUCT" , newProduct);
            newState.productos.push(newProduct);
            return newState
        },
        deleteProducto: (state, action: PayloadAction<number>) => {
            console.log("ELIMANDO PRODUCTO ID ", action.payload);
            let newState = { ...current(state) };
            const newProducts = JSON.parse(JSON.stringify(newState.productos))

            console.log("Estado",newProducts.length);
            if(newProducts.length === 1){
                console.log("DEFAULT STATE ELIMINA TODOS LOS PRODUCTOS", defaultInitialState)
                return  { ...defaultInitialState}
            }
            else{
                newProducts.splice(action.payload,1);
                newState.productos = [...newProducts]
                console.log("Default ESTADO", newState)
                return newState
            }
        }

    }

});

export const { createCarrito, deleteCarrito, addProductCarrito, deleteProducto } = carritoSlice.actions;
export default carritoSlice.reducer;