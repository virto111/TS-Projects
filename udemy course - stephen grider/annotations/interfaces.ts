interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldVehicle = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: () => 'some string',
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle);
};

printVehicle(oldVehicle);

interface NotCompleteVehicle {
  summary(): string;
}

//! Below no error although ONLY [summary] is in the Interface
const printVehicle2 = (vehicle: NotCompleteVehicle): void => {
  console.log(vehicle);
};