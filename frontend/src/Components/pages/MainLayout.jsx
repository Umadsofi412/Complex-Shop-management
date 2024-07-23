// MainLayout.jsx
import React from 'react';
import LogoutButton from '../Logout';

const MainLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">Signup</Link>}
                {user && <LogoutButton />}
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
