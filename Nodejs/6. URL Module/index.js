import {URL} from "url"

const myURL = new URL(`https://www.google.com:8080/C:/fol1/fol2.html?query="sorting#hash"`);

console.log(myURL)
console.log(myURL.href)
console.log(myURL.origin)
console.log(myURL.hostname)
console.log(myURL.port)
console.log(myURL.pathname)


console.log(myURL.toString())
console.log(myURL.toJSON())