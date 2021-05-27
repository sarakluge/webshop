import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as cartAction } from '../features/shoppingCart';
import MovieInCart from './MovieInCart';
import RemoveFromCart from './RemoveFromCart';
import MovieListHeading from './MovieListHeading';

const ShoppingCart = () => {

    let shoppingCart = useSelector(state => state.shoppingCart);    
    console.log('newState: ', shoppingCart)

    const dispatch = useDispatch();
	const removeFromCart = (movie) => dispatch(cartAction.removeFromCart(movie.Title))
    

    if (shoppingCart) {
    const shoppingList = shoppingCart.map((movie, index) => (
            <div key={index}
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <MovieInCart
                    title={movie.product ? movie.product.name : ''}
                    poster={movie.product ? movie.product.poster : ''}
                />
                <div onClick={() => removeFromCart(movie)}>
                    <RemoveFromCart />
                </div>
            </div>
        ))
        return (
            <div>
                <MovieListHeading heading='Shopping Cart' />
                {shoppingList}
            </div>
        )
    } else {
        return (
            <div>
                <p>Empty</p>
            </div>
        )
    }
}

export default ShoppingCart;