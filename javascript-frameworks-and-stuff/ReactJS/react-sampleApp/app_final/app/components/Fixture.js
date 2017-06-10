import React from "react"
import PropTypes from "prop-types"

const Fixture = (props) => {
	let fechasCollection = []
	_.forIn(props.fixture, function(value, key) {
		fechasCollection.push(value)
	});
	const fechas = fechasCollection.map((fecha, index) => (
		<table key={index} className="fechas">
			<thead>
				<tr><th colSpan="5">Match {index+1}</th></tr>
			</thead>
			<tbody>
				{fecha.map((partido, index) => (
					<tr key={index}>
						<td className="score">{partido.result.goalsHomeTeam !== null ? partido.result.goalsHomeTeam : "-"}</td>
						<td>{partido.homeTeamName}</td>
						<td>vs</td>
						<td>{partido.awayTeamName}</td>
						<td className="score">{partido.result.goalsAwayTeam !== null ? partido.result.goalsAwayTeam : "-"}</td>
					</tr>
				))}
			</tbody>
		</table>
	))
	return (
		<div className="fixture">
			{fechas}
		</div>
	)
}

Fixture.propTypes = {
	fixture: PropTypes.object.isRequired
}

export default Fixture
