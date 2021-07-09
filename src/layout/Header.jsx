import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className="light-green darken-1">
            <div className="nav-wrapper">
                <img className="nav-logo" width={50} height={50} src="/img/mainlogo.svg" alt="logo"/>
                <Link to="/">
                    <span className="nav-logo-block">Fruit Shop</span>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Link to="/Cart">
                        <span>Cart</span>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export {Header}