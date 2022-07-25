import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (

    <Router>
    <div className="App">

      <Routes>
     
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />}    />

      <Route path="/home" element={<Home />} />


     </Routes>
    </div>
    </Router>
  );
}

export default App;
