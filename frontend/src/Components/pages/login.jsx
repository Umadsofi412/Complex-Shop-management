import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
const Login = () => {
    const[email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('https://localhost:5000/api/auth/login', {email, password});
            localStorage.setItem('token', response.data.token);
            navigate.push('/');
        }catch(error){
            console.error('Error:', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Email">
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <div>
                <label htmlFor="Password">
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    )}

export default Login