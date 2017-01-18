var months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "Dicember"];
var num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var week_days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        // With getDay i get the week day from 0 - 6. Sunday is 0

var currentDate = new Date();
var dd = currentDate.getDate();  // 1 - 31
var mm = currentDate.getMonth();  // 0 - 11
var yyyy = currentDate.getFullYear();  // yyyy
var weekDay = currentDate.getDay();  // 0 - 6

var x, y;
var aux1, aux2 = 0;
var month = [];
var tmp = 1;

aux2 = weekDay;
//console.log("aux2: " + aux2 + " dd: " + dd);
for (aux1 = dd - 1; aux1 > 0; aux1--) {
    if (aux2 > 0) {
        aux2 = aux2 - 1;
    } else {
        aux2 = 6;
    }
    //console.log(aux1 + ": " + aux2 + ", ");
}

// Now we know what the first day of this month was.

for (x = 0; x < num_days[mm]; x++ ){

    month[x] = aux2;

    if (aux2 < 6) {
        aux2 = aux2 + 1;
    }else{
        aux2 = 0;
    }
}

//Here I already should have all the days with the weekly day.

/* for (var i = 0; i < num_days[mm]; i++) {
  console.log(i + " " + month[i]);
}  */

for(y = month[0] + 1; y <= 7; y++){
  document.getElementById(String('pos'+ 1 + y)).innerHTML = tmp;
  tmp++;
}
for (x = 2; x < 7; x++) {
  for (y = 1; y <= 7; y++) {
    document.getElementById(String('pos'+ x + y)).innerHTML = tmp;
    tmp++;
  }
}
