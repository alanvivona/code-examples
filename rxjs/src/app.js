import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');


const btn = document.querySelector("#btn");
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(
	function(e){
		console.log(e);
	},
	function(err){
		console.log(err);
	},
	//function(){
	//	console.log('completed');
	//}
);

const input = document.querySelector("#input");
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(
	function(e){
		console.log(e.target.value);
		console.log(e);
	},
	function(err){
		console.log(err);
	},
	//function(){
	//	console.log('completed');
	//}
);

const posts = [
	{title: 'Post one', body:'body one'},
	{title: 'Post two', body:'body two'},
	{title: 'Post three', body:'body three'},
	{title: 'Post four', body:'body four'},
]

const posts$ = Rx.Observable.from(posts)
posts$.subscribe(
	function(post){
		console.log(post);
		document.querySelector('#posts').innerHTML = document.querySelector('#posts').innerHTML + 
		'<li>' + 
			'<h3>' + post.title + '</h3>' + 
			'<p>' + post.body + '</p>'+ 
		'</li>'
	},
	function(err){
		console.log(err);
	},
	//function(){
	//	console.log('completed');
	//}
);


// observable from scratch

const source$ = new Rx.Observable(
	observer => {
		console.log('Creating observable')

		observer.next('value 1')
		observer.next('value 2')

		setTimeout(() => observer.next('Last value'), 2000)

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