/*
* Metadata is feature proposed to be added to JS
* Associate additional data to an object OR Properties of an object
*/

import 'reflect-metadata';

const plane = {
  color: 'red',
  //* attached like Invisible property 'note': 'hi there'
};
                      //! [key] [value]    [Object]
Reflect.defineMetadata('note', 'hi there', plane);
                      //! [ meta key ]               [ meta value ]                      [Object] [Property of Object]
Reflect.defineMetadata('metaToColorProp', 'This is attached to color prop as Metadata', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const color = Reflect.getMetadata('metaToColorProp', plane, 'color');

console.log('note :: ', note);
console.log('color :: ', color);

//? Use Metadata with TS Class
@printMetadata
class Plane {
  color: string = 'red';

  // @markFunction
  @markFunction2('HI THERE!!!')
  fly(): void {
    console.log('vrrrrr');
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(':: secret ::>> ', secret);
  }
}
function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}
function markFunction2(secretInfo: string): Function {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log('secret :: ', secret); //* 123

