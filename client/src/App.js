import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
// import Loading from './components/Loading/Loading';

function App() {
	return (
		<div className='App'>
			{/* <Route path={'/loading'} component={Loading} /> */}
			<Route path={'/home'} component={NavBar} />
			<Route path={'/pokecreate'} component={NavBar} />
			<Route path={'/about'} component={NavBar} />
			<Route exact path={'/'} component={Landing} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/pokecreate'} component={CreatePokemon} />
			<Route exact path={'/home/:id'} component={Detail} />
		</div>
	);
}

export default App;
