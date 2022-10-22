import React, { useEffect, useState } from 'react';
import Pokemons from '../Pokemons/Pokemons';
import SearchBar from '../SearchBar/SearchBar';
import Filterbutton from '../Filterbutton/Filterbutton';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllPokemos,
	getAllTypes,
	orderFilter,
	refresh,
} from '../../redux/actions';
import style from './Home.module.css';
import TabsFilter from '../TabsFilter/TabsFilter';
import Pages from '../Pages/Pages';

function Home() {
	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.types);
	const pokemons = useSelector((state) => state.pokemonsFiltered);
	const loading = useSelector((state) => state.loading);
	const [order, setOrder] = useState('');
	const [activated, setActivated] = useState({
		1: true,
	});
	const [activatedTabs, setActivatedTabs] = useState({
		All: true,
	});
	//pag
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPokemonsPage, setMaxPokemonsPage] = useState(12);
	const lastPokemon = currentPage * maxPokemonsPage;
	const firstPokemon = lastPokemon - maxPokemonsPage;
	const pokemonsPerPage = pokemons.slice(firstPokemon, lastPokemon);

	const paginado = (page) => {
		setCurrentPage(page);
	};

	const ordenado = (value) => {
		setOrder(`Ordenado ${value}`);
	};

	const tabsActivated = (clicked) => {
		setActivatedTabs({
			[clicked]: true,
		});
	};

	const handleActivated = (value = 1) => {
		const clicked = value;
		setActivated({
			[clicked]: true,
		});
	};

	const handleClick = (event) => {
		paginado(1);
		handleActivated(1);
		tabsActivated('All');
		dispatch(refresh());
		dispatch(orderFilter('Ascending pokedex'));
	};

	useEffect(() => {
		dispatch(getAllTypes());
		dispatch(getAllPokemos());
	}, []);

	return (
		<>
			<div className={style.mainContainer}>
				{
					<div className={style.filterContainer}>
						<TabsFilter
							paginado={paginado}
							activated={activatedTabs}
							fnActivated={tabsActivated}
						/>
						<Filterbutton
							defaultOption={'Select type'}
							name={'Types'}
							all={'All types'}
							opciones={allTypes.map((type) => type.name)}
							paginado={paginado}
							ordenado={ordenado}
							handleActivated={handleActivated}
						/>
						<Filterbutton
							defaultOption={'Select filter'}
							name={'Order'}
							all={'Ascending pokedex'}
							opciones={['Descending pokedex', 'A to Z', 'Z to A']}
							paginado={paginado}
							ordenado={ordenado}
							handleActivated={handleActivated}
						/>

						<Filterbutton
							defaultOption={'Select filter'}
							name={'Attack'}
							all={'Max attack'}
							opciones={['Min attack', 'Max defense', 'Min defense']}
							paginado={paginado}
							ordenado={ordenado}
							handleActivated={handleActivated}
						/>
						<SearchBar paginado={paginado} />
						{loading ? null : (
							<button className={style.buttonRefresh} onClick={handleClick}>
								Refresh
							</button>
						)}
					</div>
				}
				<Pokemons pokemons={pokemonsPerPage} />
				{pokemons.length <= 12 ? undefined : (
					<Pages
						activated={activated}
						handleActivated={handleActivated}
						maxPokemonsPage={maxPokemonsPage}
						pokemons={pokemons.length}
						paginado={paginado}
					/>
				)}
			</div>
		</>
	);
}
export default Home;
