const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
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
