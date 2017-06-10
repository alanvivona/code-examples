import React from "react"
import PropTypes from "prop-types"

const Positions = (props) => {
	
	const { leagueCaption, matchday, standing } = props.positions
	
	const positionList = standing.map(team => (
		<tr key={team.teamName}>
			<td>{team.position}</td>
			<td>{team.teamName}</td>
			<td>{team.points}</td>
			<td>{team.playedGames}</td>
			<td>{team.wins}</td>
			<td>{team.draws}</td>
			<td>{team.losses}</td>
			<td>{team.goalDifference}</td>
			<td>{team.goals}</td>
			<td>{team.goalsAgainst}</td>
		</tr>
	))
	return (
		<div className="positions">
			<div className="row">
				<h1>{leagueCaption}</h1>
			</div>

			<div className="row table">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Equipo</th>
							<th>Pts</th>
							<th>Pj</th>
							<th>G</th>
							<th>E</th>
							<th>P</th>
							<th>DG</th>
							<th>GA</th>
							<th>GC</th>
						</tr>
					</thead>
					<tbody>
						{positionList}
					</tbody>
				</table>
			</div>
		</div>
	)
}

Positions.propTypes = {
	positions: PropTypes.object.isRequired
}

export default Positions
