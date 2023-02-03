import { nameToUppercase } from "./utils";
import { Person, Name } from "./types";

const myFirstName: Name = {
  name: "Sam",
};

const myLastName: Name = {
  name: "Jespersen",
  upperCase: "JESPERSEN",
};

const SamJespersen: Person = {
  name: {
    firstName: myFirstName,
    lastName: myLastName,
  },
  age: 69,
};

console.log(
  `My name is ${SamJespersen.name.firstName.name} ${SamJespersen.name.lastName.name}`
);
const SAMJESPERSEN = nameToUppercase(SamJespersen);

console.log(
  `My name is ${SamJespersen.name.firstName.name} ${SamJespersen.name.lastName.name}`
);
console.log(
  `MY NAME IS ${SAMJESPERSEN.name.firstName.name} ${SAMJESPERSEN.name.lastName.name}`
);
