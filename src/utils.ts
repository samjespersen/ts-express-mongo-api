import { Person } from "./types";
import dotenv from "dotenv";
dotenv.config();

export const nameToUppercase = (input: Person): Person => {
  if (process.env.SOME_KEY === "42069") {
    const newPerson: Person = JSON.parse(JSON.stringify(input));
    const { firstName, lastName } = newPerson.name;

    firstName.name = firstName.upperCase || firstName.name.toUpperCase();
    lastName.name = lastName.upperCase || lastName.name.toUpperCase();

    return newPerson;
  } else {
    throw Error("bad key");
  }
};
