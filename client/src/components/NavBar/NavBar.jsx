import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

function Navbar(props) {
	return (
		<>
			<nav>
				<div className={style.mainContainer}>
					<div>
						<Link to={'/'}>
							<img src='' alt='Aun no se nada' />
						</Link>
					</div>
					<div>
						<Link to={'/home'}>Home</Link>
						<Link to={'/create'}>Crear pokemon</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;