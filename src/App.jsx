// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
import './App.css';
import Info from './Components/Info';
import About from './Components/About';
import Footer from './Components/Footer';
import Interests from './Components/Interests';

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
