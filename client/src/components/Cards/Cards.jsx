import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemos } from '../../redux/actions/index';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

function Cards(props) {
	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(getAllPokemos());
	}, [dispatch]);

	console.log(loading);
	return (
		<>
			<div>
				{loading ? (
					<Loading />
				) : (
					pokemons?.map((pokemon) => (
						<Card
							key={pokemon.id}
							id={pokemon.id}
							name={pokemon.name}
							hp={pokemon.hp}
							attack={pokemon.attack}
							defense={pokemon.defense}
							speed={pokemon.speed}
							height={pokemon.height}
							weight={pokemon.weight}
						/>
					))
				)}
			</div>
		</>
	);
}

export default Cards;

/*
    key={pokemon.id}
    id={pokemon.id}
    name={pokemon.name}
    hp={pokemon.hp}
    attack={pokemon.attack}
    defense={pokemon.defense}
    speed={pokemon.speed}
    height={pokemon.height}
    weight={pokemon.weight}

    { <Card name={pokemons[0].name} /> 
				 {pokemons?.map((pokemon) => {
					<Card hola={'estoy mandando props'} />;
				})} 

    setTimeout(() => {
            <Card />;
        }, '1000')
 */
