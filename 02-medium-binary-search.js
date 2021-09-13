// https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470

let exampleArray = [
  1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
];

// start will always be 0; finish with always be arr.length; middle will start at finish-start / 2

const binarySearch = (array, target) => {
  console.log("\nStarting search...");
  let startIndex = 0;
  let endIndex = array.length - 1;
  let count = 0;

  while (startIndex <= endIndex) {
    count += 1;
    // define middle index
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    // compare value of middle index with target for match
    if (target === array[middleIndex]) {
      return console.log(
        `Target found at index ${middleIndex} in ${count} steps.`
      );
    }

    // search right side of array
    if (target > array[middleIndex]) {
      console.log("Target to the right of middle");
      startIndex = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      console.log("Target to the left of middle");
      endIndex = middleIndex - 1;
    } else {
      // not sure I understand this third condition.
      console.log(
        `Target not found after ${count} ${
          count === 1 ? "pass" : "passes"
        }.  Looping again.`
      );
    }
  }
  // We haven't returned so if must not be here!
  console.log("Target not present in array");
};

binarySearch(exampleArray, 37);
binarySearch(exampleArray, 3);
binarySearch(exampleArray, 27);
