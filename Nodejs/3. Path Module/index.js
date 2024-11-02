import path from "path"

const location = "C:\\Program\\index.js"

// console.log(path.basename(location)) 
// path.basename gives last portion of location it mean filename with extension

// console.log(path.dirname(location))
// path.dirname gives location of current file. not include current file 

// console.log(path.extname(location))
// path.extname gives extension of current file (.js, .html, .c ...)

// console.log(path.join("C:","Program","index.js"))
// path.join it is used to create or join path 

// console.log(path.parse(location))
// console.log(path.parse(location).base)
// console.log(path.parse(location).dir)
// console.log(path.parse(location).ext)
// path.parse convert the path into a object form