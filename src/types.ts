export type Person = {
  name: FullName;
  age: number;
};

export type Name = {
  name: string;
  upperCase?: string;
};

export type FullName = {
  firstName: Name;
  lastName: Name;
};
