import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "components/Nav"
import Home from "containers/Home"
import Estadisticas from "containers/Estadisticas"
import Equipo from "containers/Equipo"
import Contacto from "containers/Contacto"

class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/estadisticas" component={Estadisticas} />
						<Route path="/equipo" component={Equipo} />
						<Route path="/contacto" component={Contacto} />
						<Route render={() => <p>Not Found</p>}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default Routes
