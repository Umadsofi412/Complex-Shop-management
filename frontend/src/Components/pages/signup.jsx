import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            setError(error.response ? error.response.data.message : 'Network Error')
        }
    };
    return (
        <form className="Signup" onSubmit={handleSubmit}>
            <div className="main-signup">
                <div className="sign-up-header">
                    <h1>Create Free Account</h1>
                    <p>Discover Prime Spaces for Your Business – Sign Up Now!</p>
                </div>
                <div className="form-display">
                    <div className="display-content">
                        <label htmlFor="">
                            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </div >
                    <div className="display-content">
                        <label htmlFor="Email">
                            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="display-content">
                        <label htmlFor="Password">
                            <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button type="submit">Signup</button>
                    <p>Already have an account? <a href="#">Sigin</a> </p>
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default Signup