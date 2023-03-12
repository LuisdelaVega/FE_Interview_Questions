export function rotate(nums: number[], k: number): void {
  let iterations = k % nums.length;

  if (!iterations || nums.length <= 1) {
    return;
  }

  nums.unshift(...nums.slice(nums.length - iterations));

  while (iterations) {
    nums.pop();
    iterations--;
  }
}
