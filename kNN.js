

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

}

