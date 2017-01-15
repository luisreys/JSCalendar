var months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "Dicember"];
var num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var week_days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        // With getDay i get the week day from 0 - 6. Sunday is 0

var currentDate = new Date();
var dd = currentDate.getDate();  // 1 - 31
var mm = currentDate.getMonth();  // 0 - 11
var yyyy = currentDate.getFullYear();  // yyyy
var weekDay = currentDate.getDay();  // 0 - 6

