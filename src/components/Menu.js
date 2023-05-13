import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
       <div>
            <nav class='menu-container'>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/app">Dictionary app</Link></li>
                    </ul>
                </div>
            </nav>
       </div>
    )
}

export default Menu;