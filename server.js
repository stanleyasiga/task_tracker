require("dotenv").config();

const { error } = require("node:console");
const readline = require("node:readline");

//console.log(readline);

//console.log(readline);

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`resolved`);
    }, 2000);
    // setTimeout(() => {
    //   reject(`rejected`);
    // }, 2000);
  });
};

fetchData()
  .then((message) => console.log(`${message} resolved`))
  .catch((error) => console.log(`${error} rejected`));
