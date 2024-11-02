import * as fs from "fs/promises"

// Create Folder or Directory
// await fs.mkdir("e:\\Temp\\test1");
// await fs.mkdir("e:\\Temp\\test1",{recursive:true})
// await fs.mkdir("e:\\Temp\\test1\\test2",{recursive:true})
/*
await fs.mkdir("e:\\Temp\\test1"); it create a new folder test1 inside the Temp folder. but in case Temp folder is not present then it gives an error. but if you want to create first Temp folder then inside temp folder you want to create test1 then use
await fs.mkdir("e:\\Temp\\test1",{recursive:true})
*/

//Read Files
// const files = await fs.readdir("e:\\Temp");

// Remove or Delete Directory or Folder
// await fs.rmdir("e:\\Temp\\temp");    // folder should be present and it should be empty

// Create and Write Files
// await fs.writeFile("test3.md","hello world"); // it takes 2 parameters one is path of file or name of file and another is text content of file. if file is not present then it will create and write data. but writeFile method overwrites existing data of file with new data

// append Data
// await fs.appendFile("test3.md", "\n I am fine");

// Read Content of Directory or Folder
// const data = await fs.readFile("test3.md", "utf-8");

// Copy Files
// await fs.copyFile("test3.md", "test4.txt")   // copy data from test3.md and pest into test4.txt file
try {
    await fs.copyFile("test3.md", "test4.txt")
} catch (error) {
    console.log(error)
}
