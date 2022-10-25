var a = 3;
var b = -7;
var c = 2;
if (a*b*c > 0) {
console.log("The product is positive.");
} else if (a*b*c == 0) {
    console.log("The product is 0");
} else {
        console.log ("The product is -, or negative");
    };

var a = -5;
var b = -6; 
var c = 0;
var d = -1;

if (a>b && a>c && a>d) {
    console.log(a + " is the highest");
} else if(b>a && b>c && b>d){
    console.log(b + "is the highest");
} else if (c>a && c>b && c>d){
    console.log(c + " is the highest");
} else {
    console.log(d + " is the highest");
};

var a = 0;
var b = -1;
var c = 4;

if(a>b && b>c){
    if(b>c){
        console.log(a, b, c);
    }  else {
    console.log(a, c, b);
    }}
else if (b>a>c){
    if (a>c){
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else if (c>a && c>b){
    if(a>b){
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
};




var a = 10;
var b = 7;

if(typeof a=== "number"){
    if(a%2==0){
        console.log("kada se a podeli sa 2 dobija se " + a/2);
    } else {
        console.log("a nije deljivo sa 2");
    }
}else {
    console.log("a nije number");
};

if(typeof b=== "number"){
    if(b%2==0){
        console.log("kada se b podeli sa 2 dobija se " + b/2);
    } else {
        console.log("b nije deljivo sa 2");
    }
}else {
    console.log("b nije number");
};

var c = 60;
var f = (9*c/5) + 32;
console.log(c + "°C is " + f + "°F");

// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

var a = 11;
if(a>13){
    console.log((a-13)*2)
} else {
    console.log(13-a);
};
var b = 32;
if(b>13){
    console.log((b-13)*2)
} else {
    console.log(13-b);
};

// Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48

var u = 12;
var p = 5;

if(u==p) {
    console.log((u+p)*3)
} else {
    console.log(u+p)
};
var u = 8;
var p = 8;
if(u==p){
    console.log((u+p)*3)
} else {
    console.log(u+p)
};

// Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

var a = 5;
var b = 54;

if (a==50 || b==50 || a+b==50){
    console.log("true");
} else {
    console.log("false")
};

var a = 6;
var b = 50;

if (a==50 || b==50 || a+b==50){
    console.log("true");
} else {
    console.log("false")
};

var a = 40;
var b = 10;

if (a==50 || b==50 || a+b==50){
    console.log("true");
} else {
    console.log("false")
};

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

var a = 13;
if(a>20 && a<100){
    console.log("a pripada skupu brojeva izmedju 20 i 100")
} else if(a>100 && a<400) {
    console.log("a pripada skupu brojeva izmedju 100 i 400")
} else {
    console.log("a je manji od 20 ili veci od 400")
};

var a = 34;
if(a>20 && a<100){
    console.log("a pripada skupu brojeva izmedju 20 i 100")
} else if(a>100 && a<400) {
    console.log("a pripada skupu brojeva izmedju 100 i 400")
} else {
    console.log("a je manji od 20 ili veci od 400")
};

var a = 256;
if(a>20 && a<100){
    console.log("a pripada skupu brojeva izmedju 20 i 100")
} else if(a>100 && a<400) {
    console.log("a pripada skupu brojeva izmedju 100 i 400")
} else {
    console.log("a je manji od 20 ili veci od 400")
};