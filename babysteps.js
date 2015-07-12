var numbers = process.argv.slice(2);
var sum = 0;
numbers.forEach(function(num){
	sum += Number(num);
});
console.log(sum);

/** Official solution:
	var result = 0
	for (var i = 2; i < process.argv.length; i++)
		result += Number(process.argv[i])

	console.log(result)
*/