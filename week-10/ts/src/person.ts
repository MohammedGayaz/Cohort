interface Person {
  name: string;
  age: number;
  aged?: boolean;
  greet(msg: string): void;
}

export class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(msg: string): void {
    console.log(msg);
  }
}

export class Manager implements Person {
  name: string;
  age: number;
  aged: boolean;

  constructor(n: string, a: number, ad: boolean) {
    this.name = n;
    this.age = a;
    this.aged = ad;
  }
  greet(msg: string): void {
    console.log(msg);
  }
}
