import "./home.css";
import img from "../props/wilson.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
	return (
		<div id="home" className="container home-container">
			<div className="logo">
				<div className="main-img">
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
					<span className="circle"></span>
				</div>
				<img src={img} alt="" />
			</div>

			<a href="#footer" className="scroll-down">
				<hr />
				<h5>scroll down</h5>
				<BsMouse className="scroll" />
				<hr />
			</a>
			<h2>
				<span>About Me</span> <br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi eos
					doloribus, natus maxime autem cupiditate error beatae sint voluptatem
					accusantium ipsa tempora! Aspernatur quis fuga atque minus,
					praesentium distinctio!
				</p>
			</h2>
			<Buttons />
		</div>
	);
}
const toggle = document.querySelector(".main-img");
if (toggle) {
	toggle.addEventListener("click", () => {
		toggle.classList.toggle("active");
	});
}
export default Home;
