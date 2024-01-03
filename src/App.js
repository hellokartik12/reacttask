import React from "react";
import Navbar from "./Navbar"
import Login from "./Login"
import Signup from "./Signup"
import { Route, Routes } from "react-router-dom";
import Home from "./Home"

const App = () => {
return(
    <>
     < Navbar/> 
     <Routes>
        <Route path="/" element = <Home/>  />
        <Route path="/login" element = <Login/>  />
        <Route path="/signup" element = <Signup/>  />
     </Routes>       
    </>
)
}

export default App;