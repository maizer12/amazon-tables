import { Route, Routes } from 'react-router-dom';
import './assets/style/main.scss';
import withLayout from './layout';
import { Home, Profiles } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile/:id' element={<Profiles />} />
		</Routes>
	);
}

export default withLayout(App);
