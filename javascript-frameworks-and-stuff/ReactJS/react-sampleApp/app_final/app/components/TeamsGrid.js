import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const TeamsGrid = (props) => {
	return (
		<ul className="popular-list">
			{props.teams.map( (team, index) => {
				const teamId = team._links.self.href.split("/")[5]
				return (
					<li
						key={team.shortName}
						className="popular-item">
						<ul className="space-list-item">
							<li>
								<Link
									to={{
										pathname: "/equipo",
										search: `?teamId=${teamId}`
									}}>
									<img
										className="avatar"
										src={team.crestUrl}
										alt={`Avatar for ${team.name}`}/>
								</Link>
							</li>
							<li>@{team.name}</li>
						</ul>
					</li>
				)
			}
		)}
		</ul>
	)
}

TeamsGrid.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TeamsGrid;
