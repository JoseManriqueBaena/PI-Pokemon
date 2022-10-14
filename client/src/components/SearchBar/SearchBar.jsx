import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsName } from '../../redux/actions';

export default function SearchBar(props) {
	const [pokemonName, setPokemonName] = useState('');
	// const getPokemonsName = useSelector((state) => state.poke);
	const dispatch = useDispatch();

	const handlerChange = (event) => {
		setPokemonName(event.target.value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		dispatch(getPokemonsName(pokemonName));
		setPokemonName('');
	};

	return (
		<>
			<div>
				<form onSubmit={handlerSubmit}>
					<input
						type='text'
						name='pokemon'
						id='pokemon'
						value={pokemonName}
						placeholder='Busca un pokemon'
						onChange={handlerChange}
					/>
					<button type='submit'>Buscar pokemon</button>
				</form>
			</div>
		</>
	);
}
