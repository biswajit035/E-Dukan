import Home from "./Pages/Home";
import Login from "./Layouts/Login";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import SignUp from "./Layouts/SignUp";

function App() {
  return (
    // <div className="App" >
    //   <Home/>
    //   <Login/>
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes> 

  );
}

export default App;
