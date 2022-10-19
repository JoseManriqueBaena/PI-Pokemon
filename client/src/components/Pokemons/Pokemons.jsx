import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImgTypes } from '../../redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import style from './Pokemons.module.css';

export default function Cards({ pokemons }) {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const imgTypes = useSelector((state) => state.imgTypes);

	useEffect(() => {
		dispatch(getAllImgTypes());
	}, []);

	return (
		<>
			<div>
				<div className={style.mainContainer}>
					{loading ? (
						<Loading />
					) : pokemons.length ? (
						pokemons?.map((pokemon) => (
							<Card
								key={pokemon.id}
								id={pokemon.id}
								pokedex={pokemon.pokedex}
								attack={pokemon.attack}
								defense={pokemon.defense}
								name={pokemon.name}
								img={pokemon.img}
								types={pokemon.types}
								Types={pokemon.Types} //Types de los pokemons creados(en mayus -.-)
								typesImg={pokemon.types?.map((type) => {
									let img = imgTypes?.find((imgtype) => imgtype.type === type);
									return img;
								})}
								imgDbPokemon={
									pokemon?.crateInDb
										? pokemon.Types?.map((type) => {
												let img = imgTypes?.find(
													(imgtype) => imgtype.type === type.name
												);
												return img;
										  })
										: null
								}
								crateInDb={pokemon.crateInDb}
							/>
						))
					) : (
						<NotFound />
					)}
				</div>
			</div>
		</>
	);
}
