// const bubbleSort = (arr) => {
//   let swapHappened = false
//   console.log(swapHappened)
//   do {
//     swapHappened = false
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1]) {
//         let temp = arr[i]
//         arr[i] = arr[i - 1]
//         arr[i - 1] = temp
//         swapHappened = true
//         console.log(arr)
//       }
//     }
//   } while (swapHappened)
//   return arr
// }
// console.log(bubbleSort([6, 9, 3, 6, 0, 2, 4]))



// const bubbleSort = (arr) => {
//   // first create a copy
//   const sortedArr = arr;
//   // create variable to represent if it's sorted
//   let sorted = false;
//   // while the array's not sorted
//   while (!sorted) {
//     // create swap variable
//     let swap = false;
//     // create a forEach for the array and look at the current element, and the one after
//     sortedArr.forEach((curr, i) => {
//       if (i === sortedArr.length - 1) {
//         return;
//       }
//       const next = sortedArr[i + 1];
//       // if smaller, swap the two and assign a swap variable to true
//       if (curr > next) {
//         console.log(`${curr} is greater than ${next}!`)
//         const temp = next;
//         sortedArr[i + 1] = curr;
//         sortedArr[i] = temp;
//         swap = true;
//         console.table(sortedArr);
//       }
//     });
//     // after the forEach if swap is false then the array is sorted
//     // sorted = !swap;
//     if (swap === false) {
//       console.log('Sort complete!')
//       sorted = true;
//     } else {
//       console.log('Not sorted yet :(');
//     }
//   }
//   // return sorted array
//   return sortedArr;
// }
// bubbleSort([69, 17, 96, 23, 2, 42, 8]);

const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //if the current index is greater than the next index
      if (arr[i] > arr[j]) {
        // we're swapping values
        // keep the value of arr[i] and store it in a temp value
        let temp = arr[i];
        // swap the values for the indices 
        console.log(`arr[i] is ${arr[i]} which is the current index`)
        arr[i] = arr[j];
        console.log(`arr[j] is ${arr[j]} which in the next index`)
        // give the next index the value of the current index
        arr[j] = temp;
        console.log(`the swap has happened`)
      }
      console.log(`no swap`)
    }
  }
  return arr;
};
console.log(bubbleSort([6, 9, 3, 7, 0, 2, 4]))