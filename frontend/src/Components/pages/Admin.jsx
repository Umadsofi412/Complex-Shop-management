// frontend/src/components/Admin.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Admin = () => {
       
    const [shops, setShops] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '', price: '' });
    const [isFocused,setIsFocused] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editShopId, setEditShopId] = useState(null);
  
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
            const token = Cookies.get('token');
            if (!token) {
                console.error('No token found');
                return;
            }
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
    const handleEditShop = async (id) => {
        try {
            const token = Cookies.get('token');
            if(!token){
                console.error('No token found')
            }
            await axios.put(`http://localhost:5000/api/shops/${editShopId}`,formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFormData({ name: '', description: '', price: '' });
            setIsEditing(false);
            setEditShopId(null);
            fetchShops();
        } catch (error) {
            console.error('Error deleting shop:', error);
        }
    }
    const handleEditButtonClick = (shop) => {
        setFormData({ name: shop.name, description: shop.description, price: shop.price });
        setIsEditing(true);
        setEditShopId(shop._id);
    };

    return (
        <div id='content' className='adminDashboardForm'>
            <h2>Admin Dashboard</h2>
            <div className='DashboardForm'>
                <h3>ADD SHOP</h3>
                <label>Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                /> 
                <label>Price:</label>
                 <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
                <label>Description:</label>
                <div className='inputContainer'>
                <textarea
                    type="text"
                    className={isFocused?'focused':''}
                    id='focus-input'
                    value={formData.description}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={()=> setIsFocused(false)}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                </div>
                <button onClick={isEditing ? handleEditShop : handleAddShop}>{isEditing ? 'update shop': 'Add Shop'}</button>

            </div>
            <div className='ManagedShops'>
                <div className='shopsTitle'>
                <h3>Manage Shops</h3>
                </div>
                <div className='shopsContainer'>
                {shops.map(shop => (
                    <div className='shopsAdmin' key={shop._id}>
                        <h4>{shop.name}</h4>
                        <p>{shop.description}</p>
                        <p>Rs: ₹{shop.price}</p>
                        <div className='adminBtns'>
                        <button onClick={() => handleEditButtonClick(shop)}>Edit</button>
                        <button onClick={() => handleDeleteShop(shop._id)}>Delete</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
