// const str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeAt."
// console.log(str.length)      // give length of string
// console.log(str.charAt(0))       // give characterat given position
// console.log(str.charCodeAt(73))     // give ascii value of give position character
// console.log(str.at(-2))       // give character at given position
// console.log(str[0])      // give character at given position

// console.log(str.slice(0,6))     // it extract part of string from start to end and not including end and it returns extracted string

// console.log(str.substring(0,6))     // nigative start and end values treated as 0 and same as slice

// console.log(str.substr(0,10))       // first is starting position and second is length of string

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// String Concatination
// const str1 = "vaibhav"
// const str2 = " shinde "
// const str3 = str1.concat(str2)
// const str4 = str1 + str2
// console.log(str3, str4)

// String trim() : remove white spaces from both side
// console.log(str2.trim())
// console.log((str2.trimEnd()).concat(str1))

// String padStart() & padEnd() : add whatever you want to left or right side of string
// let text = '5'
// console.log(text.padStart(4,' '))
// console.log(text.padEnd(4,'A'))

// String repeat() : repeat the string at given number of times
// let text  = 'hello world '
// console.log(text.repeat(5))

// String replace(<actual word>, <word you want to replace>)
// let str = "hello world";
// console.log(str.replace("world", "vaibhav"))

// Convert string into array split()
// let str = "Lorem ipsum dolor sit amet."
// console.log(str.split(" "))

// String Search
// let str = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
// console.log(str.indexOf("sit"))      // return starting index of word
// console.log(str.lastIndexOf("sit"))     // return last occurence of word index
// console.log(str.search("ipsum"))        // first occurence word's return starting index
// console.log(str.match("lor"))       // first occurence word's return starting index
// console.log(str.matchAll("ipsum"))
// console.log(str.includes("Lorem"))      // if word found then return true else false
// console.log(str.startsWith("L"))        // return true if string bigining with given word
// console.log(str.endsWith("."))      // return true if string end with given word

// Template String
// let name = "vaibhav";
// let age = 25;
// console.log(`My name is ${name} and my age is ${age}`)

