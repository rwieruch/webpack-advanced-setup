import { map } from 'lodash';

import sum from './otherFile.js';

console.log(sum(2, 5));

console.log(map([1, 2], i => i + 1));

document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...';

console.log(process.env.NODE_ENV);
