const fs = require("fs");
const intersJSON = require("./data/interns.json");

fs.mkdir("interns", { recursive: true }, (err) => {
  if (err) console.log("Error creating folder:", err);
});

const data = intersJSON;

for (let i = 0; i < data.length; i++) {
  const intern = data[i];
  const fileName = `interns/${intern.name.toLowerCase()}.txt`;

  const content = `Hi, my name is ${intern.name}.
I am currently learning Node.js through the Cyberdude Channel.

Welcome to my learning journey! Stay connected and let's grow together.`;

  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(`Error writing to ${fileName}:`, err);
    } else {
      console.log(`File created for ${intern.name}`);
    }
  });
}
