import './App.css';
import React,{useContext, useEffect,useState} from "react"
import {BrowserRouter as Router ,Route, Routes,Link, Navigate} from "react-router-dom";
import AuthProvider, { AuthContext } from './Components/context/authContext';
import ProtectedRoute from './Components/ProtectedRoute';
import {Provider,useSelector,useDispatch} from 'react-redux'
import store from '../src/redux/store';
import { clearAuthToken, setAuthToken } from '../src/redux/authSlice';
import Login from './Components/pages/login';
import Signup from './Components/pages/signup';
import LandingPage from './Components/pages/landingPage';
import ShopList from './Components/pages/shopList';
import MyShop from './Components/pages/myShops';
import Admin from './Components/pages/Admin';
import LogoutButton from './Components/logout';
import Cookies from 'js-cookie'

const App = () => { 
  const [page, setPage] = useState("");
  // const { user } = useContext(AuthContext);
  const { user, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
   useEffect(() => {
     const token = Cookies.get("token");
     if (token) {
       dispatch(setAuthToken(token));
     }
   }, [dispatch]);
  const handleLogout = () => {
    dispatch(clearAuthToken());
  };


  return (
    <Router>
      <header className="header-container">
        <div className="nav-container">
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Pricing</a>
          </nav>
          <div className="nav-btn">
            {!user ? (
              <>
                {page !=='login' && (<Link className="nav-btn1" to="/login">
                  Login
                </Link>)}
               {page !=='signup' &&( <Link className="nav-btn2" to="/signup">
                  Create Your Free Account
                </Link>)}
              </>
            ) : (
              <>
                <button className="nav-btn1" onClick={handleLogout}>
                  Logout
                </button>
                {isAdmin && (
                  <Link className="nav-btn2" to="/admin">
                    Admin
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup setPage = {setPage} />} />
        <Route path="/login" element={<Login setPage = {setPage} />} />
        <Route
          path="/shops"
          element={user ? <ShopList /> : <Navigate to="/login" />}
        />
        <Route path="/myshops" element={<MyShop />} />
        <Route
          path="/admin"
          element={
           isAdmin?<Admin/> :<Navigate to = '/login'/>
          }
        />
      </Routes>
    </Router>
  );
}

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default MainApp;
