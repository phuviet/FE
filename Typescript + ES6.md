# Typescript & ES6
## Knowledge round-up
### Typescript
> `What is TypeScript and Why do we need it?`

- Typescript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.
- We need Typescript because it makes code easier to read and understand and easy to perform your ideals.

> `How can you get Typescript and install it?`

- To get Typescript, you just use **npm** to install Typescript's packages because Typescript is a package which managed by **npm**. Install Typescript's package by syntax: `npm install -g typescript`

> `How do you compile Typescript files?`

- To compile Typescript file, we need **cd** to folder which contain this Typescript file which have suffixe is **.ts** in terminal first and execute command `tsc file_name.ts`, then it will render for us a Javascript file which have  suffixe is **.js** with the same as Typescript file name and be contained in current folder.

> `Which Object Oriented terms are supported by TypeScript? Write an example.`

- Object Oriented terms are supported by TypeScript such as: **constructor**, **extends**, **super**, **class**, **this**, **module**,...
- Example: We have a class **Bird** with two attributes are **foot** and **name**, we will write the constructor to create an object of this class with number of **foot**, **name** and the method to perform info about this object.

```
//example.ts

class Bird{
	name: string;
	foot: number;
	constructor(name, foot){
		this.name = name
		this.foot = foot;
	}
	info(){
		document.write(`I am Bird ${this.name}. I walk by ${this.foot} foots.`);
	}
}
```
> `How do you implement inheritance in Typescript? Write an example.`

- To implement inheritance in Typescript we use keyword **extends parent_class** for subclass which want to inherit this parent class. 
- Example: follow example above, we have class **Animals** is a parent class of **Bird** and it also have two attribute **foot** and **name**. We override class **Bird** by inherit from **Animals** class, **Bird** class will inherit info method automatic and inherit constructor of parent class by keyword **super**.
```
//example.ts

class Animal{
	name: string;
	foot: number;
	constructor(name, foot){
		this.name = name;
		this.foot = foot;
	}
	info(){
		document.write(`I am ${this.name}. I walk by ${this.foot} foots.`);
	}
}

class Bird extends Animals{
	constructor(name, foot){
		super(name, foot);
	}
}

var duck = new Bird("Duck", 2);
duck.info();
//=> I am Duck. I walk by 2 foots.
```

### ES6
> Write an example for each of the following new features in ES6:  `Block scope variable`, `Template Literals`, `Multi-line strings`, `Arrow functions`, `For...of`, `Default parameters`.

- Block scope variable: the global variables can be accessed inside function but the local variables can't be accessed outside function.
Example:
```
var five = 5;
var threeAlso = three; //error

function scope1(){
	var three = 3;
	var fiveAlso = five; // == 5
	var sevenAlso = seven; // error
}

function scope2(){
	var seven = 7;
	var fiveAlso = five; // == 5
	var threeAlso = three; // error
}
```
- Template Literals: new type of string literal that is marked with back ticks (`).
Example:
```
var name = 'Viet';
var age = 22;
console.log(`hello my name is ${name}, and I am ${age} years old`);
```
 
 - Multi-line strings: with back ticks (`) we can perform strings in multi-line.
Example:
```
var $input = document.getElementById('js-name');
var $content = document.getElementById('js-content');
function printName() {
	$content.innerHTML += `
		${$input.value} 
		<br/>
	`;
}

//after build for .js file

var $input = document.getElementById('js-name');
var $content = document.getElementById('js-content');
function printName() {
	$content.innerHTML += "\n\t\t\t" + $input.value + " \n\t\t\t<br/>\n\t\t";
}
```

- Arrow functions: be offered by ES6 to dealing with **this**.
Example:
```
//normal function
items.forEach(function(x) {
	console.log(x);
	incrementedItems.push(x+1);
});

//be rewritten as an "arrow function"
items.forEach((x) => {
	console.log(x);
	incrementedItems.push(x+1);
});
```
- Default parameters:
Example:
```
function append(value, array = []) {
  array.push(value);
  console.log(array);
}

append(1); //=> [1]
append(2); //=> [2] instead of [1,2]
append(3,[1,2]) //=> [1,2,3]
```

- For...of: for...of loop uses an iterator to visit the values in an array, not the available keys.
Example:
```
//use for...in
let sum = 0; 
let numbers = [1,2,3,4]; 
 
for(let i in numbers) { 
    sum += numbers[i]; // notice the indexer 
} 
 
expect(sum).toBe(10);

//use for...of
let sum = 0;
let numbers = [1,2,3,4];
 
for(let n of numbers) {
    sum += n; //don't notice the indexer
}
 
expect(sum).toBe(10);
```
