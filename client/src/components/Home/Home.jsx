import React from 'react';
import Pokemons from '../Pokemons/Pokemons';
import SearchBar from '../SearchBar/SearchBar';

function Home(props) {
	return (
		<>
			<div>
				<SearchBar />
				<Pokemons />
			</div>
		</>
	);
}
export default Home;
