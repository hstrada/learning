# Learning React

React concepts

# Book
Learning React, 2nd Edition, by Eve Porcello; Alex Banks

Published by O'Reilly Media, Inc., 2020

[O'Reilly](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)

## Description

Learning React creates another dimension about some react ideas and how to use the best of it. It contains concepts about: js, hooks, data, webpack, context api and more.

# Concepts

- [js](#js)
- [useEffect](#useEffect)
- [useReducer](#useReducer)

## js

```js
const person = {
  type: 'person',
  data: {
    gender: 'female',
    info: {
      id: 28,
      fullname: {
        first: 'Helena',
        last: 'Road',
      },
    },
  },
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');
  console.log(first, ...remaining);
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first];
};

console.log(deepPick('data.info.fullname.last', person))
// road
```

## useEffect

```js
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    // onmount
    const interval = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      // clear unmount
      clearInterval(interval);
    };
    // looking for something to change
  }, [count]);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
```

## useReducer

```js
function Numbers() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}
```