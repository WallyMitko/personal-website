import {Outlet} from "react-router-dom"

function MainContainer() {
	return (
		<div id="main">
			<Outlet />
		</div>
	)
}

export default MainContainer