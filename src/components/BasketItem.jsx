import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketItem({id, title,price,quantity}) {
    const {removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext)
    return <li  className="collection-item">
    {title}<i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i>
      {quantity}кг.{' '}
      <i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>add</i> ={price * quantity}$
    <span className="secondary-content" onClick={() => removeFromBasket(id)}>
      <i className="material-icons basket-delete ">close</i>
    </span>
  </li>;
}

export {BasketItem}
