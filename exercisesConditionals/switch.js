var a = 10;
var result = '';

switch (a) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wendsday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
    default:
        result = 'Input must be a number between 1 and 7.'
        break;
};

console.log(result);

switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'It is weekday';
        break;
    case 6:
    case 7:
        result = 'It is weekend';
        break;
    default:
        result = 'Input must be a number between 1 and 7.'
        break;
};

console.log(result);

switch (a) {
    case 1:
        result = 'Januar';
        break;
    case 2:
        result = 'Februar';
        break;
    case 3:
        result = 'Mart';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'Maj';
        break;
    case 6:
        result = 'Jun';
        break;
    case 7:
        result = 'Jul';
        break;
    case 8:
        result = 'Avgust';
        break;
    case 9:
        result = 'Septembar';
        break;
    case 10:
        result = 'Oktobar';
        break;
    case 11:
        result = 'Novembar';
        break;
    case 12:
        result = 'Decembar';
        break;
    default:
        result = 'Input must be a number between 1 and 12.'
        break;
};

console.log(result);

switch (a) {
    case 1:
    case 2:
    case 3:
        result = 'Zima';
        break;
    case 4:
    case 5:
    case 6:
        result = 'Prolece';
        break;
    case 7:
    case 8:
    case 9:
        result = 'Leto';
        break;
    case 10:
    case 11:
    case 12:
        result = 'Jesen';
        break;
    default:
        result = 'Input must be a number between 1 and 12.'
        break;
};

console.log(result);

switch (a) {
    case 'A':
        result = 'Good job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'E':
        result = 'Failed';
        break;
    default:
        result = 'Unknown grade'
        break;
};

console.log(result);

var a = "Beograd"

switch (a) {
    case 'London':
    case 'Mancester':
    case 'Liverpul':
        result = 'Velika Britanija';
        break;
    case 'Prag':
        result = 'Ceska';
        break;
    case 'Rim':
    case 'Milano':
        result = 'Italija';
        break;
    case 'Novi Sad':
    case 'Kragujevac':
    case 'Beograd':
        result = 'Srbija';
        break;
    case 'Pariz':
    case 'Marsej':
    case 'Limes':
    case 'Pariz':
        result = 'Francuska';
        break;
    case 'Ljubljana':
    case 'Maribor':
        result = 'Slovenija';
        break;
    default:
        result = 'Molimo izaberite drugi grad'
        break;
};

console.log(result);

var a = 4;
var b = 0;
var c = "/";
var result = '';

switch (c) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '/': if (b == 0) {
        result = "Ne mozemo deliti sa nulom"
    } else {
        result = a / b;
    } break;
    case '*':
        result = a * b;
        break;
    default:
        result = 'Izaberite pravilnu matematicku operaciju'
        break;

};

console.log(result);
