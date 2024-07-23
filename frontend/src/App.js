import './App.css';
import React,{useContext} from "react"
import {BrowserRouter as Router ,Route, Routes,Link} from "react-router-dom";
import AuthProvider, { AuthContext } from './Components/context/authContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/pages/login';
import Signup from './Components/pages/signup';
import LandingPage from './Components/pages/landingPage';
import ShopList from './Components/pages/shopList';
import MyShop from './Components/pages/myShops';
import Admin from './Components/pages/Admin';
import LogoutButton from './Components/Logout';
const App = () => { 
  return (
    <AuthProvider>
      <Router>
        <header className="header-container">
          <div className="nav-container">
            <nav className="nav-links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Pricing</a>
            </nav>
            <div className="nav-btn">
            {/* {!user ?( 
              <>
               <Link className="nav-btn1" to="/login">
                Login
              </Link>
              <Link className="nav-btn2" to="/signup">
                Create Your Free Account
              </Link>
              </>):(
                <LogoutButton/>
              )} */}
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/shops"
            element={
              <ProtectedRoute adminOnly={false}>
                <ShopList />
              </ProtectedRoute>
            }
          />
          <Route path="/myshops" element={<MyShop />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
