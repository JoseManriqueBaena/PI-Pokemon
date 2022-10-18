import React, { useState } from 'react';
import style from './Pages.module.css';

export default function Pages({ maxPokemonsPage, pokemons, paginado }) {
	const [activated, setActivated] = useState({});

	const handlerClick = (event, number) => {
		const clicked = event.target.name;
		paginado(number);
		setActivated({
			[clicked]: true,
		});
	};

	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(pokemons / maxPokemonsPage) - 1; i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<>
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
		</>
	);
}
