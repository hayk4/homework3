//A function that takes at least three arguments and returns the result of some set of operations using those arguments 
const score = function(score1, score2, score3) {
	return score1 + score2 + score3;
};
const match1 = score (3, 5, 2);
console.log(match1);

//A function that takes no arguments and returns something
const sofarwithme = function() {
return "oke";
};
const lesson1 = sofarwithme();
console.log (lesson1);

//A function that takes arguments, does something but does not return anything 

const money = function(money1, money2){
	
};
const kangarumpaheq = money(100, 200);

//A function called fullName that takes as argument first name and last name and returns the full name of the person (first name concatenated with last name with a space in between)
const fullName = function(firstname, lastname); {
	return firstname +' ' + lastname;
}
const firstname = fullName('Christiano', 'Ronaldo')
console.log(firstname);

//A function that takes three strings and returns the string that is the longest.
const string = function(x, y, z,) {
	if (x.length > y.length && x.length > z.length) {
		return x;
	}
if (y.length > x.length && y.length > z.length) {
	return y;
	if (z.length > y.length && z.length > x.length) {
		return z;
	}
};
const word = string('how', 'to', 'pass' )
console.log word;

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger 
const ando = function(x, y) {
	if(x === y) {
		return 0;
	}
	if (x > y) {
		return 1;
	}
	if (x < y) {
		return -1;
	}
};
const mazmanyan = equal(-5, -4)
console.log (mazmanyan);

//A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1)

const truethy = function(x, y, z) {
	if (x) {
		return x;
	}
	esle if 󰀀 {
		return y;
	}
	if (z) {
		return z;
	}
};
const razag = truethy(NAN , '1', ' ');
console.log (razag);