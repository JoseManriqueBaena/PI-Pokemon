import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<div className='App'>
			<Route path={'/home'} component={NavBar} />
			<Route exact path={'/'} component={Landing} />
			<Route exact path={'/home'} component={Home} />
		</div>
	);
}

export default App;
