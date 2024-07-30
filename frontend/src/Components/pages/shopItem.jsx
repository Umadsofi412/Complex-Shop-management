import React from 'react';
import axios from 'axios';

const ShopItem = ({ shop }) => {
    const handleBuy = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/shops/buy/${shop._id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            alert('Shop purchased successfully');
        } catch (error) {
            console.error('Error purchasing shop:', error);
            alert('Error purchasing shop');
        }
    };

    return (
        <div className='shopList'>
            <h3>{shop.name}</h3>
            <p>{shop.description}</p>

        <div className='shopPriceBtn'>
           
            {shop.isAvailable ? (
                <>
                <button onClick={handleBuy}>Buy</button>
                 <p>Rs: ₹{shop.price}</p>
                </>
            ) : (
                
                <p className='boldSold'>Sold</p>
            )}
            </div>
        </div>
    );
};

export default ShopItem;
