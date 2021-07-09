import {useEffect, useContext} from 'react';
import {ShopContext} from '../context';
import {Preloader} from '../components/Preloader';
import {GoodsList} from '../components/GoodsList';
import {Cart} from '../components/Cart';
import {BasketList} from '../components/BasketList';
import {Alert} from '../components/Alert';



function Shop() {
    const { loading, order, isBasketShow, alertName, setGoods} = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch('http://localhost:8000/goods')
            .then(response => response.json())
            .then((goods) => {
                setGoods(goods)
            })

    }, []);

    return (
        <>
            <Cart quantity={order.length}/>
            {loading ? (<Preloader/>) : (<GoodsList />)}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert />}
        </>
    );
}

export {Shop}