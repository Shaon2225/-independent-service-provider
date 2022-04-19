import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Login from './component/authentication/Login';
import Signup from './component/authentication/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer/Footer';
import Blog from './component/blog/Blog';
import AboutMe from './component/aboutMe/AboutMe';
import Gallary from './component/gallary/Gallary';
import RequireAuth from './component/checkout/RequireAuth';
import Checkout from './component/checkout/Checkout';
import NotFound from './component/notfound/NotFound';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/gallary' element={<Gallary></Gallary>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
