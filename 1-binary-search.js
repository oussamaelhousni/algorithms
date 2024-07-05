const binarySearch = (arr, element) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === element) return mid;
    if (arr[mid] > element) high = mid - 1;
    else low = mid + 1;
  }
  return null;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 7));
