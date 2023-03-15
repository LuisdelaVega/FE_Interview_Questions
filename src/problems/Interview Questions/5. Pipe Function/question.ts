import { pipe, pipeAlt } from './answer';

const question = () => {
  console.log('--- Problem #5: Pipe Function ---');
  /*
  1. Write a function (pipe) that takes in any number of functions
  and passes in the output of the previous one into the next one.
  Repeat until all functions have executed and return the output.
  */

  // const addThree = (x: number) => x + 3;
  function addThree(value: number) {
    return value + 3;
  }
  const getSquareValue = (value: number) => value * value;

  //#region YOUR CODE HERE
  //#endregion

  const addThreeThenSquare = pipe(addThree, getSquareValue);
  console.log(addThreeThenSquare(6));

  /*
  2. (Optional) Can you write it as a function with a signature that
  has no required arguments. Like so:

    ```
    function pipeAlt() {
      // YOUR CODE HERE
    }
    ```
  */

  //#region YOUR CODE HERE
  //#endregion

  // @ts-expect-error
  const addThreeThenSquareEs5 = pipeAlt(addThree, getSquareValue);
  console.log(addThreeThenSquareEs5(6));
};

export default question;
