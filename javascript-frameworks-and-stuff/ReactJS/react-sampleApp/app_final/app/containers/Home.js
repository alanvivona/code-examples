import React, { Component } from "react"
import { Link } from "react-router-dom"
import api from "utils/api"

import Loading from "components/Loading"
import TeamsGrid from "components/TeamsGrid"

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			teams: [],
			error: ''
		}
	}

	componentDidMount() {
		api.getTeams().then(data => {
			this.setState({
				isLoading: false,
				teams: data.teams,
				error: ''
			})
		})
	}

	render () {
		return (
			<div className="home-container">
				<div className="image-container">
					<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1280px-Premier_League_Logo.svg.png" />
				</div>
				{this.state.isLoading
					? <Loading />
				: <TeamsGrid teams={this.state.teams}/>}
			</div>
		)
	}
}

export default Home
