import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Pages.module.css';

export default function Pages({
	maxPokemonsPage,
	pokemons,
	paginado,
	activated,
	handleActivated,
}) {
	const loading = useSelector((state) => state.loading);

	const handlerClick = (event, number) => {
		paginado(number);
		handleActivated(event.target.name);
	};

	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(pokemons / maxPokemonsPage) - 1; i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<>
			{loading ? null : (
				<div className={style.mainContainer}>
					<ul className={style.uList}>
						{pageNumbers?.map((number) => (
							<li key={number} className={style.numberPage}>
								<a
									name={number}
									className={`${
										activated[number] ? style.active : style.aNumber
									}`}
									onClick={(event) => handlerClick(event, number)}
								>
									{number}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}
