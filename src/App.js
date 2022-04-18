import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Login from './component/authentication/Login';
import Signup from './component/authentication/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
