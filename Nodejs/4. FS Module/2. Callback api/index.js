import * as fs from "fs"

// Create folder or directory
// fs.mkdir("test",(error)=>{
//     if(error){
//         throw error
//     }
//     console.log("Directory created ...")
// })

// create file and write data
fs.writeFile("test.txt", "hey vaibhva how are you", (error) => {
    if (error) throw error
    console.log("data written")
})