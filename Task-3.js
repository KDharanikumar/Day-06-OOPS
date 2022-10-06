// write a class to calculate the uber price.

console.log("Uber Prie Calculation");
class uber {
  constructor(vehiclemodel, km) {
    this.km = km;
    this.vehiclemodel = vehiclemodel;
  }
}
class uberprice extends uber {
  constructor(vehiclemodel, km) {
    super(vehiclemodel, km);
  }
  pricedetail() {
    if (this.vehiclemodel === "SEDAN") {
      if (this.km >= 50) {
        console.log(`Vehicle Model ${this.vehiclemodel}`);
        console.log(`kilometer  ${this.km}km`);
        console.log(`price  ${this.km * 10}$`);
      } else {
        console.log(`Vehicle Model ${this.vehiclemodel}`);
        console.log(`kilometer  ${this.km}km`);
        console.log(`price  ${this.km * 13}$`);
      }
    } else {
      if (this.vehiclemodel === "HATCH") {
        if (this.km >= 50) {
          console.log(`Vehicle Model ${this.vehiclemodel}`);
          console.log(`kilometer  ${this.km}km`);
          console.log(`price ${this.km * 7}$`);
          return 0;
        } else {
          console.log(`Vehicle Model  ${this.vehiclemodel}`);
          console.log(`kilometer  ${this.km}km`);
          console.log(`price  ${this.km * 8}$`);
          return 0;
        }
      } else {
        if (this.vehiclemodel === "SUV") {
          if (this.km >= 50) {
            console.log(`Vehicle Model = ${this.vehiclemodel}`);
            console.log(`kilometer =  ${this.km}km`);
            console.log(`Price = ${this.km * 9}$`);
          } else {
            console.log(`Vehicle Model  ${this.vehiclemodel}`);
            console.log(`Kilometer  ${this.km}km`);
            console.log(`Price  ${this.km * 10}$`);
            return 0;
          }
        }
      }
    }
  }
}
const r = new uberprice("SUV", 20);
r.pricedetail();
