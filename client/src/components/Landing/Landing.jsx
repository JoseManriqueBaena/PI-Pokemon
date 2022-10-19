import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

function Landing(props) {
	return (
		<>
			<section className={style.mainContainer}>
				<div className={style.containerInfo}>
					<h1> Soy una Landing</h1>
					<Link to='/home'>
						<button>Iniciar</button>
					</Link>
				</div>
			</section>
		</>
	);
}

export default Landing;
