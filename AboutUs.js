import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";
import AboutUs from './AboutUs/AboutUs'; //
import AboutUs from './AboutUs.module.css';
import Nav from './Nav.js';

const AboutUs = React.creatElement("div", {className: "aboutus",},
	React.createElement("h2" {title: "About us"})
	React.createElement("p" {text: "It is a long established fact that a reader will be distracted by the readable."}),
	<br>
	React.createElement("p" {text: "It is a long established."}),
	);
	const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(aboutus);

	function Timer() {
		const [count, setCount] = useState(0);

		useEffect(() => {
			let timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 2000);

		return () => clearTimeout(timer)
	}, []);

			return <h1>Com receita de destaque número {count}!</h1>;
		}
	//
	const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
	//
	const About = () => {
		return <h6>@ HSP Utensílios. Todos os direitos reservados.</h6>
	}
	export default About;
	//
	);
};