import { configureStore, Middleware} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import carritoReducer from "./carritoSlice";


const persisLocalStorage: Middleware = (store) => (next) => (action) => {

  next(action);

  const estado = store.getState()
  // Obtiene datos usuario 
  const userAsJsonString = JSON.stringify(estado.user);

  // Obtiene datos carrito
  const carritoAsJsonString = JSON.stringify(estado.carrito);

  localStorage.setItem("_redux_user",userAsJsonString);
  localStorage.setItem("_redux_carrito",carritoAsJsonString);


  // console.log(userAsJsonString);
  // console.log("CARRITO AS JSON", carritoAsJsonString);
}

export const store = configureStore({
    reducer: {
        user: userReducer,
        carrito: carritoReducer
    },
    middleware: [persisLocalStorage]
});


export type RootState = ReturnType<typeof store.getState>;