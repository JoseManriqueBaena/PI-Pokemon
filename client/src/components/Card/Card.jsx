import React from 'react';
import style from './Card.module.css';

function Card({
	id,
	pokedex,
	name,
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
				<div className={style.mainContainer}>
					<h2 className={style.pokeName}>{name}</h2>
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
