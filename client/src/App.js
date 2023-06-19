import logo from './logo.svg';
import './App.css';
import Code from './pages/Code'
import Home from './pages/Home';
import Submissions from './pages/Submissions';
import Signin from './pages/Signin';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
function App() {

  const hed="</>";
  return (
    
    <Routes>
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        </Route>
    </Routes>
        
    // <Home />
  );
}

export default App;
