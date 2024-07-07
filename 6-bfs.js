// bearth first search answer to questions
// 1 - is the a path from node a to node b
// 2 - what is shortest path from node a to node b

const graph = new Map();

graph.set("you", ["alice", "bob", "claire"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("alice", ["peggy"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anuj", []);
graph.set("peggy", []);
graph.set("thom", []);
graph.set("jonny", []);

const bfs = (graph, name) => {
  const queue = [];
  const searched = new Set();
  queue.push(...graph.get(name));
  while (queue.length) {
    const person = queue.shift();
    if (!searched.has(person)) {
      if (person.endsWith("m")) {
        return true;
      }
      queue.push(...graph.get(person));
    }
  }
  return false;
};

console.log(bfs(graph, "you"));
