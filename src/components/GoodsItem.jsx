import {useContext} from "react";
import {ShopContext} from "../context"

function GoodsItem({id, title, img, price}) {
    const {addToBasket} = useContext(ShopContext)

    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addToBasket({id, title, price})}>
                    Купить
                </button>
                <span className="right" style={{fontSize: '1.6rem'}}>{price}$</span>
            </div>
        </div>
);
}

export {GoodsItem}


