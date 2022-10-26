import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import About from './components/About/About';
import { useState } from 'react';

function App() {
	//*Cache filters
	const [filters, setFilters] = useState({
		name: false,
		page: 1,
		type: 'Select type',
		order: 'Select filter',
		tabs: 'All',
	});

	const cacheFilters = (key, value, value2 = 1, value3 = false) => {
		setFilters({
			...filters,
			name: value3,
			page: value2,
			[key]: value,
		});
	};

	const cacheFiltersReset = () => {
		setFilters({
			name: false,
			page: 1,
			type: 'Select type',
			order: 'Select filter',
			tabs: 'All',
		});
	};

	return (
		<div className='App'>
			<Route path={'/home'} component={NavBar} />
			<Route path={'/pokecreate'} component={NavBar} />
			<Route path={'/about'} component={NavBar} />
			<Route exact path={'/'} component={Landing} />
			<Route
				exact
				path={'/home'}
				render={() => (
					<Home
						cacheFilters={cacheFilters}
						filters={filters}
						cacheFiltersReset={cacheFiltersReset}
					/>
				)}
			/>
			<Route exact path={'/pokecreate'} component={CreatePokemon} />
			<Route exact path={'/home/:id'} component={Detail} />
			<Route exact path={'/about'} component={About} />
		</div>
	);
}

export default App;
