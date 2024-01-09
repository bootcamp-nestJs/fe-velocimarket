import {Navigate, Route , Routes} from "react-router-dom";

//pages
import Home from './pages/home';
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
import Publication from "./pages/Publication";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import FileProduct from "./pages/file-product";
import Cart from "./pages/cart";
import Inbox from "./pages/inbox";
import { Checkout } from "./pages/checkout";
import ResultsCategories from "./pages/results-categories";
import Calification from "./pages/calification";
import { ProtectedComponent } from "./components/ProtectedRoute";
import Historial from "./pages/historialCompra";
import Edition from "./pages/edition";
import Favoritos from "./pages/Favoritos";
import './App.css';

function App() {  


  return (
    <>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path= '/signUp' element = {<SignUp/>} />
          <Route path= '/signIn' element = {<SignIn/>} />
          <Route path='/profile1' element={<ProtectedComponent><Profile1 /></ProtectedComponent> }/>
          <Route path='/profile2' element={<ProtectedComponent><Profile2 /></ProtectedComponent>}/>
          <Route path='/publication' element={<ProtectedComponent><Publication /></ProtectedComponent>}/>
          <Route path='/file-product/:productId' element={<FileProduct />}/>
          <Route path='/cart' element={<ProtectedComponent><Cart /></ProtectedComponent>}/>
          <Route path='/inbox' element={<ProtectedComponent><Inbox /></ProtectedComponent>}/>
          <Route path='/results-categories' element={<ProtectedComponent><ResultsCategories /></ProtectedComponent>}/>
          <Route path='/calification' element={<ProtectedComponent><Calification /></ProtectedComponent>}/>
          <Route path='/checkout' element={<ProtectedComponent><Checkout /></ProtectedComponent>}/>
          <Route path='/historial' element={<ProtectedComponent><Historial/></ProtectedComponent>}/>
          <Route path='/favoritos' element={<ProtectedComponent><Favoritos/></ProtectedComponent>}/>
          <Route path='/edition' element={<ProtectedComponent><Edition/></ProtectedComponent>}/>
          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
    </>        
  )
}

export default App
