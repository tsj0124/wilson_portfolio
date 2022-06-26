import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
	return (
		<div id="contact" className="container contact-container">
			<h1>Contact</h1>
			<div className="contact-links">
				<a href="#contact" className="contact whatsapp">
					<AiOutlineWhatsApp className="icon" />
					<h2>
						Whatsapp <span>+60 16-575 7280</span>
					</h2>
				</a>

				<a href="#contact" className="contact instagram">
					<AiOutlinePhone className="icon" />
					<h2>
						Mobile <span>+60 16-575 7280</span>
					</h2>
				</a>

				<a href="#contact" className="contact email">
					<AiOutlineMail className="icon" />
					<h2>
						Email <span>tsj6181@hotmail.com</span>
					</h2>
				</a>
			</div>
		</div>
	);
}
export default Contact;
