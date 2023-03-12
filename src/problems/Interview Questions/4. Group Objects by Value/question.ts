import { howManyHaveCollar, howManyOfType } from './answer';

enum EAnimalType {
  dog = 'dog',
  cat = 'cat',
  bat = 'bat'
}

export type IAnimal = {
  type: EAnimalType;
  value: number;
  hasCollar?: boolean;
};

const question = () => {
  console.log('--- Problem #4: Group Objects by Value ---');
  /*
  1. Write a function that takes in the `data` array below 
  and returns an object whose key value pair represent the
  animal types and how many of each type of animal are in
  the array.
  */
  const animalData: IAnimal[] = [
    { type: EAnimalType.dog, value: 3, hasCollar: true },
    { type: EAnimalType.cat, value: 4, hasCollar: true },
    { type: EAnimalType.cat, value: 5, hasCollar: false },
    { type: EAnimalType.cat, value: 6, hasCollar: true },
    { type: EAnimalType.bat, value: 1 },
    { type: EAnimalType.bat, value: 2 }
  ];

  // #region YOUR CODE HERE
  // #endregion

  console.log('Actual:', howManyOfType(animalData));
  console.log('Expected:', {
    dog: 1,
    cat: 3,
    bat: 2
  });

  /*
  2. Now write a similar function but only show the ones
  that have a collar.
  */

  // #region YOUR CODE HERE
  // #endregion

  console.log('Actual:', howManyHaveCollar(animalData));
  console.log('Expected:', {
    dog: 1,
    cat: 2
  });
};

export default question;
