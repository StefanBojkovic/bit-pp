var a = [5, -4.2, 3, 7];
var e = 3;
for (i = 0; i < a.length; i++) {
    var element = a[i]
    if (element == e) {
        console.log("yes")
        break;
    }
};

// Write a program that multiplies every positive element of a given array by 2.

var a = [-3, 11, 5, 3.4, -8];
var b = [];

for (i = 0; i < a.length; i++) {
    var element = a[i];
    if (element > 0) {
        b.push(element * 2);
    } else {
        b.push(element);
    }
}
console.log(b);

// Write a program that finds the minimum of a given array and prints out its value and
// index.

var a = [4, 2, 2, -1, 6];
var najmanji = a[0];

for (i = 0; i < a.length; i++) {
    if (a[i] < najmanji) {
        najmanji = a[i]
        indeks = i;
    }
}
console.log("Najmanji broj je " + najmanji + " , a njegov indeks je u nizu je " + indeks);

// Write a program that finds the first element larger than minimum and prints out its value.

var a = [4, 2, 2, -1, 6];
var b = a[0];

for (i = 0; i < a.length; i++) {
    if (a[i] < b) {
        b = a[i]
        var a = delete a[i];
        for (i = 0; i < a.length; i++) {
            if (a[i] < b) {
                b = a[i]
                break;
            }
        }
    }
}

console.log(b);

// Write a program that calculates the sum of positive elements in the array. 

var a = [3, 11, -5, -3, 2];
var zbir = 0;
for (i = 0; i < a.length; i++){
    var element = a[i];
    if (element > 0 ) {
        zbir+=element
    }
}
console.log(zbir);

// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.

var a = [2, 4, -2, 7, -2, 4, 2];
