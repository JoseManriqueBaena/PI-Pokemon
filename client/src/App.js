import './App.css';
import Pokemons from './components/Pokemons/Pokemons';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route } from 'react-router-dom';
import Card from './components/Card/Card';

function App() {
	return (
		<div className='App'>
			<Route exact path={'/'} component={Landing} />
			<Route exact path={'/home'} component={Home} />
		</div>
	);
}

export default App;
