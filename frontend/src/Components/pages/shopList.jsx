import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShopItem from './shopItem';

const ShopList = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shops');
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching shops:', error);
            }
        };
        fetchShops();
    }, []);

    return (
        
        <div className='shopListItem'>
            <div className='shopListContainer'>
            <div className='shopListHeader'>
            <h2>Buy your Shop and begin the journey of your own Bussiness</h2>
            <div className='shopCurve'></div>
            </div>
            
            <div className='shopCards'>
                {shops.map((shop) => (
                    <ShopItem key={shop._id} shop={shop} />
                ))}
            </div>
            </div>
           
           
        </div>
        
    );
};

export default ShopList;
