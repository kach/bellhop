function sundayDate(now) {
	try {
		now.getDate();
	} catch(exceptionVar) {
		return;
	}
	
	var year = now.getYear();
	var day = now.getDay();
	var date = now.getDate();
	var month = now.getMonth();
	
	date -= day;
	
	if(date < 1) {
		month--;
		if(month < 0) {
			year--;
			month = 11;
			date += getMonthDays(month)
		} else {
			date += getMonthDays(month);
		}
	}
	
	var monthStr = "";
	if(month / 10 < 1)
		monthStr += "0" + month;
	else
		monthStr += month;
	
	var dateStr = "";
	if(date / 10 < 1)
		dateStr += "0" + date;
	else
		dateStr += date;
	
	return monthStr + dateStr;
}

//Returns true if the year is a leap year, false if not
function isLeapYear(year) {
	if(year % 100 === 0)
		return (year % 400 === 0 && year % 4 === 0);
	else
		return (year % 4 === 0);
}

//returns the amount of days in a particular month 
//(0 aka january will return 31, february 28 or 29, etc.)
function getMonthDays(month, leapYear) {
	if(month == 2)
		if(leapYear)
			return 29;
		else
			return 28;
	if(month < 7)
		if(month % 2 === 0)
			return 31;
		else
			return 30;
	else
		if(month % 2 === 0)
			return 30;
		else
			return 31;
}