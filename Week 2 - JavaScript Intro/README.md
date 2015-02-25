

# Introduction to JavaScript
===================================
Shamelessly copied and modified from "You Don't Know JS" by getify. Modified and simplified for Web Tier because there's just so much. But when you get the chance read through his books, I wish I had this when I started out. 

https://github.com/getify/You-Dont-Know-JS

### JavaScript as a language
#### Values & Types
JavaScript has typed values, not typed variables.

This is what it means to have typed values but not typed variables...
```javascript
var a;
typeof a;               // "undefined"

a = "hello world";
typeof a;               // "string"

a = 10;
typeof a;               // "number"

a = true;
typeof a;               // "boolean"

a = null;
typeof a;               // "object" (weird right?)

a = undefined;
typeof a;               // "undefined"

a = { hello: "world" };
typeof a;               // "object"
```
*Note that typeof returns a string of the type*

#### Objects
Learn to love them because that's pretty much all Javascript is...
They kind of work like dictionaries.

```javascript
var myObj = {
    hello: 'world',
    dog: 1,
    js: true
};

myObj.hello;            // 'world'
myObj.dog;              // 1
myObj['js'];            // true

var cat = 'dog';
myObj[cat];             // 1
```

#### Arrays
Like most languages.

```javascript
var arr = [
    'dog',
    'cat',
    'penguin',
    'cow'
];

arr[0];                 // 'dog'
```

Not much to see here...

#### Functions
Lookie your friend the object is back. Functions are a subtype of objects in Javascript.

```javascript
function hello(world) {
    return world;
};

hello.bye = 'sadness';

typeof hello;           // You tell me
typeof hello();         // Guesses?
typeof hello.bye;       // hi?
```


### Things can get weird...
#### Coercion
```javascript
// Explicit
var a = '10';
var b = Number(a);

a;                      // '42'
b;                      // 42

// Implicit
var c = a * 1;
a;                      // what do you think?
b;                      // ???
```

#### True/False
These are false
- ""
- 0, -0, NaN
- null, undefined
- false

Everything else is true

#### Equality
```javascript
var a = "42";
var b = 42;

a == b;
a === b;
```

What's the difference?

```javascript
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == b;                 // Gut instinct?
a == c;
```

Ok live demo of shit that's more confusing...
*I just don't want to type up stuff anymore so you gotta take notes...*

this is neither a reference to the function itself, nor is it a reference to the function's lexical scope.

this is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

