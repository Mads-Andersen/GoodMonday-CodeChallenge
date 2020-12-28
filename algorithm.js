
function getShortestDistance(line1, line2) {
  const row1 = Array.from(line1).map((char, i) => ({ x: i, y: 0, char }));
  const row2 = Array.from(line2).map((char, i) => ({ x: i, y: 2, char }));
  const nodes = row1.concat(row2).filter(n => n.char === "-");

  if (line1.length !== line2.length) {
    throw Error('We assume both rows in the bus must have the same number of seats')
  }
  if (nodes.length < 3) {
    throw Error('Less than three avaiable seats in the bus. No solutions exist')
  }

  // return naiveDistance(nodes);
  return adjacentNodesDistance(nodes);
}

function naiveDistance(nodes) {
  const distances = [];
  for(let i = 0; i < nodes.length - 2; i++) {
    for(let j = 1; i + j < nodes.length - 1; j++) {
      for(let k = 1; i + j + k < nodes.length; k++) {
        const node1 = nodes[i]; 
        const node2 = nodes[i+j]; 
        const node3 = nodes[i+j+k];
        const distance = perimeter(node1, node2, node3);
        distances.push(distance);
      }
    }
  }
  return distances.sort((a, b) => a - b)[0];
}

function adjacentNodesDistance(nodes) {
  // Cheating here by using .sort which causes the time complexity of the function below to be O(n log n). 
  // We only need to find the two nodes with the shortest distance. 
  // Its trivial to see this can be done in O(n) so lets assume that. 
  function findPerimeter(node, nodes) {
    const distances = nodes.map(n => ( { ...n, distance: distance(node, n) }));
    const sorted = distances.sort((a, b) => a.distance - b.distance);
    const node1 = node;
    const node2 = sorted[1]
    const node3 = sorted[2]

    return perimeter(node1, node2, node3)
  }
  const perimeters = nodes.map(n => findPerimeter(n, nodes));
  const minimum = perimeters.reduce((prev, cur) => (prev < cur) ? prev : cur)
  return minimum;
}

function perimeter(node1, node2, node3) {
  const dist1 = distance(node1, node2);
  const dist2 = distance(node2, node3);
  const dist3 = distance(node1, node3);
  return dist1 + dist2 + dist3;
}

function distance(node1, node2) {
  const a = node1.x - node2.x;
  const b = node1.y - node2.y;
  return Math.sqrt(a*a + b*b)
}

module.exports = { getShortestDistance };