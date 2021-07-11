import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className="light-green darken-1">
            <div className="nav-wrapper">
                <img className="nav-logo" width={50} height={50} src="/img/mainlogo.svg" alt="logo"/>
                <Link className="brand-logo" to="/">Fruit Shop</Link>
                <ul id="nav-mobile" className="right">
                    <Link to="/cart">Cart</Link>
                </ul>
            </div>
        </nav>
    )
}

export {Header}
