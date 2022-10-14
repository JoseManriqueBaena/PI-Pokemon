import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemos } from '../../redux/actions/index';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import style from './Pokemons.module.css';

function Cards() {
	const [imgTypes, setImgTypes] = useState([]);

	const dispatch = useDispatch();
	const pokemons = useSelector((state) => state.pokemons);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		//dispatch
		dispatch(getAllPokemos());
		//imgTypes
		setImgTypes([
			{
				type: 'normal',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg',
			},
			{
				type: 'fighting',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg',
			},
			{
				type: 'flying',
				url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg',
			},
			{
				type: 'poison',
				url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg',
			},
			{
				type: 'ground',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg',
			},
			{
				type: 'rock',
				url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg',
			},
			{
				type: 'bug',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg',
			},
			{
				type: 'ghost',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg',
			},
			{
				type: 'steel',
				url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg',
			},
			{
				type: 'fire',
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg',
			},
			{
				type: 'water',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg',
			},
			{
				type: 'grass',
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg',
			},
			{
				type: 'electric',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg',
			},
			{
				type: 'psychic',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg',
			},
			{
				type: 'ice',
				url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg',
			},
			{
				type: 'dragon',
				url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg',
			},
			{
				type: 'dark',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg',
			},
			{
				type: 'fairy',
				url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg',
			},
			{
				type: 'unknown',
				url: 'Not image',
			},
			{
				type: 'shadow',
				url: 'Not image',
			},
		]);
	}, [dispatch]);

	return (
		<>
			<div>
				<div className={style.mainContainer}>
					{loading ? (
						<Loading />
					) : (
						pokemons?.map((pokemon) => (
							<Card
								key={pokemon.id}
								id={pokemon.id}
								name={pokemon.name}
								img={pokemon.img}
								types={pokemon.types}
								typesImg={pokemon.types?.map((type) => {
									let img = imgTypes?.find((imgtype) => imgtype.type === type);
									return img;
								})}
							/>
						))
					)}
				</div>
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