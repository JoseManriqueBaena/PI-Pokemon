import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonId } from '../../redux/actions';
import IconSword from '../../img/icon_sword.svg';
import IconShield from '../../img/icon_shield.svg';
import IconHp from '../../img/icon_hp.svg';
import IconSpeed from '../../img/icon_speed.svg';
import IconWeight from '../../img/icon_weight.svg';
import IconHeight from '../../img/icon_height.svg';
import style from './Detail.module.css';

export default function Detail({ match }) {
	const dispatch = useDispatch();
	const pokeDetail = useSelector((state) => state.pokeDetail);
	const pokeid = match.params.id;

	useEffect(() => {
		dispatch(getPokemonId(pokeid));
	}, [dispatch, pokeid]);

	console.log(pokeDetail);
	return (
		<>
			<div className={style.mainContainer}>
				<div className={style.infoContainer}>
					<h2 className={style.pokeName}>{pokeDetail.name}</h2>

					<div className={style.statsContainer}>
						<div className={style.stats}>
							<img src={IconHp} alt='IconHp' />
							<h3>{pokeDetail.hp}</h3>
						</div>
						<div className={style.stats}>
							<img src={IconSword} alt='IconSword' />
							<h3>{pokeDetail.attack}</h3>
						</div>
						<div className={style.stats}>
							<img src={IconShield} alt='IconShield' />
							<h3>{pokeDetail.defense}</h3>
						</div>
					</div>

					<img
						className={style.imgPokemon}
						src={pokeDetail.img}
						alt={pokeDetail.img}
					/>
					<div className={style.pokedexContainer}>
						<img
							className={style.imgPokedex}
							src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'
							alt='Pokedex icon'
						/>
						<h3 className={style.pokedex}>{pokeDetail.pokedex}</h3>
					</div>

					<div className={style.statsContainer}>
						<div className={style.stats}>
							<img src={IconHeight} alt='IconHeight' />
							<h3>{pokeDetail.height}</h3>
						</div>
						<div className={style.stats}>
							<img src={IconWeight} alt='IconWeight' />
							<h3>{pokeDetail.weight}</h3>
						</div>
						<div className={style.stats}>
							<img src={IconSpeed} alt='IconSpeed' />
							<h3>{pokeDetail.speed}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
