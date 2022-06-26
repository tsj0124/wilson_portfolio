import "./certificates.css";
import Skills from "../skills/skills";
function About() {
	return (
		<div>
			<div id="certificates" className="container certificates-container">
				<h1 className="certificates-txt">Certificates</h1>
				<div className="certificates certificates-1">
					<div className="certificates-img"></div>
					<div className="certificates-info">
						<h1 className="name">University of Technology Sarawak, Malaysia</h1>
						<h3 className="position">
							Bachelor in Engineering Technology (HONS) in Electrical &
							Electronic
						</h3>
						<h4 className="certificates-txt">(Sep 2013 to Feb 2017)</h4>
						<a
							href="https://www.uts.edu.my/"
							className="contact-certificates"
							target="_blank"
							rel="noreferrer"
						>
							<span>Link</span>
						</a>
					</div>
				</div>
			</div>
			<div className="container achievements-container">
				<h1 className="achievements-txt">Achievements</h1>
				<div className="achievements achievements-1 achievements">
					<div className="achievements-info">
						<h1 className="name">Final Year Project</h1>
						<h2>Embedded Surveillance Using Arduino and Android Interface</h2>
						<h4 className="achievements-txt">
							The project is based on using ARDUINO device, android technology
							and Wi-Fi module. In details, use the PIR sensor to install in our
							house to detect the human motions. When the sensor detects human
							motion in the security area, it will active the buzzer in home
							area and sends the signal to alert us that someone is in our
							house. Beside this, also install the light bulb, DC fans and DC
							door actuator to act as home appliance which controlled by the
							android phone.
						</h4>
						<h1 className="name">Bosch</h1>
						<h2>Test Coverage Checker Application Tool</h2>
						<h4 className="achievements-txt">
							The project is based on using Java Language to develop the GUI and
							source code. In details, fetch the data from oracle using SQL
							developer language and grab data from excel format file to do the
							comparison in order not to miss up any test and track the test
							sequence when modify the test scripts.
						</h4>
						<h1 className="name">Keysight</h1>
						<h2>Exe Application Window Form App (.net Framework)</h2>
						<h4 className="achievements-txt">
							Design the test script by using the C# and VB.net. Use the
							Keysight equipment (PNA, Spectrum Analyzer, DCPA, Signal
							Generator, Switch Driver and DMM) to develop the test process by
							supporting the attenuators project for S-Parameter measurement,
							current and resistance measurement. Export the data to txt or csv
							format and store the result inside the local drive.
						</h4>
					</div>
				</div>
			</div>

			<div className="container technologies-container">
				<Skills />
			</div>
		</div>
	);
}

export default About;
