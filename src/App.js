// import Signup from "./App/Auth/Signup";
import { Route, Routes } from "react-router-dom";
// import Hero from "./Components/Landing/Hero";
// import Navbar from "./Components/Landing/Navbar";
// import Princing from "./Components/Landing/Princing";
// import Utility from "./Components/Landing/Utility";
import Landing from "./App/Landing";
import SignUpModal from "./Components/SignupModal/SignupModal";
import SigninModal from "./Components/SigninModal"

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<SignUpModal />} />
    <Route path="/signin" element={<SigninModal />} />

  </Routes>
  
      
    </>
  );
}

export default App;
