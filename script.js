if (true) {
  import("./module.js")
    .then(({ default: printModule }) => {
      printModule();
    })
    .catch((err) => {
      console.log("error is", err);
    });
}

function calculateTax(price, tax, description) {
  tax = tax ?? 0.05;
  description = description ?? "Default Item";
  const total = price * (1 + tax);
  console.log(
    `%c${description} With Tax:%c $${total}`,
    "font-weight:900;",
    "font-weight:900;color:green;"
  );
}
calculateTax(100, 2, "My item");
calculateTax(100, 0, "My other item");
calculateTax(100, 2, undefined);
calculateTax(100, undefined, "My Other items");
calculateTax(100, undefined, undefined);

class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }
  print() {
    console.log(this);
  }
}

function printPersonStreet(person) {
  console.log(person?.address?.street);
}

const kyle = new Person(
  "Kyle",
  {
    street: "5/2B,Nazimabad",
    city: "Karachi",
    province: "Sindh",
    country: "Pakistan",
  },
  ["Coding", "Programming"]
);
kyle.print?.();
printPersonStreet(kyle);

// Scope of a variable in two different ways
const a = 2;
{
  const a = 1;
  console.log(`a: ${a}`);
}
console.log(`a: ${a}`);

// Scope of a variable using {}
switch (a) {
  case 1: {
    const result = a * 2;
    console.log(`result is: ${result}`);
    break;
  }
  case 2: {
    const result = a * 2;
    console.log(`result is: ${result}`);
    break;
  }
  case 3: {
    const result = a * 2;
    console.log(`result is: ${result}`);
    break;
  }
}

// in keyword in JS

const person = {
  // name: "John",
  name: "John",
  age: 20,
};

if ("name" in person) {
  console.log(`Name is exist and it is: ${person.name}`);
} else {
  console.log(`Name doesnot exist`);
}

// Template Literals
// function custom(strings, name, hobby) {
function custom(strings, ...values) {
  // console.log(strings, values);
  // return "Hi";
  return values.reduce((finalString, value, index) => {
    return `${finalString}${value}${strings[index + 1]}`;
  }, strings[0]);
}
const firstName = "John Habbit";
const hobby = "Coding";
console.log(custom`My name is ${firstName} and I love ${hobby}`);

// generator function to generate

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

function* generatorFunction() {
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");
  yield 2;
  console.log("After 2");
}

const simpleCallingGenratorFunction = generatorFunction();
const simpleCallingIdGenratorFunction = idGenerator();
console.log(
  "simpleCallingGenratorFunction",
  simpleCallingGenratorFunction.next()
);
console.log(
  "simpleCallingGenratorFunction",
  simpleCallingGenratorFunction.next()
);
console.log(
  "simpleCallingGenratorFunction",
  simpleCallingGenratorFunction.next()
);
console.log(
  "simpleCallingIdGenratorFunction",
  simpleCallingIdGenratorFunction.next()
);
console.log(
  "simpleCallingIdGenratorFunction",
  simpleCallingIdGenratorFunction.next()
);
console.log(
  "simpleCallingIdGenratorFunction",
  simpleCallingIdGenratorFunction.next()
);
const personsArray = [
  { name: "John", age: 20 },
  { name: "Smith", age: 25 },
];
console.table(personsArray);
const x = 1;
console.assert(x === 2 && "Failed attempt no issue");

// https://register.joinasf.gov.pk/advertisements

// http://203.124.33.90/public/documents/Advertisement.pdf
