
// Observe a button click - Observable from event
const btn = document.querySelector("#btn")
const btnStream$ = Rx.Observable.fromEvent(btn, 'click')
btnStream$.subscribe(
	function(e){
		console.log(e);
	},
	function(err){
		console.log(err);
	}//,
	//function(){
	//	console.log('completed');
	//}
)

// observe an input keyup - Observable from event
const input = document.querySelector("#input")
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')
inputStream$.subscribe(
	function(e){
		console.log(e.target.value);
		console.log(e);
	},
	function(err){
		console.log(err);
	}//,
	//function(){
	//	console.log('completed');
	//}
)

// observe an array and build list in the DOM with it - Observable from array
const posts = [
	{title: 'Post one', body:'body one'},
	{title: 'Post two', body:'body two'},
	{title: 'Post three', body:'body three'},
	{title: 'Post four', body:'body four'}
]

const posts$ = Rx.Observable.from(posts)
posts$.subscribe(
	post => {
		document.querySelector('#posts').innerHTML = document.querySelector('#posts').innerHTML + 
		'<li>' + 
			'<h3>' + post.title + '</h3>' + 
			'<p>' + post.body + '</p>'+ 
		'</li>'
	},
	err => {
		console.log(err);
	},
	completed => {
		document.querySelector('#posts').innerHTML = document.querySelector('#posts').innerHTML +
		'<li>' + 
			'<h3>Total items</h3>' + 
			'<p>' + posts.length + '</p>'+ 
		'</li>'
	}
)

// build an observable from scratch
const source$ = new Rx.Observable(
	observer => {
		console.log('Creating observable')

		observer.next('value 1')
		observer.next('value 2')

		setTimeout(() => {
			observer.next('Last value')
			observer.complete()
		}, 2000)

		// observer.error(new Error('This is an error'))

	}
)

source$.subscribe(
	x => {
		console.log(x);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
)