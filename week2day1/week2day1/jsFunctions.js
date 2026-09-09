//Task 1: Function Declaration

function userProfile(name) {
    console.log("Hello, " + name + "!");
}

userProfile("Agarshana");

//Task 2: Arrow Function 

const double= (num)=> (num*num)
console.log(double(10));

// Anonymous Function 

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function

function getUserData(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}

getUserData(function() {
    console.log("Call Back Function");
});