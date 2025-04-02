#!/usr/bin/env node

// const readline = require("node:readline");

const args = process.argv.slice(2);
const fs = require("fs");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
let count = 0;

if (args.length === 0) {
  console.log("Usage: task-cli <your_name>");
} else if (args[0] === "add") {
  let description = args[1];
  let task = {
    id: Date.now(),
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  fs.readFile("task-cli.json", "utf-8", (err, data) => {
    let jsonArray = [];

    if (!err && data) {
      try {
        jsonArray = JSON.parse(data);
        if (!Array.isArray(jsonArray)) return (jsonArray = []);
      } catch (parseErr) {
        console.error("Invalid JSON file:", parseErr);
        return;
      }
    }
    jsonArray.push(task);

    fs.writeFile(
      "task-cli.json",
      JSON.stringify(jsonArray, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
          return;
        }
        console.log(`Task added successfully (ID:${Date.now()})`);
      }
    );
  });
} else {
  console.log(`Hello, ${args[0]}!`);
}

//temp = 0 1
//count = 0 1

// rl.question("What is your name?", (name) => {
//   console.log(`Hello ${name}`);
//   rl.close();
// });
