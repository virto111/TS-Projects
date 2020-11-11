//* Decorator might be applied on Property, Method, Accessor
//! Decorator is Executed only once! On Class definition. On CLass instance
//! decorator is not Executed

@classDecorator
class Boat {
  @testPropDecorator //! We dont have access to property, since target is the [Prototype] of the Class
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }
  
  @testPropDecorator
  someMethod2(@paramDecorator someArg: string): number {
    return 111;
  }

  // @testDecorator //* -> comment/uncomment it in order to change with [__decorate] function below
  pilot(): void {
    console.log('swish');
  }

  // @logError //* -> Decorator will cath the Error and proceed with some cusotm logic, that is why we need 3-rd argument [descriptor]
  @logError('--- Decorator message ---') //! As a Decorator Factory
  someMethod(): void {
    throw new Error();
    console.log(123);
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log('constructor :: ', constructor);
}

function paramDecorator(target: any, key: string, index: number) {
  console.log('key ::', key)
  console.log('index ::', index)
}

function testPropDecorator(target: any, key: string) {
  console.log('key >>> ', key)
}

//* Decorator Function
function testDecorator(target: any, key: string): void {
  console.log('Target: ', target); //* -> Boat Prototype => {pilot: Function}
  console.log('Key: ', key);       //* -> pilot
}
function logError(errorMessage: string): Function {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    }
  }
}
// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   const method = desc.value;
//   desc.value = function() {
//     try {
//       method();
//     } catch (err) {
//       console.log('Error from the Decorator');
//     }
//   }
// }

new Boat().someMethod();

//* Below is refined version of decorator
var __decorate = function(decorators: any, target: any, key: any, desc: any) {
  var desc: any = Object.getOwnPropertyDescriptor(target, key);

  for (var decorator of decorators) {
    decorator(
      target, //* => Prototype of class, in this case [Boat] 
      key,    //* => Property -> where the Decorator is applied
      desc    //* => Descriptor
    );
  }
}

//? SO, with the above destruction of THE DECORATOR we can conclude that we can just call
//? [testDecorator] like this: testDecorator(Boat.prototype, 'pilot') 
testDecorator(Boat.prototype, 'pilot');

//* Property Descriptor: Configuration for [Properties] of Objects
/*
* Writable - can the property be changed?
* Enumerable - seen in [for..in] loop?
* Value     - current value of the property!
* Configurable - property definition and can be deleted?
*/
const car22: any = {
  make: 'honda',
  year: 2012,
};

Object.getOwnPropertyDescriptor(car22, 'make'); //* value: 'honda'; writable: true, enumerable: true; configurable: true;
Object.defineProperty(car22, 'make', {
  writable: false, //! now can not rewrite the property
});
// car22.make = 'BMV'; //! This now throws an error

//! Below is the Decorator from TSC Compiler
// var __decorate = function (decorators, target, key, desc) {
//   var argLen = arguments.length; 
//   var targOrDesc = argLen < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
//   var dec;

//   if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
//     targOrDesc = Reflect.decorate(decorators, target, key, desc);
//   }

//   else for (var i = decorators.length - 1; i >= 0; i--) {
//     if (dec = decorators[i]) targOrDesc = (argLen < 3 ? dec(targOrDesc) : argLen > 3 ? dec(target, key, targOrDesc) : dec(target, key)) || targOrDesc;
//   } 

//   return argLen > 3 && targOrDesc && Object.defineProperty(target, key, targOrDesc), targOrDesc;
// };

// var __metadata = (this && this.__metadata) || function (k, v) {
//   if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
// };

// __decorate([
//   testDecorator,
//   __metadata("design:type", Function),
//   __metadata("design:paramtypes", []),
//   __metadata("design:returntype", void 0)
// ], Boat.prototype, "pilot", null);