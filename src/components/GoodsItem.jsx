import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketItem({id, title, price, quantity, sale}) {
    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)

    const totalPrice = () => {
        let discount = 0;
        if (sale && quantity > 2) discount = Math.floor(quantity / 3) * 0.5 * price
        return price * quantity - discount
    }

    return (
        <li className="collection-item">
            {title}<i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>
            {quantity}кг.{' '}
            <i className='material-icons basket-quantity' onClick={() =>
                incQuantity(id)}>add</i> = {totalPrice()}$
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete ">close</i>
            </span>
        </li>
    )
}

export {BasketItem}



