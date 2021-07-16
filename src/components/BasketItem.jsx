import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketItem({id, title, price, quantity, sale}) {
    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)

    const discount = () => {
        if (sale && quantity > 2) return Math.floor(quantity / 3) * 0.5 * price
        else return 0
    }

    return (
        <li className="collection-item">
            {title}<i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>
            {quantity}кг.{' '}
            <i className='material-icons basket-quantity' onClick={() =>
                incQuantity(id)}>add</i> = {price * quantity}$ {sale && discount()>0 && `(скидка ${discount()}$)`}
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
            <i className="material-icons basket-delete ">close</i>
            </span>
        </li>
    )
}

export {BasketItem}






















