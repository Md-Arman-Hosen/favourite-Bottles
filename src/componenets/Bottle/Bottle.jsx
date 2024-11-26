import './Bottle.css';
import PropTypes from 'prop-types';

const Bottle = ({ bottle,handleAddToCard }) => {
    const { name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h4>{name}</h4>
            <img src={img} alt="" />   
            <h6>Price: ${price}</h6>
            <button onClick={()=>handleAddToCard(bottle)}>purchase</button>
        </div>
    );
};
Bottle.propTypes = 
{
    bottle:PropTypes.object.isRequired,
    handleAddToCard:PropTypes.func.isRequired
}
export default Bottle;