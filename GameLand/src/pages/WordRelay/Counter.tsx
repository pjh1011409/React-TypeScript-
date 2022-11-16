// import * as React from 'react';
// import { useState, useEffect } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count => count - 1);
//     }, 1000);
//     if (count === 0) {
//       clearInterval(id);
//     }
//     return () => clearInterval(id);
//   }, [count]);

//   return <h1>{count}</h1>;
// };

// export default Counter;
