// frontend/src/components/Admin.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Admin = () => {
       
    const [shops, setShops] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  
    useEffect(() =>{},[])
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shops');
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching shops:', error);
            }
        };
        fetchShops();
        
        useEffect(()=>{
            fetchShops()
        
        },[])
   
    const handleAddShop = async () => {
        try {
            const token = localStorage.getItem('token');
             await axios.post('http://localhost:5000/api/shops', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFormData({name: '', description: '', price: ''});
            fetchShops()
        } catch (error) {
            console.error('Error adding shop:', error);
        }
    };


    const handleDeleteShop = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/shops/${id}`,{
                headers: { Authorization: `Bearer ${token}` },
            });
            setShops(prevshops => prevshops.filter(shop => shop._id !== id));
            fetchShops()
        } catch (error) {
            console.error('Error deleting shop:', error);
        }
    };

    return (
        <div className='adminDashboardForm'>
            <h2>Admin Dashboard</h2>
            <div className='DashboardForm'>
                <h3>ADD SHOP</h3>
                <div className='inputData'>
                {/* <label>Name:</label> */}
                <input
                    type="text"
                    placeholder='Name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                /> 
                {/* <label>Price:</label> */}
                 <input
                    type="number"
                    placeholder='Price'
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                </div>
                <textarea
                    type="text"
                    placeholder="Description..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              
                <button onClick={handleAddShop}>Add Shop</button>

            </div>
            <div className='ManagedShops'>
                <div className='shopsTitle'>
                <h3>Manage Shops</h3>
                </div>
                <div className='shopsComtainer'>
                {shops.map(shop => (
                    <div className='shopsAdmin' key={shop._id}>
                        <h4>{shop.name}</h4>
                        <p>{shop.description}</p>
                        <p>Price: ${shop.price}</p>
                        <button onClick={() => handleDeleteShop(shop._id)}>Delete</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
