import { IAnimal } from './question';

export const howManyOfType = (data: IAnimal[]) => {
  return data.reduce((acc, currentVal) => {
    const { type } = currentVal;

    if (!acc[type]) {
      acc[type] = 1;
    } else {
      acc[type]++;
    }

    return acc;
  }, {} as any);
};

export const howManyHaveCollar = (data: IAnimal[]) => {
  return data.reduce((acc, currentVal) => {
    const { type, hasCollar } = currentVal;

    if (!acc[type] && hasCollar) {
      acc[type] = 1;
    } else if (acc[type] && hasCollar) {
      acc[type]++;
    }

    return acc;
  }, {} as any);
};
