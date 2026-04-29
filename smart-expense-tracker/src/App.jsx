
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/home';
import Landing from './pages/landing';
import Home from './pages/home';
function App() {
  return (
     <BrowserRouter>
      <div>
        <Toaster position='top-center'/>
       
        <Routes path="/*">
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/*" element={<Home />} />


        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;