import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Navigate, useLocation } from "react-router-dom"

interface Props {
    children: React.ReactNode   // se peden definir asi co react o de forma mas generica como JSX.Element
}


export const ProtectedComponent = (props: Props) => {

    const user = useSelector((state: RootState) => state.user)
    const location =useLocation(); // se utiliza principalmente para que una vez logueado te permita redirigirte a la vista que querias entrara pero que esta protegida 
console.log(user?.isAuth)
    if (user?.isAuth) {
        return (
            <>
                {props.children}
            </>
        )
    }
    return <Navigate to= "/signIn" state={{from: location}} replace ></Navigate>
}