import './Bottle.css'
// eslint-disable-next-line react/prop-types
const Bottle = ({ bottle,handleAddToCard }) => {
    // eslint-disable-next-line react/prop-types
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

export default Bottle;