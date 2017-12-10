/*** Chek String Occurence withing string ***/
var test1 = "thanks @syifa_ullinnas",
test2 = "thanks @heytacho, @syifa_ullinnas",
test3 = "thanks @syifa_ullinnas dan sdfasdfsadf thanks @heytacho asdfsdf";

var thanks_index = test2.indexOf("thanks @");
console.log(thanks_index);


var thanks_index2 = test3.split('thanks @');

thanks_index2.forEach(function (item) {
    var temp = item.split(" ");
    console.log(temp[0]);
});

/*********************************************/
