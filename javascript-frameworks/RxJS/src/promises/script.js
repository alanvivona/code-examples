
const p = new Promise((resolve, reject) =>{
	console.log('creating promise')	
	setTimeout(() => {
		resolve('hello from promise')
		console.log('');
	}, 1000)
	// if(true) { reject('promise rejected') }
})

p.then(
	resolve => console.log(resolve),
	reject => console.log(reject),
)

