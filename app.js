/*** Chek String Occurence withing string ***/
var test1 = "thanks @syifa_ullinnas",
test2 = "thanks @heytacho, @syifa_ullinnas",
test3 = "thanks @syifa_ullinnas thanks @heytacho";

var thanks_index = test3.indexOf("thanks @");
console.log(thanks_index);


var thanks_index2 = test1.split('thanks @');

thanks_index2.forEach(function (item) {
    console.log(item);
});

/*********************************************/
