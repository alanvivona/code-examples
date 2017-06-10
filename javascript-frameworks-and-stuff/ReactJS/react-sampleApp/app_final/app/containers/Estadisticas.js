import React, { Component } from "react"
import { Link } from "react-router-dom"
import api from "utils/api"

import Loading from "components/Loading"
import Positions from "components/Positions"
import Fixture from "components/fixture"

class Estadisticas extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			positions: {},
			fixture: {}
		}
	}

	componentDidMount() {
		document.title = "Premier League App - estadísticas"
		api.getStatistics()
			.then(data => {
				this.setState({
					isLoading: false,
					positions: data[0],
					fixture: data[1]
				})
			})
	}

	render() {
		return (
			<div className="stats-container">
				{this.state.isLoading
					? <Loading />
				: <div>
					<Positions positions={this.state.positions} />
					<Fixture fixture={this.state.fixture} />
				</div>}
			</div>
		)
	}
}

export default Estadisticas
