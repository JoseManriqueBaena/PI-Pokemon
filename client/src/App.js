import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';

function App() {
	return (
		<div className='App'>
			<Route path={'/home'} component={NavBar} />
			<Route path={'/pokecreate'} component={NavBar} />
			<Route exact path={'/'} component={Landing} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/home/:id'} component={Detail} />
			<Route exact path={'/pokecreate'} component={CreatePokemon} />
		</div>
	);
}

export default App;
