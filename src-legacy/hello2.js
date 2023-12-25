import Btn from './Components/Btn/btn.js';
import helloWorld from './hello-world.js';
import addImg from './img.js';
import React from 'react';
import Heading from './Components/heading/heading.js';

const btn = new Btn();
btn.render();
helloWorld();
addImg();

const heading = new Heading();

heading.render('hi 월드');

let test = 'is change ? ';

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'production') {
  console.log('development mode');
}

heading.methodTahtDoesNotSexist();
