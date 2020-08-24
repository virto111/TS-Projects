import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';


import red from './User'; //! Just for example with export default
console.log('red is :> ', red);

//! Help TS understand google global variable
// google => @types/googlemaps


//! [tsc --init] - without this command I had problem with [google] - it was NOT recognized
//! so, we might need to initialize ts config since after the command tscpnfig.json was created 
// const map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 1,
//   center: {
//     lat:0,
//     lng:0,
//   }
// });

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);



