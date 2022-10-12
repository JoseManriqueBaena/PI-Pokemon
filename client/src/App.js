import './App.css';
import Cards from './components/Cards/Cards';
import { Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Landing from './components/Landing/Landing';

function App() {
	return (
		<div className='App'>
			<Route exact path={'/'} component={Landing} />
			<Route path={'/home'} component={Cards} />
		</div>
	);
}

export default App;
