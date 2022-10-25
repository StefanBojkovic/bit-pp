for (var a = 0; a <= 15; a++) {
    if (a % 2 == 0) {
        console.log(a + " je paran broj")
    } else {
        console.log(a + " je neparan broj")
    }
}

var zbir = 0;
for (i = 1; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        zbir += i
    }
};
console.log(zbir);

var array = [1, 2, 3, 4, 5, 6];
var z = 0;
var p = 1;
i;
for (i = 0; i < array.length; i++) {
    z += array[i];
    p *= array[i];
}
console.log('Zbir je ' + z + ' Proizvod je  ' + p);


var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var text = "";
for (i = 0; i < x.length; i++) {
    var element = x[i];
    text += element
}
console.log(text);

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];


var elementi = "";
for (i = 0; i < 1; i++) {
    elementi += a
}
console.log(elementi);

var zbir = 0;
for (i = 0; i <= 20; i++) {
    var broj = i * i
    zbir += broj
}
console.log(zbir);

var studenti = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var prosecnaOcena = 0;

for (var i = 0; i < studenti.length; i++) {
    prosecnaOcena += studenti[i][1];
    var ocena = (prosecnaOcena / studenti.length);
}

console.log("Prosecna ocena je " + (prosecnaOcena) / studenti.length);

if (ocena < 60) {
    console.log("Ocena je F");
}
else if (ocena < 70) {
    console.log("Ocena je D");
}
else if (ocena < 80) {
    console.log("Ocena je C");
} else if (ocena < 90) {
    console.log("Ocena je B");
} else if (ocena < 100) {
    console.log("Ocena je A");
}

for (i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}