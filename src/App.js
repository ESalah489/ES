import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import Userprofile from "./Components/userprofile/Userprofile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/user" element={<Userprofile/>} ></Route>
          <Route path="/registration" element={<Registration />} ></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
