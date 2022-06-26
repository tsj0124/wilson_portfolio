import Header from "./components/header/header";
import Navbar from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Experiences from "./components/experiences/experiences";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Certificates from "./components/certificates/certificates";

function App() {
	return (
		<div className="App">
			<div className="bg-circle1"></div>
			<div className="bg-circle2"></div>
			<Header />
			<Navbar />
			<Home />
			<About />
			<Experiences />
			<Certificates />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
