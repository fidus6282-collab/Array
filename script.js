// let object = {
//     name: "Azim",
//     age: 25,
//     soqqabor: true
// }
// let array = ['olma', 'anor', 'uzum', 'nok', 'shaftoli'];

// let pusto = []

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let mix = [1, 'salom', true,]

// console.log(array);
// console.log(array[3]);
// let cars = ['BMW', 'Audi', 'Tesla']

// cars[1] = 'Mercedes';
// console.log(cars);

// let fruits = ['olma', 'anor', 'uzum']
// console.log(fruits.length);

// let numbersA = [1, 2, 3];
// numbersA.push(4)
// console.log(numbersA);

// let numbersPOP = [1, 2, 3]
// numbersPOP.pop()
// console.log(numbersPOP);

// let fruitUnshift = ["apple", "banan", "nok" ]
// numbersUnshift.unshift("apple")
// console.log(fruitUnshift);




// let Unshift = ["apple", "banan", "nok" ]
// numbersUnshift.shift("apple")
// console.log(Unshift);

// let fruitsINDEX = ["apple", "banan", "nok"]
// console.log(fruitsINDEX.indexOf("banan"));
// console.log(fruitsINDEX.indexOf("kiwi"));


let fruits = ["olma", "banan", "gilos", "shaftoli"];


alert("Salom! Arraydan bitta element olib tashlaylikmi?");

let answer = confirm("Olib tashlashni xohlaysizmi?");

if (answer) {
  let randomIndex = Math.floor(Math.random() * fruits.length);

  let removedFruit = fruits[randomIndex];

  fruits.splice(randomIndex, 1);

  alert("Siz '" + removedFruit + "' mevasini olib tashladingiz!");
} else {
  alert("Hech narsa olib tashlanmadi!");
}

console.log("Qolgan mevalar: ", fruits);