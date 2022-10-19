import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonId, getAllImgTypes } from '../../redux/actions';
import IconSword from '../../img/icon_sword.svg';
import IconShield from '../../img/icon_shield.svg';
import IconHp from '../../img/icon_hp.svg';
import IconSpeed from '../../img/icon_speed.svg';
import IconWeight from '../../img/icon_weight.svg';
import IconHeight from '../../img/icon_height.svg';
import IconShinyOn from '../../img/icon_shiny_on.svg';
import IconShinyOff from '../../img/icon_shiny_off.svg';
import style from './Detail.module.css';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

export default function Detail({ match }) {
	const [shiny, setShiny] = useState(false);

	const dispatch = useDispatch();
	const pokeDetail = useSelector((state) => state.pokeDetail);
	const loading = useSelector((state) => state.loading);
	const imgTypes = useSelector((state) => state.imgTypes);
	const pokeid = match.params.id;

	useEffect(() => {
		dispatch(getPokemonId(pokeid));
		dispatch(getAllImgTypes());
	}, [dispatch, pokeid]);

	const images = pokeDetail.crateInDb
		? pokeDetail.Types?.map((type) =>
				imgTypes.find((imgType) => imgType.type === type.name)
		  )
		: pokeDetail.types?.map((type) =>
				imgTypes.find((imgType) => imgType.type === type)
		  );

	const handlerClick = () => {
		shiny ? setShiny(false) : setShiny(true);
	};
	console.log(shiny);
	return (
		<>
			{loading ? (
				<Loading />
			) : Object.entries(pokeDetail).length ? (
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
						<div className={style.imgContainers}>
							<div onClick={handlerClick} className={style.containerShiny}>
								<img
									className={style.imgshiny}
									src={shiny ? IconShinyOn : IconShinyOff}
									alt={IconShinyOff}
								/>
							</div>

							<img
								className={style.imgPokemon}
								src={shiny ? pokeDetail.imgShiny : pokeDetail.img}
								alt={pokeDetail.img}
							/>
						</div>

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
						{/* TYPES */}
						<div className={style.containerTypes}>
							{pokeDetail.crateInDb
								? pokeDetail.Types?.map((type) => (
										<div
											className={style.types}
											key={`${type.name} ${pokeDetail.id}`}
										>
											<img
												src={
													images.find((element) => element.type === type.name)
														.url
												}
												alt={type.name}
											/>
											<h3>{type.name}</h3>
										</div>
								  ))
								: pokeDetail.types?.map((type) => (
										<div
											className={style.types}
											key={`${type} ${pokeDetail.id}`}
										>
											<img
												src={
													images.find((element) => element.type === type).url
												}
												alt={type.name}
											/>
											<h3
												className={style.types}
												key={`${pokeDetail.name} ${type}`}
											>
												{type}
											</h3>
										</div>
								  ))}
						</div>
					</div>
				</div>
			) : (
				<NotFound />
			)}
		</>
	);
}
