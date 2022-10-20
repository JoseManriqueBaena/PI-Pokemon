import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsName } from '../../redux/actions';

export default function SearchBar({ paginado }) {
	const [pokemonName, setPokemonName] = useState('');
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	const handlerChange = (event) => {
		setPokemonName(event.target.value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		dispatch(getPokemonsName(pokemonName));
		setPokemonName('');
		paginado(1);
	};

	return (
		<>
			{loading ? null : (
				<div>
					<form onSubmit={handlerSubmit}>
						<input
							type='text'
							name='pokemon'
							id='pokemon'
							value={pokemonName}
							placeholder='Search pokemon'
							onChange={handlerChange}
						/>
						<button type='submit'>Search</button>
					</form>
				</div>
			)}
		</>
	);
}
