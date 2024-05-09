
        // false can be reprsent by 0
        // true can be represent by 1

        // AND operator
        let p =false   
        let q = false
        console.log(p && q)

        // OR Operator

        let s = true
        let r = false

        console.log(s||r)


        // not operator
        let t = false
        console.log(!t)
        


        // ternary operator
        
        let age = 12;
        let message = (age>=18)?("you can acces the website"):("You are Minor")
        console.log(age,message)


        let firstname = "mohit"
        let lastname ="verma"
        let fullname = firstname+" "+lastname
        console.log(fullname)
        let u = fullname.toUpperCase();
        console.log(u)

        // Arthemetic Operators

let a = 5;
let b = 7;
let c = a + b;
console.log(c);

// subtraction
let d = b - a;
console.log(d);

//multipication
let e = 5 * 7;
console.log(e);

//division
let f = a / b;
console.log(f);

//MODULE
let g = b % a;
console.log(g);


//comparison operater

let x = 10;
let y = "hello";
console.log("comparison", x = y);

x = 10;
y = "10";
console.log("equal to", x == y);

x = 10;
y = "10";
console.log("triple equal to", x === y);

x = 12;
y = 19;
console.log("greater than equal to", x >= y);

//logical operaters 
// AND OR NOT
let i = true;
let j = false;
console.log(i || j);
console.log(!i);
console.log(!j);
console.log(i && j);
console.log(j && i);
console.log(typeof (j));

let k = 5;
k += 90  // k = k + 90
console.log(k);

// ++ increment 
// first implement then n
x = 2;
console.log(x++);

// first increament then implement
x = 2;
console.log(++x);

// -- decrement
// first implement then decrement
x = 2;
console.log(x--);

// first decrement then implement
x = 2;
console.log(--x);


//Exponentiation
x = 23;
console.log(x ** 2);

// Ternary 
let ag = 18;
let userName = "pawan";
let messag = (ag >= 18 && userName === "pawan") ? (`Your name:${userName} and Your age is:${age}`):("You are not an member");
console.log(messag);