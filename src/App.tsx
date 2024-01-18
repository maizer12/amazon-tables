import { Route, Routes } from 'react-router-dom';
import './assets/style/main.scss';
import withLayout from './layout';
import { Campaigns, Home, Profiles } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profile/:id' element={<Profiles />} />
			<Route path='/campaign/:id' element={<Campaigns />} />
		</Routes>
	);
}

export default withLayout(App);
