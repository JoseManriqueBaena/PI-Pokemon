import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonFilter } from '../../redux/actions';
import style from './TabsFilter.module.css';

export default function TabsFilter({ paginado }) {
	const [activated, setActivated] = useState({});
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	const handlerClick = (event) => {
		const clicked = event.target.name;

		activated[clicked]
			? setActivated({
					[clicked]: false,
			  })
			: setActivated({
					[clicked]: true,
			  });
		dispatch(pokemonFilter(clicked));
		paginado(1);
	};

	return (
		<>
			{loading ? null : (
				<div className={style.mainContainer}>
					<button
						name='All'
						onClick={handlerClick}
						className={`${style.buttonIzq} ${
							activated.All ? style.active : style.buttonClass
						}`}
					>
						All pokemons
					</button>
					<button
						name='Existing'
						onClick={handlerClick}
						className={activated.Existing ? style.active : style.buttonClass}
					>
						Existing
					</button>
					<button
						name='Created'
						onClick={handlerClick}
						className={`${
							activated.Created ? style.active : style.buttonClass
						} ${style.buttonDer}`}
					>
						Created
					</button>
				</div>
			)}
		</>
	);
}
