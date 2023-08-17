import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Uploadto from "./Uploadto";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";


function App() {
  return( <Router>
  <Header/>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/upload" element={<Uploadto/>}/>
  <Route path="/login" element={<LogIn/>}/>
  <Route path="/signup" element={<SignUp/>}/>

 
</Routes>
<Footer/>
  </Router>
  );
}

export default App;
