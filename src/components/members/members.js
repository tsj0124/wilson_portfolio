import "./members.css";

const Members = () => {
	return (
		<div className="container members-container">
			<h1 className="member-txt">Members</h1>
			<div className="member member-1">
				<div className="member-img"></div>
				<div className="member-info">
					<h1 className="name">Wilson</h1>
					<h3 className="position">Leader</h3>
					<h4 className="about">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						sapiente dolor nam fugiat voluptate, ab minima dolores consectetur
						ea laboriosam odio. Blanditiis dicta in voluptas impedit officiis
						fugiat harum expedita?
					</h4>
					<a href="#contact" className="contact-member">
						<span>contact</span>
					</a>
				</div>
			</div>

			<div className="member member-2">
				<div className="member-img"></div>
				<div className="member-info">
					<h1 className="name">Queenie</h1>
					<h3 className="position">Leader</h3>
					<h4 className="about">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						sapiente dolor nam fugiat voluptate, ab minima dolores consectetur
						ea laboriosam odio. Blanditiis dicta in voluptas impedit officiis
						fugiat harum expedita?
					</h4>
					<a href="#contact" className="contact-member">
						<span>contact</span>
					</a>
				</div>
			</div>

			<div className="member member-3">
				<div className="member-img"></div>
				<div className="member-info">
					<h1 className="name">Queenie</h1>
					<h3 className="position">Leader</h3>
					<h4 className="about">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						sapiente dolor nam fugiat voluptate, ab minima dolores consectetur
						ea laboriosam odio. Blanditiis dicta in voluptas impedit officiis
						fugiat harum expedita?
					</h4>
					<a href="#contact" className="contact-member">
						<span>contact</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Members;
