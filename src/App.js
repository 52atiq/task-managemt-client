import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path ='/' element={<Home></Home>}> Home</Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
