import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// page imports
import Home from './pages/Home';

// component imports
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Home />
			<Footer />
		</div>
	);
}

export default App;
