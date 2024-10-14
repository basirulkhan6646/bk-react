import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.jsx';

// function MyApp() {
//   return (
//     <div>
//       <h1>Hello, world! Welcome to BK world!</h1>
//     </div>
//   );
// }

//This will not work as we are not sending predefine parameteres
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click here to visit Google',
// };

//This is will work as we are sending direct HTML

// const ReactElement2 = (
//   <a href="https://google.com" target="_blank">
//     Click Here
//   </a>
// );

const username = 'Basirul Khan';

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click here to visit Googles',
  username
);

const root = createRoot(document.getElementById('root'));

root.render(ReactElement);
