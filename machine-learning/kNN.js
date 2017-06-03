
	let Node = function(obj){
		// copy the properties from the parameter object
		for (let prop in obj) {
			this[prop] = obj[prop]
		}
	}

	// k is the parameter that specifies the number of enarest neigthbours to search for
	let NodeList = function (k) {

		this.k = k
		this.nodes = []

		// IMPORTANT : We have to normalize the data
		// -- This is used to compare all the features like they weight all the same
		// -- This can also be modified if some of the features are really more important than others but this example does not cover that case
		// -- In order to do so we have to find the max and min value of every feture in the entire list

		this.calculateRanges = function (exclude) {
			let ranges = {}

			for (let i in this.nodes) {
				for (let prop in this.nodes[i]) {
					if (prop != exclude) {

						let value = this.nodes[i][prop]
						if (!ranges.hasOwnProperty(prop)) {
							ranges[prop] = {min: 1000000, max: 0}
						}

						if (value < ranges[prop].min) {
							ranges[prop].min = value
						}

						if (value > ranges[prop].max) {
							ranges[prop].max = value
						}
					}
				}
			}

			for (let prop in ranges) {
				ranges[prop].range = ranges[prop].max - ranges[prop].min
			}

			return ranges;
		}

		this.getDistance = function (nodeA, nodeB, ranges) {
			let distances = []
			for (let prop in ranges) {
				distances.push(nodeA[prop] - nodeB[prop] / ranges[prop].range)
			}

			let summ = distances.reduce(function(a,b){
				return a + b*b
			}, 0)
			return Math.sqrt(sum)

		}

		this.gessType = function (toFind) {

			let nearestNeighbors = []

			for (let i = 0; i < this.nodes.length; i++) {
				let node = this.nodes[i]
				node.distance = this.getDistance(node, toFind)
				nodes.push(node)
			}

			nodes.sort(function(na,nb){
				return na.distance - nb.distance
			})

			nearestNeighbors = nodes.splice(0, this.k)

			return nearestNeighbors

		}

	}


// Testing

let data = [
	{rooms: 1	,area:350	, type: 'apartment'},
	{rooms: 2	,area:300	, type: 'apartment'},
	{rooms: 3	,area:300	, type: 'apartment'},
	{rooms: 4	,area:250	, type: 'apartment'},
	{rooms: 4	,area:500	, type: 'apartment'},
	{rooms: 4	,area:400	, type: 'apartment'},
	{rooms: 5	,area:450	, type: 'apartment'},
	{rooms: 7	,area:850	, type: 'house'},
	{rooms: 7	,area:900	, type: 'house'},
	{rooms: 7	,area:1200, type: 'house'},
	{rooms: 8	,area:1500, type: 'house'},
	{rooms: 9	,area:1300, type: 'house'},
	{rooms: 8	,area:1240, type: 'house'},
	{rooms: 9	,area:1000, type: 'house'},
	{rooms: 1	,area:800	, type: 'flat'},
	{rooms: 3	,area:900	, type: 'flat'},
	{rooms: 2	,area:700	, type: 'flat'},
	{rooms: 2	,area:1150, type: 'flat'},
	{rooms: 1	,area:1000, type: 'flat'},
	{rooms: 2	,area:1200, type: 'flat'},
	{rooms: 1	,area:1300, type: 'flat'},
]

var nodeList = new kNNSpace.NodeList(3)
for (let i = 0; i < data.length; i++) {
	nodeList.nodes.push(new kNNSpace.Node(data[i]))
}

console.log('List: ', nodeList.nodes);
console.log('Ranges: ', nodeList.calculateRanges('type'));
