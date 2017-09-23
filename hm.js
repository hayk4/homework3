const func1=function(num1, num2, num3, num4) {
	return ((num1 + num2) * num3) / num4;
};
func1(10, 12, 2, 4);

const func2=function() {
	return 'Have a nice day';
};

const func3=function(str) {

console.log(str);
}; 
func3('Just smile');

const fullName=function(fName, lName) {
	return fName + ' ' + lName;
};
fullName('John', 'Mayer');

const strings=function(str1, str2, str3) {
	if (str1.length>=str2.length && str1.length>str3.length) {
return str1;
} else if (str2.length>str3.length) {
return str2;
}
return str3;
};
strings('I', 'love', 'coding');

const twoNumbers=function(num1, num2) {
	if (num1 === num2) {
		return 0;
}   else if (num1>num2) {
		return 1;
}   else {
	return -1;
};

const firstTruethy=function(val1, val2, val3) {
	if (true === val1) {
		return val1;
	} else if (true === val2) {
		return val2;
	} else if (true === val3) {
		return val3;
}
	};
	function('', NaN, 'AUA is home');