let countDownFrom = (n) => {
	console.log(n)
	if(n==0) return;
	countDownFrom(n-1)
}

countDownFrom(10)