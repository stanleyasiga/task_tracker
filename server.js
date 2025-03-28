#!/usr/bin/env node

// const readline = require("node:readline");

const args = process.argv.slice(2);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
let count = 0;

if (args.length === 0) {
  console.log("Usage: task-cli <your_name>");
} else if (args[0] === "add") {
  let temp = count + 1;
  console.log(`Task added successfully (ID: ${temp})`);
  count = temp;
} else {
  console.log(`Hello, ${args[0]}!`);
}

//temp = 0 1
//count = 0 1

// rl.question("What is your name?", (name) => {
//   console.log(`Hello ${name}`);
//   rl.close();
// });
