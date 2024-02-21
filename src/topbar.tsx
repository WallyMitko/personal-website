import { Link } from "react-router-dom"

function TopBar() {
	return (
		<div id="top-bar">
			<h1 id="top-bar-heading">Cameron Bourdeau</h1>
			<nav id="top-bar-nav">
				<div className="top-bar-nav-item">
					<Link to="/resume" className="nav-link">Resume</Link>
				</div>
				<div className="top-bar-nav-item">
					<Link to="/portfolio" className="nav-link">Portfolio</Link>
				</div>
				<div className="top-bar-nav-item">
					<Link to="/contact" className="nav-link">Contact</Link>
				</div>
			</nav>
		</div>
	)
}

export default TopBar