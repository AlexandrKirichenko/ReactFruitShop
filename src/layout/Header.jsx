import { Link } from 'react-router-dom';

function Header(){
    return (
        <nav className="light-green darken-1">
            <div className="nav-wrapper">
                <img className="nav-logo" width={50} height={50} src="/img/mainlogo.svg" alt="logo"/>
                <Link to="/">
                    <a href="#" className="brand-logo">Fruit Shop</a>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Link to="/Cart">
                        <li><a href="!#">Cart</a></li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export {Header}