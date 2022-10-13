import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
	return (
		<>
			<div>
				<h1> Soy una Landing</h1>
				<Link to='/home'>
					<button>Iniciar</button>
				</Link>
			</div>
		</>
	);
}

export default Landing;
