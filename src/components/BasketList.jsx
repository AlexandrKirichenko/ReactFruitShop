import {useContext} from 'react'
import {ShopContext} from '../context'
import {BasketItem} from './BasketItem'
import { Link } from 'react-router-dom'

function BasketList() {
    const {order = [], handleBasketShow = () => {}} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        let discount = 0

        if (el.sale && el.quantity > 2) discount = Math.floor(el.quantity / 3) * 0.5 * el.price
        return sum + (el.price * el.quantity - discount)
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}/>
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость(со скидкой):{totalPrice}$
            </li>
            <li className="collection-item">
                <Link to="/cart">
                    <button className="btn btn-small">Оформить</button>
                </Link>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>)
}

export {BasketList}




