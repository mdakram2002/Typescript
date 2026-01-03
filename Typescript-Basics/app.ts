
var a = 12;
function abcd() {
  let x = 12;
  let y = 23;
}

// Primitve and reference
let b = false;
let arr = []
let str = "akram"

// Tuple

let arr1: [string, number] = ["akram", 12]
// let arr2: [string, number] = [12, "akram"] // not possible

// Enums - Enumerations: sort of key-value
enum UserRoles{
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
UserRoles.SUPER_ADMIN

enum StatusCodes{
  ABANDONED = "abandoned status code 400",
  NOT_FOUND = "404"
}
StatusCodes.NOT_FOUND

// Any, Unknown Void, Null, Undefined, Never

// any: typescript don'snt check the rule of types script
let c;
c = "akram";
c = 12;
c = true;


//unknown: check the types of datatypes then go on
let d: unknown;
d = 12;
d = "akram"

if(typeof d === "string"){
  d.toUpperCase();
}


// Always set it's return types like void, number, string, boolean etc
function vd(): void{
  console.log("Hello")
}

function nb(): number{
  return 12;
}

function st(): string{
  return "akram"
}

function bl(): boolean{
  return true;
}


let nl: null = null;
let nl1: null;

//nl = 12; //Type '12' is not assignable to type 'null'.

function dcc(){
  while(true){}
}
dcc();
console.log("HEllo")