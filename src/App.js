import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import Welldone from './components/WellDone/Welldone';
import Registar from './components/Registar/Registar';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/welldone' element={<Welldone />}></Route>
        <Route path='/registar' element={<Registar />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
