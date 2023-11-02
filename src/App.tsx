import {Route , Routes} from "react-router-dom";

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
//css
import './App.css'
import Results from "./pages/results";


function App() {  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path= '/signUp' element = {<SignUp/>} />
          <Route path= '/signIn' element = {<SignIn/>} />
          <Route path='/profile1' element={<Profile1 />}/>
          <Route path='/profile2' element={<Profile2 />}/>
          <Route path='/publication' element={<Publication />}/>
          <Route path='/file-product' element={<FileProduct />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/inbox' element={<Inbox />}/>
          <Route path='/results' element={<Results />}/>
        </Routes>
    </>        
  )
}

export default App
