import {Route , Routes} from "react-router-dom";

//pages
import Home from './pages/home';
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
import Publication from "./pages/Publication";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

//css
import './App.css'

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
        </Routes>
    </>        
  )
}

export default App
