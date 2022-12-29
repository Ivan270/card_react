// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import Interests from './components/Interests';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="card_container">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}

export default App;
