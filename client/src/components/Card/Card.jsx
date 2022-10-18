import React from 'react';
import style from './Card.module.css';
import IconSword from '../../img/icon_sword.svg';
import IconShield from '../../img/icon_shield.svg';
import { Link } from 'react-router-dom';

function Card({
	id,
	pokedex,
	name,
	attack,
	defense,
	img,
	types,
	typesImg,
	crateInDb,
	Types,
	imgDbPokemon,
}) {
	return (
		<>
			<div>
				<Link className={style.linkCard} to={`/home/${id}`}>
					<div className={style.mainContainer}>
						<h2 className={style.pokeName}>{name}</h2>
						<div className={style.statsContainer}>
							<div className={style.stats}>
								<img src={IconSword} alt='IconShield' />
								<h3>{attack}</h3>
							</div>
							<div className={style.stats}>
								<img src={IconShield} alt='IconShield' />
								<h3>{defense}</h3>
							</div>
						</div>

						<img className={style.imgPokemon} src={img} alt={img} />
						<div className={style.pokedexContainer}>
							<img
								className={style.imgPokedex}
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'
								alt='Pokedex icon'
							/>
							<h3 className={style.pokedex}>{pokedex}</h3>
						</div>

						<div className={style.containerTypes}>
							{crateInDb
								? Types?.map((type) => (
										<div className={style.types} key={`${type.name} ${id}`}>
											{imgDbPokemon[0]?.type === type.name ? (
												<img
													src={imgDbPokemon[0].url}
													alt={imgDbPokemon[0].url}
												/>
											) : (
												<img
													src={imgDbPokemon[1].url}
													alt={imgDbPokemon[1].url}
												/>
											)}
											<p>{type.name}</p>
										</div>
								  ))
								: types?.map((type) => (
										<div className={style.types} key={`${type} ${id}`}>
											{typesImg[0]?.type === type ? (
												<img src={typesImg[0].url} alt={typesImg[0].url} />
											) : null}
											{typesImg[1]?.type === type ? (
												<img src={typesImg[1].url} alt={typesImg[1].url} />
											) : null}
											<p className={style.types} key={`${name} ${type}`}>
												{type}
											</p>
										</div>
								  ))}
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}

export default Card;

/* 
types?.map((type) => (
	<>
		<p className={style.types}>{type}</p>
	</>
))
*/
