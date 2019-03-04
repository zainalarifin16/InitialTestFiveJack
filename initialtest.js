var notSelfNumber = [];
var allNumbers = [];

for (var i = 1; i <= 5000; i++) {
    var j = i.toString();
    var sumCurrentNumber = i;
    lengthChar = j.length;
    allNumbers.push(i);
    // console.log(lengthChar, i);
    console.log(" ==== ");
    for (var k = 0; k < lengthChar; k++) {
        console.log( sumCurrentNumber, parseInt(j[k]) );
        sumCurrentNumber += parseInt(j[k]);
    }
    console.log(" ==== ");
    console.log(sumCurrentNumber);
    notSelfNumber.push(sumCurrentNumber);
}

// console.log(allNumbers, notSelfNumber);

var selfNumbers = notSelfNumber
    .concat(allNumbers)
    .filter(function (e, i, array) {
        if(array.indexOf(e) == array.lastIndexOf(e)){
            // console.log(array.indexOf(e), array.lastIndexOf(e), e);
        }
        return array.indexOf(e) == array.lastIndexOf(e);
    });
// console.log(selfNumbers);
var sumSelfNumbers = 0;
selfNumbers.forEach(element => {
    // console.log(element);
    sumSelfNumbers += element;
});

console.log("sum all self-numbers : ", sumSelfNumbers);
