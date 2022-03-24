const path = require('path');
const fs = require('fs');

let chirps = [
    {"May 1": "hey this is chirp 1"},
    {"June 23": "hey this is chirp 2",},
    {"July 4": "hey this is chirp 3",},
    {"October 31": "hey this is chirp 4",},
    {"January 12": "hey this is chirp 5"}
];

let filePath = path.join(__dirname, "../chirps.json");

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });