import React from "react"
import PropTypes from "prop-types"

const PlayersGrid = (props) => {
	const players = props.players.map(player => (
		<tr key={player.jerseyNumber}>
			<td>{player.jerseyNumber}</td>
			<td>{player.name}</td>
			<td>{player.position}</td>
			<td>{player.nationality}</td>
		</tr>
	));
	return (
		<div className="players-grid">
			<h3>Jugadores</h3>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Posición</th>
						<th>Nacionalidad</th>
					</tr>
				</thead>
				<tbody>
					{players}
				</tbody>
			</table>
		</div>
	)
}

export default PlayersGrid
