import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { navigation, extraRoutes } from './utils/navigation';
import { theme } from './theme';
import Footer from './components/footer';

export default function App() {

	const renderRoutes = routes => {
		let allRoutes = routes.map(nav => {
			if (nav.subelements?.length > 0) {
				let routes = [];
				routes = renderRoutes(nav.subelements);
				routes.push(
					<Route path={nav.url} element={nav.element} key={nav.id} />
				);
				return routes;
			}
			return <Route path={nav.url} element={nav.element} key={nav.id} />;
		});

		return allRoutes.flat();
	};
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Routes>{renderRoutes([...navigation, ...extraRoutes])}</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}
