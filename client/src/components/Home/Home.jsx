import React, { useEffect } from 'react';
import Pokemons from '../Pokemons/Pokemons';
import SearchBar from '../SearchBar/SearchBar';
import Filterbutton from '../Filterbutton/Filterbutton';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../../redux/actions';
import style from './Home.module.css';
import TabsFilter from '../TabsFilter/TabsFilter';

function Home() {
	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getAllTypes());
	}, [dispatch]);

	return (
		<>
			<div>
				<div className={style.filterContainer}>
					<TabsFilter />
					<Filterbutton
						name={'Types'}
						all={'All types'}
						opciones={allTypes.map((type) => type.name)}
					/>
					<Filterbutton
						name={'Order'}
						all={'Ascending pokedex'}
						opciones={['Descending pokedex', 'A to Z', 'Z to A']}
					/>

					<Filterbutton
						name={'Attack'}
						all={'Max attack'}
						opciones={['Min attack', 'Max defense', 'Min defense']}
					/>
					<SearchBar />
				</div>

				<Pokemons />
			</div>
		</>
	);
}
export default Home;
