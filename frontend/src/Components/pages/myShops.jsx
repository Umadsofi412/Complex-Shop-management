import React,{useState,useEffect} from "react";
import axios from 'axios';
import shopItem from "./shopItem";


const MyShop = () => {
    const[shops, setShops] = useState([]);

    useEffect(() => {
        const fetchMyShops = async () =>{
            try{
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/shops/myShops',{
                    headers: {'Authorization': `Bearer ${token}`}
                }); 
                setShops(response.data);
            }
            catch(error){
                console.error('Error fetching my shops:',error);
            }
        };
        fetchMyShops()
    },[]);

    return(
        <div>
            <h2>My Purchased Shops</h2>
            <div>
                {shops.map((shop)=>(
                    <shopItem key = {shop._id} shop = {shop}/>
                ))}
            </div>
        </div>
    );
};
export default MyShop;