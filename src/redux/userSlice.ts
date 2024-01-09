import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    id: number;
    user_name: string;
    email: string;
    isAuth: boolean;
    role: string;
    iat: number;
    access_token: string;
    user_avatar: string;
}

const defaultInitialState: UserState = { // estado inicial 
    id: 0,
    user_name: "",
    email: "",
    isAuth: false,
    role: "",
    iat: 0,
    access_token:"",
    user_avatar:""
}
const initialState =  () => { // estado inicial
    const estadoPersistente = localStorage.getItem("_redux_user");
    return estadoPersistente ? JSON.parse(estadoPersistente): defaultInitialState
}


export const userSlice = createSlice({
    name: "user",
    initialState, // 
    reducers: {
        login: (state, action: PayloadAction<UserState>) => { // aqui servira para guardar el estado de la persona logueada
            const newState = { ...action.payload }
            console.log("login reducer", newState)
            return newState
        },
        logout: () => { // se busca dejar como el estado inicial por lo tanto a diferencia de login este no le agregaremos un action
            console.log("logout reducer")
            return { ...initialState }
        }
        
    }

});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;