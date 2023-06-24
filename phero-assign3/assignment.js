// https://github.com/Rokib-ru-cse/phero-assign3

function kilometerToMeter(kilometerValue) {
	kilometerValue = parseInt(kilometerValue);
	if (isNaN(kilometerValue)) {
		return "invalid input";
	}
	if (kilometerValue < 0) {
		return "distance cannot be negative"
	}
	return kilometerValue * 1000;
}

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {
	numberOfWatch = parseInt(numberOfWatch);
	numberOfMobile = parseInt(numberOfMobile);
	numberOfLaptop = parseInt(numberOfLaptop);

	if (isNaN(numberOfWatch) || isNaN(numberOfMobile) || isNaN(numberOfLaptop)) {
		return "invalid input,";
	}
	if (numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0) {
		return "amount cannot be negative"
	}

	return numberOfWatch * 50 + numberOfMobile * 100 + numberOfLaptop * 500;
}

function hotelCost(numberOfDays) {
	numberOfDays = parseInt(numberOfDays);
	if (isNaN(numberOfDays)) {
		return "invalid input";
	}
	if (numberOfDays < 0) {
		return "days cannot be negative"
	}

	if (numberOfDays <= 10) {
		return numberOfDays * 100
	}
	else if (numberOfDays > 10 && numberOfDays <= 20) {
		return (numberOfDays - 10) * 80 + 1000
	}
	else {
		return (numberOfDays - 20) * 50 + 800 + 1000;
	}
}

function megaFriend(allName) {
	if (allName == "" || allName.length == 0) {
		return "please enter some name";
	}

	for (name in allName) {
		if (Number.isInteger(parseInt(allName[name]))) {
			return "number cannot be a valid name";
		}
	}

	var nameLength = []
	for (name in allName) {
		nameLength.push(allName[name].length)
	}
	var maxLength = nameLength[0]
	var len = 0
	for (let i = 0; i < nameLength.length; i++) {
		len = nameLength[i]
		if (len >= maxLength) {
			maxLength = len
		}
	}
	var maxLengthName = "";
	for (name in allName) {
		if (maxLength == allName[name].length) {
			maxLengthName = allName[name]
			break
		}
		else {
			(maxLengthName = "invalid input");
		}
	}

	return maxLengthName;
}

var kilometerValue = kilometerToMeter(3)
console.log(kilometerValue)

var budgetCalculatorValue = budgetCalculator(1, 1, 1)
console.log(budgetCalculatorValue);

var hotelDays = hotelCost(21)
console.log(hotelDays);

var pHero = ['Foysal','Jhankar Mahbub','Mezbaul Abedin','Mujahid Islam','Israfil Hossen']
var maxLengthName = megaFriend(pHero)
console.log(maxLengthName);

