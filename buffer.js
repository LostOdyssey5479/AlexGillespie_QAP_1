// Create a buffer with a string
const buffer = Buffer.from("Hello, World!", "utf8");

// Output the original buffer created from the string 'Hello, World!' using the UTF-8 encoding.
console.log("Original Buffer:", buffer);

// Convert buffer to string
const str = buffer.toString("utf8");

// Output the converted string. This is the string representation of the buffer after it has been converted back from the buffer.
console.log("Converted String:", str);

// Slice the buffer
const slicedBuffer = buffer.slice(0, 5);

// Output the sliced buffer. This is the result of slicing the original buffer from index 0 to 5, which includes the characters 'H', 'e', 'l', 'l', 'o'.
console.log("Sliced Buffer:", slicedBuffer);

// Concatenate buffers
const buffer1 = Buffer.from("Hello", "utf8");
const buffer2 = Buffer.from(", World!", "utf8");
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);

// Output the concatenated buffer. This is the result of concatenating two separate buffers: one created from the string 'Hello' and another created from the string ', World!'.
console.log("Concatenated Buffer:", concatenatedBuffer);
