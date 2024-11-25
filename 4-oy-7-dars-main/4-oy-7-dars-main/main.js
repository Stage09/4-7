//--------------------------------- 1-vazifa-------------------------------------


// ------------------------------||1-masala||---------------------------------

// let person = {
//     name: "Ismoil",
//     age: 15,
//     job: "Student",
//     interest: "game",
//     hobby: "sleep",
//     number: "+99897224520",
//     username: "RU"
// };
// Object.entries(person).map(([key, value]) => console.log(`${key} - ${value}`))


// ------------------------------||2-masala||---------------------------------


// const people = { name: "Ismoil", age: 16 }
// const people2 = { hobby: "football", interest: "sleep" }
// const person = {}
// Object.keys(people).map(item => newPerson[item] = people[item])
// Object.keys(people).map(item => newPerson[item] = people[item])
// console.log(person)

// ------------------------------||3-masala||---------------------------------

// let arr = [1, 2, 3]
// let arr1 = arr.map((value, index) => index === arr.length ? value + 1: value).concat(arr[arr.length -1] + 1);
// console.log(arr1)

// ------------------------------||4-masala||---------------------------------

// function fn(arr) {
//     let sum = 0;
//     arr.filter(value => sum += value)
//     if(arr[0] % 2 === 0){
//         return [sum, ...arr].filter(x => true)
//     }else{
//         return [...arr, sum].filter(y => true)
//     }
// }
// console.log(fn([2, 2, 3]))
  

// ------------------------------||5-masala||---------------------------------

// let arr = [1, 2, 3, 4]
// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
// console.log(arr)

// console.log(newArr)



//--------------------------------- 2-vazifa-------------------------------------


// ------------------------------||1-masala||---------------------------------

// let arr = [];
// for (let i = 0; i < 5; i++){
//     arr.push(prompt(`${i+1} - Sonni kiritshingiz lozim`))
// }
// let max = []
// arr.map(num => {
//     if (num > max) max = num
// })
// console.log("Array:", arr)
// console.log("Max:", max)

// ------------------------------||2-masala||---------------------------------

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];
// const newArr = [...arr1, ...arr2];
// let sum = 0;
// newArr.map(item => {
//   if (typeof item === 'number' || item === true ) {
//     sum += item;
//   }
// });
// console.log("Yig'indi:", sum);

// ------------------------------||3-masala||---------------------------------

// let numbers = [10, 4, 3, 6, 3, 7, 1]
// let minIndex = 0
// let minValue = numbers[0]
// numbers.map((num, index) => {
//   if (num < minValue) {
//     minValue = num;
//     minIndex = index;
//   }
// })
// console.log("Index:", minIndex)

// ------------------------------||4-masala||---------------------------------

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];
// let arr = [...arr1, ...arr2];
// let newArr = [];

// arr.map(() => {
//   let min = Math.min(...arr);
//   newArr.push(min);
//   arr = arr.filter((num, index) => num !== min || index > arr.indexOf(min));
// });
// console.log(newArr);


  



  