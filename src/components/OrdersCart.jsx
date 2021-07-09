import {useContext} from 'react';
import {ShopContext} from '../context';
import {BasketItem} from './BasketItem'

function OrdersCart() {
    const {order = [], handleBasketShow = () => {}} = useContext(ShopContext)

    const totalPrice = order.reduce((sum,el) => {
        let discount = 0;
        if (el.quantity > 2) discount = Math.floor(el.quantity / 3) * 0.5 * el.price
        return  sum + (el.price* el.quantity - discount);
    }, 0)

    return (
        <ul className="collection light-green lighten-2">
            <li className="collection-item avatar">
                <h2>Ваши заказы</h2></li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}/>
                )) : <li className="collection-item light-green lighten-2">Корзина пуста</li>
            }
            <li className="collection-item active light-green lighten-2">
                Общая стоимость(со скидкой): {totalPrice}$
            </li>
            <i className="material-icons basket-close " onClick={handleBasketShow}>close</i>
        </ul>)
}

export {OrdersCart}