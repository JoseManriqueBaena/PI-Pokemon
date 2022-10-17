import React from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/actions/index';

export default function NotFound() {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(refresh());
	};

	return (
		<>
			<div>
				<h1>NO ENCONTRÉ NADA LOCO</h1>
				<button onClick={onClick}> Cargar pokemons </button>
			</div>
		</>
	);
}
