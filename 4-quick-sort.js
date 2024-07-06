const quickSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else lesser.push(arr[i]);
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
};

console.log(quickSort([1, 2, 3, 5, 3, 4, 1, 2, 3]));
