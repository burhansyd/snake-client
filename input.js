let connection;

const moves = {
  w : "Move: up",
  a : "Move: left",
  s : "Move: down",
  d : "Move: right"
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  for (const button in moves) {
    if (key === button) {
      connection.write(moves[button]);
    }
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
}