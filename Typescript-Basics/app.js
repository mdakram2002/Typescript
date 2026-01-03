"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
function abcd() {
    let x = 12;
    let y = 23;
}

// Primitve and reference
let b = false;
let arr = [];
let str = "akram";
// Tuple
let arr1 = ["akram", 12];


// let arr2: [string, number] = [12, "akram"] // not possible
// Enums - Enumerations: sort of key-value
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));

UserRoles.SUPER_ADMIN;


var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 400";
    StatusCodes["NOT_FOUND"] = "404";
})(StatusCodes || (StatusCodes = {}));

StatusCodes.NOT_FOUND;

// Any, Unknown Void, Null, Undefined, Never


// any: typescript don'snt check the rule of types script
let c;
c = "akram";
c = 12;
c = true;


//unknown: check the types of datatypes then go on
let d;
d = 12;
d = "akram";
if (typeof d === "string") {
    d.toUpperCase();
}


// Always set it's return types like void, number, string, boolean etc
function vd() {
    console.log("Hello");
}
function nb() {
    return 12;
}
function st() {
    return "akram";
}
function bl() {
    return true;
}
let nl = null;
let nl1;



//nl = 12; //Type '12' is not assignable to type 'null'.
function dcc() {
    while (true) { }
}


dcc();
console.log("HEllo");
//# sourceMappingURL=app.js.map