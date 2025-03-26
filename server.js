#!/usr/bin/env node

const readline = require("node:readline");

const args = process.argv.slice(2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (args.length === 0) {
  console.log("Usage: mycli <your_name>");
} else {
  console.log(`Hello, ${args[0]}!`);
}

rl.question("What is your name? ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});
