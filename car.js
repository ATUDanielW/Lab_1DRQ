class Vehicle {
    // constructor used to inistialise data in the class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        
    }
    //method used to tak in information on  make, model, year and doors
    info() {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);

    }
}
//create an instance of class car
class Car extends Vehicle{
    constructor(make,model,year,doors){
        //child class Car inheriting from the parent class vehicle
    super(make,model,year,doors);
    this.doors = doors;
    }
    
    info(){
        super.info();
        console.log(`Doors: ${this.doors}.`);
    }

}

//output make model year doors
let myCar = new Car('VM', 'Jetta', 2022, 5);
myCar.info();
//let myVehicle = new Vehicle ('vm', 'Jetta', 2022);
//myVehicle.info();