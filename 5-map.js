const map = new Map();
// map is very usefull with mapping, cashing, peventing duplicates
map.set("first", 3);
map.set("first", 5);
map.delete("first");
console.log(map.get("first"));
