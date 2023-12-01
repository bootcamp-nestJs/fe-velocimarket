import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    id: number;
    user_name: string;
    email: string;
    isAuth: boolean;
    role: string
    access_token:string
}

const initialState: UserState = { // estado inicial 
    id: 0,
    user_name: "",
    email: "",
    isAuth: false,
    role: "",
    access_token:""
}


export const userSlice = createSlice({
    name: "user",
    initialState, // 
    reducers: {
        login: (state, action: PayloadAction<UserState>) => { // aqui servira para guardar el estado de la persona logueada
            const newState = { ...action.payload }
            console.log("logout reducer", newState)
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