import { groupByKey } from './answer';

const question = () => {
  console.log('--- Problem #2: Group Objects by Key ---');
  /*
  Write a function that groups an array of objects by a specified key

  const input = [
    { name: 'Michael', department: 'Engineering' },
    { name: 'John', department: 'Engineering' },
    { name: 'Mark', department: 'Product' }
  ];

  console.log(groupByKey(input, 'department'))
  👇
  {
    "Engineering": [
        { "name": "Michael", "department": "Engineering"},
        { "name": "John", "department": "Engineering" }
    ],
    "Product": [
        { "name": "Mark", "department": "Product" }
    ]
  }
  */

  interface IUsers {
    name: string;
    department: string;
  }

  // #region YOUR CODE HERE
  // #endregion

  const users: IUsers[] = [
    { name: 'Michael', department: 'Engineering' },
    { name: 'John', department: 'Engineering' },
    { name: 'Mark', department: 'Product' },
    { name: 'Jack', department: 'HR' },
    { name: 'Jill', department: 'HR' },
    { name: 'Zach', department: 'HR' }
  ];

  console.log('Actual:', groupByKey<IUsers>(users, 'department'));
  console.log('Expected:', {
    Engineering: [
      { name: 'Michael', department: 'Engineering' },
      { name: 'John', department: 'Engineering' }
    ],
    Product: [{ name: 'Mark', department: 'Product' }],
    HR: [
      { name: 'Jack', department: 'HR' },
      { name: 'Jill', department: 'HR' },
      { name: 'Zach', department: 'HR' }
    ]
  });
};

export default question;
