// Array Creation and initialization
// let arr = [1, 2, 3, 4, 5]
// let arr = new Array(1,2,3,4,5)       // it is 5 elements array
// let arr = new Array(40);     // it gives size of 40 elements of array

// Convert array into string
// let fruits = ["banana", "mango", "orange", "pineapple", "pear"]
// console.log(fruits.toString())

// let fruits = ["banana", "mango", "orange", "pineapple", "pear"]
// let text = "<ul>";
// for(let i = 0; i < fruits.length; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("demo").innerHTML = text

// const person = []
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 26;
// console.log(person)

// Array basic methods
// let arr = [10,20,30,40,50]
// console.log(arr.length)
// console.log(arr.at(1))
// console.log(arr.join("-"))      // it working like toString method convert array to string
// arr.push(60)        // insert element at end of array and it gives new array length
// arr.pop()        // remove element at end of array and it gives removed element
// arr.unshift(5)       // insert element at beginning of array and it gives new array length
// arr.shift()     // remove element at beginning of array and it gives removed element

// Array Concatination
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [11, 12, 13, 14, 15];
// const newArr = arr1.concat(arr2, arr3);       // it merge two or more array and return new array
// console.log(newArr.concat(100));        // concat new value in array

// Array Flat
// let arr = [[1,2],[3,4],[5,6]];      //  convert 2d or multi dimensional array into single array
// arr = arr.flat()
// console.log(arr)

// Array Search
// let arr = [10, 20, 30, 40, 10, 60, 30, 80]
// console.log(arr.indexOf(20))        // it return first occurence of element of index
// console.log(arr.lastIndexOf(30))        // it return last occurence of element of index
// console.log(arr.includes(50))       // it returns true if given element present in array else false
// let ans = arr.find((ele)=> ele > 30)     // it search element in array and return it if found
// let ans = arr.findIndex((ele)=> ele == 60)  // it search element in array and return its index

// Array Sorting
// let arr = [20, 50, 10, 80, 20, 40, 15];
// arr.sort()       // sort array in ascending order and it will modify original array
// arr.reverse()    // reverse the array and modify original array
// let newArr = arr.toSorted()  // sort array in ascending order and it returns new array
// let newArr = arr.toReversed()     // reverse the array and returns new array
// arr.sort((a,b)=> a-b)        // sort array in ascending order
// arr.sort((a,b)=> b-a)        // sort array in descending
// let obj = [{ name: "vaibhav", age: 25 }, { name: "onkar", age: 21 }, { name: "sanket", age: 20 }]
// obj.sort((a,b)=> a.age - b.age)      // sort array of object in ascending order on ref of age

// Array Iteration Methods
// const arr = [45, 4, 9, 16, 25]
// arr.forEach((ele, index) => {
//     console.log(index, ele)
// })
// let newArr = arr.map((arr, index)=> arr*2)  // it create a new modified array
// let newArr = arr.filter((ele)=> ele >= 20)  // it create a new modified array
// let newArr = arr.reduce((acc, ele) => acc + ele)
// let newArr = arr.some((arr, index)=> arr==16)
let arr1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
let arr2 = ["jul", "aug", "sep", "oct", "nov", "dec"]
let months = [...arr1,...arr2,...arr1]
console.log(months)