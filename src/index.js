import Btn from './Components/Btn/btn.js';
import helloWorld from './hello-world.js';
import addImg from './img.js';

import Heading from './Components/heading/heading.js';

const btn = new Btn();
btn.render();
helloWorld();
addImg();

const heading = new Heading();

heading.render();

let test = 'is change ? ';
