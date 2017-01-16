var months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "Dicember"];
var num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var week_days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        // With getDay i get the week day from 0 - 6. Sunday is 0

var currentDate = new Date();
var dd = currentDate.getDate();  // 1 - 31
var mm = currentDate.getMonth();  // 0 - 11
var yyyy = currentDate.getFullYear();  // yyyy
var weekDay = currentDate.getDay();  // 0 - 6

var x;
var aux1, aux2 = 0;
var month = [];

aux2 = weekDay;
for (aux1 = dd; aux1 > 0; (aux1 = aux1 - 1)) {
    if (aux2 > 0) {
        aux2 = aux2 - 1;
    } else {
        aux2 = 6;
    }
}

// Now we know what the first day of this month was.

for (x = 0; x < num_days[mm]; (x = x + 1)) {
    
    month[x] = aux2;
    
    if (aux2 < 6) {
        aux2 = aux2 + 1;
    }else{
        aux2 = 0;
    }
}

//Here I already should have all the days with the weekly day.