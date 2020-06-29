const timeArr = process.argv.slice(2);

timeArr.forEach((time) => {
  if (typeof time === "number" || time >= 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
});
