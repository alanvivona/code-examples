// standard deviantion

// -- data : one register of quantity of orders in the site per day
let orders = [3,5,6,8,19,12,32,3,3,4,5,7]
console.log(orders)

// -- avg value
let avgOrders = orders.reduce((total,o) => total + o,0) / orders.length
console.log(avgOrders)

// -- avg distance from the avg value

// calculate the difference between each day and the avg value
let dailyDifferences = orders.map(o => Math.abs(o - avgOrders)).map(diff => diff * diff)
console.log(dailyDifferences)

// this is standard deviation
let avgDifference = Math.sqrt(dailyDifferences.reduce((sum,diff) => sum + diff, 0) / dailyDifferences.length)
console.log(avgDifference)

// find outliners
let isOutlier = orders.map(o => (o - avgOrders) > avgDifference)
console.log(isOutlier)