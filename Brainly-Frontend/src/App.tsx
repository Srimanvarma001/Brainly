
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { SignIn } from "./pages/Signin"
import { Dashboard } from "./pages/dashboard"


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
  </Routes>
  </BrowserRouter>
}

export default App
