import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./component/LoginForm/LoginForm"
import RegisterForm from "./component/RegisterForm/RegisterForm";
import HomePage from "./pages/HomePage"

function App() {
  const handleSubmit = async (email: string, password: string) => {
    console.log(email, password);
    await new Promise(r => setTimeout(r, 1500));
  }
  return (
    // <>
    //   <LoginForm onSubmit={handleSubmit}></LoginForm>
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm onSubmit={handleSubmit}/>} />
        <Route path="/register" element={<RegisterForm onSubmit={handleSubmit}/>} />
      </Routes>
    </Router>
  )
}

export default App;
