//This is an example on how you could use 'path' in Node.js!! Obviously, these files don't exist on our pcs, this is just an example usage of it using a madeup file. However, it can be edited to use actual files.'
const path = require("path");

// Create a file path
const filePath = "/path/to/file.txt";

// Get the directory name from the file path
const directoryName = path.dirname(filePath);

// Output the directory name
console.log("Directory Name:", directoryName);

// Get the file extension from the file path
const fileExtension = path.extname(filePath);

// Output the file extension
console.log("File Extension:", fileExtension);

// Join multiple path segments together
const joinedPath = path.join("/path", "to", "file.txt");

// Output the joined path
console.log("Joined Path:", joinedPath);

// Normalize a path
const normalizedPath = path.normalize("/path/to/../file.txt");

// Output the normalized path
console.log("Normalized Path:", normalizedPath);
