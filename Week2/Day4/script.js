//Exercise 1

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// function infoAboutMe() {
//     console.log("Hi, my name is Ziv, i'm 22 years old, i love coding!")
// };
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Hi my name is ${personName} i'm ${personAge} years old, and my favorite color is ${personFavoriteColor}`);
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow")

//Exercise2

// John created a simple tip calculator to help calculate how much
//  to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

function calculateTip() {
    let bill = Number(prompt("How much is the bill?"));
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill > 50 && bill < 200) {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }
}
let finalBill = calculateTip();
console.log(finalBill);