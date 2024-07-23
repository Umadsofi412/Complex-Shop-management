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
        <div>
            <h2>Available Shops for Sale</h2>
            <div>
                {shops.map((shop) => (
                    <ShopItem key={shop._id} shop={shop} />
                ))}
            </div>
        </div>
    );
};

export default ShopList;
