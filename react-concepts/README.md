# Learning React

React concepts

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Concepts

- [useEffect](#useEffect)

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
