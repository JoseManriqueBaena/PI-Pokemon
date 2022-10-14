import React, { useEffect } from 'react';
import Pokemons from '../Pokemons/Pokemons';
import SearchBar from '../SearchBar/SearchBar';
import Filterbutton from '../Filterbutton/Filterbutton';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../../redux/actions';

function Home() {
	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.types);

	useEffect(() => {
		//dispatch
		dispatch(getAllTypes());
	}, [dispatch]);

	return (
		<>
			<div>
				<div>
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
						all={'Defaul'}
						opciones={['Attack max', 'Attack min']}
					/>
					<SearchBar />
				</div>

				<Pokemons />
			</div>
		</>
	);
}
export default Home;
