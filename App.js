import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vehicles from './pages/Vehicles';
import NotFound from './pages/404';
import { useEffect, useState } from 'react';
import PrivatePage from './pages/privatePage';

function privateRoute(props) {
  const auth = useAuth();
  return auth ? children : <Navigate to='/login'/>
}
function App() {
  let location = useLocation();
  console.log('Donde estamos?', location);

  const [validHeader, setValidHeader] = useState(false);

  const paths = ['/', '/about', '/vehicles'];

  useEffect(()=>{
    const result = paths.some(elem => elem ===location.pathname);
    setValidHeader(result);
  }, [location]);


  const _Link = ({children}) => {
    props.to = false;
  }

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/vehicles'>Vehicles</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/vehicles' element={<Vehicles/>}/>
          <Route exact path='/private' element={<privateRoute> <PrivatePage/> </privateRoute>}>
            <Route exact path='/:brand' element={<Vehicles/>}>
              <Route exact path='/:model' element={<Vehicles/>}/>
            </Route>
          </Route>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
