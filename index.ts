function Greet(text: string): void {
  console.log(text);
}
Greet('Hello, welcome!');

import { Employee, ComplexEmployee } from './src/alias';
console.log(Employee);
console.log(ComplexEmployee);

import { checkWeather } from './src/functions';
console.log(checkWeather('Jakarta'));

import undifFunction from './src/functions';
undifFunction();
