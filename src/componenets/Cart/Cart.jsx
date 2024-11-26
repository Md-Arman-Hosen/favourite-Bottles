import './Cart.css';
import PropTypes from 'prop-types';
const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='cart-container'>
                {cart.map(bottle => <div key={bottle.id}>
                    <div className='cart-body-container'>
                        <div>
                            <img src={bottle.img}></img>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div>
                    </div>

                </div>)}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;