import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <nav id='menu-container'>
            <div>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/app">Dictionary app</Link></li>
                </ol>
            </div>
        </nav>
    )
}

export default Menu;