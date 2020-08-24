class Vechicle {
  //? [public] modifier
  public drive(): void {
    console.log('brrrr...');
  }
  protected protectedProp() {
    console.log('protected this >> ', this);
  }
  //* [private] methods and properties can be called only from inside the Class, not from instances 
}

class Car2 extends Vechicle {
  public drive() {
    super.drive();
  }
  
  public aa() {
    console.log(111);
    this.protectedProp();
  }
}

Object.defineProperty(Car2, 'doors', {
  value: 4,
  enumerable: true,
});

let car2 = new Car2();
car2.aa();

// Object.keys(car2).forEach(prop => console.log(prop));
// console.log('--- ', Object.keys(car2));

class Base {
  constructor(public color: string) {}
}

class A extends Base {
  // constructor(public color: string) {
  constructor(color: string) { //! dont put [public] modifier!!! - we don't want to make another field
    super(color);
  }
}

let a = new A('orange');
console.log('a.color :> ', a.color);
