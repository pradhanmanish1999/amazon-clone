import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (

    <div className='checkoutProduct'>

        <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>

                    <p className='checkoutProduct__title'>{title}</p>

                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className='checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i) => 
                (<StarIcon/>
                ))}
                    </div>

                    <button onClick = {removeFromBasket}>
                        Remove from Basket
                    </button>
            </div>
    </div>
    
  )
}

export default CheckoutProduct