export function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }

  let replacementIndex = nums.findIndex((value) => !value);

  if (replacementIndex === -1 || replacementIndex === nums.length - 1) {
    return;
  }

  for (let index = replacementIndex + 1; index < nums.length; index++) {
    const value = nums[index];

    if (value !== 0) {
      nums[replacementIndex] = value;
      replacementIndex++;
    }
  }

  while (replacementIndex < nums.length) {
    nums[replacementIndex] = 0;
    replacementIndex++;
  }
}

// nums -> [0, 1, 0, 3, 12]
// movesNeeded = 2

// index = 0
//         👇
// nums -> [0, 1, 0, 3, 12]
// movesDone = 0
// Check if 0 and movesDone < movesNeeded
// Move the 0 -> [1, 0, 3, 12, 0]
// movesDone++ -> 1
// Don't increment index

// movesDone = 1
// index = 0
// Check if 0 and movesDone < movesNeeded
// Don't move anything -> [1, 0, 3, 12, 0]
// Don't ioncrement movesDone
// index++

// movesDone = 1
// index = 1
// Check if 0 and movesDone < movesNeeded
// Move the 0 -> [1, 3, 12, 0, 0]
// movesDone++ -> 2
// return here
export const moveZeroesAlt = (nums: number[]): void => {
  if (nums.length <= 1) {
    return;
  }

  let movesDone = 0;
  const movesNeeded = nums.reduce((acc, currValue) => {
    if (!currValue) {
      ++acc;
    }

    return acc;
  }, 0);

  for (let index = 0; movesDone < movesNeeded; index++) {
    if (!nums[index]) {
      nums.splice(index, 1);
      nums.push(0);
      ++movesDone;
      --index;
    }
  }
};

// NOTE Not mine -> https://medium.com/@rebeccahezhang/leetcode-283-move-zeroes-321293784283
export const moveZeroesAlt1 = (nums: number[]): void => {
  if (nums.length <= 1) {
    return;
  }

  let index1 = 0;
  const movesNeeded = nums.reduce((acc, currValue) => {
    if (!currValue) {
      ++acc;
    }

    return acc;
  }, 0);

  for (let index2 = 0; index1 < nums.length - movesNeeded; index2++) {
    if (nums[index2]) {
      nums[index1++] = nums[index2];
    }
  }

  while (index1 < nums.length) {
    nums[index1++] = 0;
  }
};
