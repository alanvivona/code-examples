import React, { Component } from "react"
import PropTypes from "prop-types"
import queryString from "query-string"
import api from "utils/api"
import Loading from "components/Loading"
import PlayersGrid from "components/PlayersGrid"

class Equipo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			avatar: '',
			team: '',
			players: []
		}
	}
	componentDidMount() {
		const query = queryString.parse(this.props.location.search);
		api.getTeamInfo(query.teamId)
			.then(data => {
				this.setState({
					isLoading: false,
					avatar: data[0].crestUrl,
					name: data[0].name,
					players: data[1].players
				})
			})
	}
	render() {
		return (
			<div className="equipo-container">
				{this.state.isLoading
					? <Loading text="cargando"/>
				:<div>
						<div className="head">
							<img src={this.state.avatar}/>
							<h1>{this.state.name}</h1>
						</div>
						<PlayersGrid players={this.state.players} />
					</div>}
			</div>
		)
	}
}

export default Equipo
