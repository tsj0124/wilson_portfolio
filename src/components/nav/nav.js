import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiInfoOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import "./nav.css";

const initialState = {
	home: true,
	about: false,
	members: false,
	contact: false,
	footer: false,
};

function Navbar() {
	const [isActive, setIsActive] = useState(initialState);

	const handleClick = (param) => {
		setIsActive((prevState) => ({
			...prevState,
			initialState,
		}));

		if (param === "home") {
			setIsActive((prevState) => {
				return { prevState, home: (prevState = true) };
			});
		} else if (param === "about") {
			setIsActive((prevState) => {
				return { prevState, about: (prevState = true) };
			});
		} else if (param === "members") {
			setIsActive((prevState) => {
				return { prevState, members: (prevState = true) };
			});
		} else if (param === "contact") {
			setIsActive((prevState) => {
				return { prevState, contact: (prevState = true) };
			});
		} else if (param === "footer") {
			setIsActive((prevState) => {
				return { prevState, footer: (prevState = true) };
			});
		}
	};

	const changevalueonScroll = () => {
		const scrollvalue = document.documentElement.scrollTop;
		if (scrollvalue < 400) {
			setIsActive((prevState) => {
				return { prevState, home: (prevState = true) };
			});
		} else if (scrollvalue > 400 && scrollvalue < 1200) {
			setIsActive((prevState) => {
				return { prevState, about: (prevState = true) };
			});
		} else if (scrollvalue > 1200 && scrollvalue < 4800) {
			setIsActive((prevState) => {
				return { prevState, members: (prevState = true) };
			});
		} else if (scrollvalue > 4800 && scrollvalue < 5200) {
			setIsActive((prevState) => {
				return { prevState, contact: (prevState = true) };
			});
		} else if (scrollvalue > 5200 && scrollvalue < 5300) {
			setIsActive((prevState) => {
				return { prevState, footer: (prevState = true) };
			});
		}
		//console.log(scrollvalue);
	};

	window.addEventListener("scroll", changevalueonScroll);

	return (
		<div className="navigation">
			<a href="#home">
				<AiOutlineHome
					className={isActive.home ? "icon active-nav" : "icon"}
					onClick={() => handleClick("home")}
				/>
			</a>
			<a href="#about">
				<AiOutlineUser
					className={isActive.about ? "icon active-nav" : "icon"}
					onClick={() => handleClick("about")}
				/>
			</a>
			<a href="#experiences">
				<TiInfoOutline
					className={isActive.members ? "icon active-nav" : "icon"}
					onClick={() => handleClick("members")}
				/>
			</a>
			<a href="#contact">
				<BiMessageRoundedDots
					className={isActive.contact ? "icon active-nav" : "icon"}
					onClick={() => handleClick("contact")}
				/>
			</a>
			<a href="#footer">
				<BsArrowDownCircle
					className={isActive.footer ? "icon active-nav" : "icon"}
					onClick={() => handleClick("footer")}
				/>
			</a>
		</div>
	);
}

let Icons = document.querySelectorAll(".navigation .icon");

Icons.forEach((icon) => {
	icon.addEventListener("click", () => {
		changeactive();
		icon.classList.add("active-nav");
	});
});

function changeactive() {
	Icons.forEach((icon) => {
		icon.classList.remove("active-nav");
	});
}

export default Navbar;
