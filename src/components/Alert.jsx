import { useEffect, useContext} from 'react';
import {ShopContext} from '../context';

function Alert() {
    const { alertName: title = '', closeAlert = () => {}} = useContext(ShopContext);

    useEffect(() => {
        const timerId= setTimeout(closeAlert, 1000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [title]);

    return (
        <div id="toast-container">
            <div className='toast'>Продукт "{title}" добавлен в корзину</div>
        </div>
    );
}

export {Alert}