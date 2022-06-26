import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
	return (
		<div id="footer" className="container footer-container">
			<h1>
				2022 V1.0
				<a href="#home">
					<h2>
						<BsMouse />- scroll up -
					</h2>
				</a>
			</h1>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/siong-jie-wilson-ting-4186ab142/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin className="social" />
				</a>
				<a href="https://github.com/tsj0124" target="_blank" rel="noreferrer">
					<TiSocialGithub className="social" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
