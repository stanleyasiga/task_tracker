#!/usr/bin/env node

const args = process.argv.slice(2);
const fs = require("fs");

if (args.length === 0) {
  console.log("Usage: task-cli <your_name>");
} else if (args[0] === "add") {
  const description = args[1];
  const task = {
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
} else if (args[0] === "update") {
  const task_id = args[1];
  const description = args[2];

  fs.readFile("task-cli.json", "utf-8", (err, data) => {
    let jsonArray = [];
    if (!err && data) {
      try {
        jsonArray = JSON.parse(data);

        if (!Array.isArray(jsonArray)) return (jsonArray = []);
      } catch {
        console.error("Invalid JSON file:", parseErr);
        return;
      }
    }
    const jsonArrayUpdated = jsonArray?.map((item) =>
      item?.id == task_id
        ? {
            ...item,
            description: description,
          }
        : item
    );
    fs.writeFile(
      "task-cli.json",
      JSON.stringify(jsonArrayUpdated, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
          return;
        }
        console.log(`Task updated successfully (ID:${Date.now()})`);
      }
    );
  });
} else if (args[0] === "delete") {
  const task_id = args[1];

  fs.readFile("task-cli.json", "utf-8", (err, data) => {
    let jsonArray = [];
    if (!err && data) {
      try {
        jsonArray = JSON.parse(data);

        if (!Array.isArray(jsonArray)) return (jsonArray = []);
      } catch {
        console.error("Invalid JSON file:", parseErr);
        return;
      }
    }
    const jsonArrayUpdated = jsonArray?.filter((item) => item?.id != task_id);

    console.log(jsonArrayUpdated);

    fs.writeFile(
      "task-cli.json",
      JSON.stringify(jsonArrayUpdated, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
          return;
        }
        console.log(`Task deleted successfully (ID:${Date.now()})`);
      }
    );
  });
} else if (args[0] === "list") {
  const status = args[1];
  fs.readFile("task-cli.json", "utf-8", (err, data) => {
    if (!err && data) {
      try {
        jsonArray = JSON.parse(data);
        const jsonArrayFiltered = jsonArray?.filter(
          (item) => item.status === status
        );
        if (!Array.isArray(jsonArray)) return (jsonArray = []);
        if (status) {
          console.log(jsonArrayFiltered);
        } else {
          console.log(jsonArray);
        }
      } catch {
        console.error("Invalid JSON file:", parseErr);
        return;
      }
    }
  });
} else if (["mark-in-progress", "mark-done"]?.includes(args[0])) {
  const task_id = args[1];
  fs.readFile("task-cli.json", "utf-8", (err, data) => {
    let jsonArray = [];
    if (!err && data) {
      try {
        jsonArray = JSON.parse(data);

        if (!Array.isArray(jsonArray)) return (jsonArray = []);
      } catch {
        console.error("Invalid JSON file:", parseErr);
        return;
      }
    }

    const jsonArrayUpdated = jsonArray?.map((item) =>
      item?.id == task_id
        ? {
            ...item,
            status: args[0] == "mark-in-progress" ? "in-progress" : "done",
          }
        : item
    );
    fs.writeFile(
      "task-cli.json",
      JSON.stringify(jsonArrayUpdated, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
          return;
        }
        console.log(`Task updated successfully (ID:${Date.now()})`);
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
