import "whatwg-fetch"
import _ from "lodash"

const token = "5c632b23cb7e419b8e48ce482f7fe3f3"

const getTeams = () => {
	return fetch("http://api.football-data.org/v1/competitions/426/teams", {
		headers: { 'X-Auth-Token': token }
	}).then(res => res.json())
}

const getPositions = () => {
	return fetch("http://api.football-data.org/v1/competitions/426/leagueTable", {
		headers: { 'X-Auth-Token': token }
	}).then(res => res.json())
}

const getFixture = () => {
	return fetch("http://api.football-data.org/v1/competitions/426/fixtures", {
		headers: { 'X-Auth-Token': token }
	}).then(res => res.json())
		.then(res => _.groupBy(res.fixtures, 'matchday'))
}

const getStatistics = () => {
	return Promise.all(
		[getPositions(), getFixture()]
	)
}

const getTeam = (id) => {
	return fetch(`http://api.football-data.org/v1/teams/${id}`, {
		headers: { 'X-Auth-Token': token }
	}).then(res => res.json())
}

const getPlayersFromTeam = (id) => {
	return fetch(`http://api.football-data.org/v1/teams/${id}/players`, {
		headers: { 'X-Auth-Token': token }
	}).then(res => res.json())
}

const getTeamInfo = (id) => {
	return Promise.all([
		getTeam(id), getPlayersFromTeam(id)
	])
}


const api = {
	getTeams,
	getStatistics,
	getTeamInfo
}

export default api
