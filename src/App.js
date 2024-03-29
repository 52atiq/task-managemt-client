import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import UpdateTask from './pages/UpdateTask/UpdateTask';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ToDo from './pages/ToDo/ToDo';
import CompletedTask from './pages/CompletedTask/CompletedTask';
import Done from './pages/Done/Done';
function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path ='/' element={<Home></Home>}> Home</Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
        <Route path='calendar' element={<Calendar></Calendar>}></Route>
        <Route path='todo' element={<ToDo></ToDo>}></Route>
        <Route path='completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='completed' element={<Done></Done>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer> </Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
