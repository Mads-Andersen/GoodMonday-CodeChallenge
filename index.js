const algorithm = require('./algorithm');

function main() {
  const args = process.argv.slice(2);
  const line1 = args[0];
  const line2 = args[1];

  const distance = algorithm.getShortestDistance(line1, line2)
  console.log(distance);
}

main();