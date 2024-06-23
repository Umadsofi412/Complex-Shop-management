import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error,setError] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/auth/signup', {username, email, password});
            localStorage.setItem('token',response.data.token);
            navigate('/login');
        }catch(error){
            console.error('Error:',error);
            setError(error.response ? error.response.data.message : 'Network Error')
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">
                    Username
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
            </div>
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
            <button type="submit">Signup</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </form>
    ) 
 }

 export default Signup