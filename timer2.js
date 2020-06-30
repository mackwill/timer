// const readline = require("readline");
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.line(())
// stdin.on("keypress", (str, key) => {
//   if (key.ctrl && key.name === "c") {
//     process.exit();
//   } else {
//     console.log("key: ", key);
//     console.log("str: ", str);
//   }
// });

stdin.on("data", (key) => {
  if (key === "b") {
    console.log("you pressed b");
  }
  if (key.match(/[1-9]/) !== null) {
    console.log(`setting timer for ${key * 1000} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
