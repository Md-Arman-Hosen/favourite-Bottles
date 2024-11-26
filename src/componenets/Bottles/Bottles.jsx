import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getStoredCart } from '../../utilities/localStorage';
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    //load cart from local storage
    useEffect(()=>{
    if(bottles.length>0){
        const storedCart =  getStoredCart();
        console.log(storedCart);
    }
    },[bottles])   



   const handleAddToCard = bottle=> {
      const newCart = [...cart, bottle];
      setCart(newCart);
      addToLS(bottle.id);

   }

    return (
        <div>
            <h2>bottles here: {bottles.length}</h2>
            <h4>Card:{cart.length}</h4>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle
                        bottle={bottle}
                        key={bottle.id}
                        handleAddToCard ={handleAddToCard}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;