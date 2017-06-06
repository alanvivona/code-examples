// General obs:
// 1- Typescript types can be used alongside with the good'old js dynamic typing system
//    it's not mandatory to use types in every case
// 2- Runnign tsc filename.ts compiles the file to js
// Type annotations -----------------------------------------------
// Error message : Cannot redeclare block-scoped variable 'musician'
var musician = function (instrument) {
    return function (note) {
        return "A " + note + " has been played on the " + instrument;
    };
};
// Error message : Cannot redeclare block-scoped variable 'music'
var music = musician('Bass')('A#');
console.log(music);
// this works just fine, Typescript + ES6 = issues?
var currSum = function (param1) {
    return function (param2) {
        return param1 + param2;
    };
};
var result = currSum(2)(3);
console.log(result);
// checking type error messages
// when compiling, the error refers to the last fn call and not the first arg + line of result calcualtion
// var result = currSum('asd', 5)
// console.log(result)
// same as before
// var result = currSum(3, true)
// console.log(result)
// nice, this is really usefull
var numberVar;
var numberLet;
var numberConst = 3.1416;
// numberVar = 'asd'
// numberLet = 'asd'
// numberConst = 'asd'
// all initialized as 'undefined', again using let throws some errors but compiles anyway
var num;
var text;
var bool;
var obj;
[num, text, bool, obj].forEach(function (v) { return console.log(v); });
// function types can have two forms (and also return type)
// theese are equal
var fn1 = function (message, isReturned) {
    return isReturned ? message : 'a very useful string';
};
var fn2 = function (x, y) {
    return y ? x : 'a extremely useful string';
};
console.log(fn1('show me!!', true));
console.log(fn2('please don\'t show me', false));
// -----------------------------------------------
// Enums -----------------------------------------------
var Instruments;
(function (Instruments) {
    Instruments[Instruments["DRUMM"] = 0] = "DRUMM";
    Instruments[Instruments["GUITAR"] = 1] = "GUITAR";
    Instruments[Instruments["BASS"] = 2] = "BASS";
    Instruments[Instruments["CITAR"] = 3] = "CITAR";
    Instruments[Instruments["VIOLIN"] = 4] = "VIOLIN";
})(Instruments || (Instruments = {}));
Instruments.BASS;
// this does not function with const enums
var violinName = Instruments[Instruments.VIOLIN];
function play(sound) {
    for (var time = 0; time < sound.time; time++) {
        var message = (sound.intensity) ? sound.note.toUpperCase() + '!!!' : sound.note;
        console.log(message);
    }
}
var sound1 = { note: 'b', time: 5, intensity: true };
play(sound1);
