const fs = require("fs");

const filePath = "src/autoUpdate.txt";

const time = new Date().toLocaleString();

const content = `Update: ${time}\n`;

fs.appendFileSync(filePath, content);

console.log("File updated");