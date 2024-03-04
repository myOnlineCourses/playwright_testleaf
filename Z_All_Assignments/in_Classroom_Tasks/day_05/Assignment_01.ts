/**
 * 
 * Custom Type for browserNames
 * Custom Type for browserVersions
 * 
 * Use both custom Types and print the values
 */

type browserNames = {windows: string, Mac: string}
type browserVersions ={versions: string}

type tools = browserNames & browserVersions

let  myTools : tools = {windows: "chrome", Mac: "safari" , versions:"8.5"}
console.log(myTools) // Output: { windows: 'chrome', Mac: 'safari', versions: '8.5' }
function invokeBrowser(type:)

if ("windows" in myTools){
    console.log(`The tool is available on Windows platform`)
}else{
    console.log("Not available on Windows") 
}


/*
 * Exercise 1
 * Create a function called getProperty that takes  two parameters: an object and a key
 * The function should return the value of the key if it exists in the object, otherwise it should return null
 * @param {object} obj - The object to look in
 * @param {string} key - The key to look for
 * @returns {any} - The value of the key if it exists in the object, otherwise null
 */