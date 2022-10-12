import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemos } from '../../redux/actions/index';

function Card({ id, name, hp, attack, defense, speed, height, weight }) {
	return (
		<>
			<div>
				<div>
					<p>Pokedex: {id}</p>
					<p>{name}</p>
					<p>{hp}</p>
					<p>{attack}</p>
					<p>{defense}</p>
					<p>{speed}</p>
					<p>{height}</p>
					<p>{weight}</p>
				</div>
			</div>
		</>
	);
}

export default Card;
