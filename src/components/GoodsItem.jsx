import {useContext} from "react";
import {ShopContext} from "../context"

function GoodsItem({id, title, img, price, sale}) {
    const {addToBasket} = useContext(ShopContext)

    return (
        <div className="card">
            {sale && (
                <div className="ribbon-wrapper">
                    <div className="ribbon">SALE</div>
                </div>
            )}
            <div className="card-image">
                <img src={img} alt={title} />
            </div>
            <div className="card-content ">
                <span className="card-title">{title}</span>
                {sale && (<span className="sale-text">Скидка 50% на каждый третий кг.!</span>)}
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addToBasket({id, title, price, sale})}>
                    Купить
                </button>
                <span className="right" style={{fontSize: '1.6rem'}}>{price}$</span>
            </div>
        </div>
);
}

export {GoodsItem}




