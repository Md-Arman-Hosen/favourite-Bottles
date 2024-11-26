import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getStoredCart, removeFromLS } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
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
        console.log(storedCart , bottles);
        const savedCart =[];
        for (const id of storedCart){
            console.log(id);
            const bottle= bottles.find(bottle => bottle.id === id);
            if (bottle){
                savedCart.push(bottle);
            }
        }
        setCart(savedCart);
    }
    },[bottles])   



   const handleAddToCard = bottle=> {
      const newCart = [...cart, bottle];
      setCart(newCart);
      addToLS(bottle.id);

   }
   const handleRemoveFromCart = id =>{
    const remainingCart = cart.filter (bottle=> bottle.id !== id);
    setCart(remainingCart);
      removeFromLS(id);
   }

    return (
        <div>
            <h2>bottles here: {bottles.length}</h2>
             <Cart 
             cart = {cart}
             handleRemoveFromCart = {handleRemoveFromCart}
             ></Cart>
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