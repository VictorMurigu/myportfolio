import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";




function App() {
	
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
