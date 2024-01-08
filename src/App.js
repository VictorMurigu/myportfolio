import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState } from "react";



function App() {
	const [loading, setLoading] = useState(true);
	return (
		<div className="main">
			<Navbar className="nav" />
			<Intro />
			<Skills />
			<Works />
			<Contact />
			<Footer/>
		</div>
	);
}

export default App;
