
import {NavLink} from "react-router-dom";
import './NavBar.css';

const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
	isActive ? 'nav-active' : '';

const NavBar: React.FC = () => {
	return (
<div className="main">
	<h1>Trivia</h1>
<nav>

    <NavLink to="/trivia/0" className={getActiveClass}>0</NavLink>
    {' '}|{' '}
    <NavLink to="/trivia/1" className={getActiveClass}>1</NavLink>
    {' '}|{' '}
    <NavLink to="/trivia/2" className={getActiveClass}>2</NavLink>
    {' '}|{' '}
    <NavLink to="/trivia/3" className={getActiveClass}>3</NavLink>
</nav>
</div>

	);
};

export default NavBar;

