class BMI {
    // constructor used to inistialise data in the class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    // create method that will return calculated bmi
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}
// create instance of the class and invoke the calculateBMI method
let myBMI = new BMI(2, 100);
console.log(myBMI.calculateBMI());