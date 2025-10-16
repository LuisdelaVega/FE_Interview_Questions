function threeSum(nums: number[]): number[][] {
  const sortedNums = [...nums];
  sortedNums.sort((a, b) => a - b);

  const results: number[][] = [];

  for (let leftIndex = 0; leftIndex < sortedNums.length - 2; leftIndex++) {
    if (leftIndex > 0 && sortedNums[leftIndex] === sortedNums[leftIndex - 1]) {
      continue; // Skip duplicate left elements
    }

    let middleIndex = leftIndex + 1;
    let rightIndex = sortedNums.length - 1;

    while (middleIndex < rightIndex) {
      const sum =
        sortedNums[leftIndex] +
        sortedNums[middleIndex] +
        sortedNums[rightIndex];

      if (!sum) {
        results.push([
          sortedNums[leftIndex],
          sortedNums[middleIndex],
          sortedNums[rightIndex]
        ]);

        // Skip duplicate for middle and right indexes
        while (middleIndex < rightIndex) {
          const isMiddleDuplicate =
            sortedNums[middleIndex] === sortedNums[middleIndex + 1];
          const isRightDuplicate =
            sortedNums[rightIndex] === sortedNums[rightIndex - 1];

          if (isMiddleDuplicate) {
            middleIndex++;
          }

          if (isRightDuplicate) {
            rightIndex--;
          }

          if (!isMiddleDuplicate && !isRightDuplicate) {
            break;
          }
        }

        middleIndex++;
        rightIndex--;
      } else if (sum < 0) {
        middleIndex++;
      } else {
        rightIndex--;
      }
    }
  }

  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
