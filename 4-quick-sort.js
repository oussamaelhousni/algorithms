const quickSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  // taking first element as a pivot is not good practice  esppacly if the aray is already sorted, random pivot is always good
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  const lesser = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivotIndex === i) continue;
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else lesser.push(arr[i]);
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
};

console.log(quickSort([1, 2, 3, 5, 3, 4, 1, 2, 3]));
