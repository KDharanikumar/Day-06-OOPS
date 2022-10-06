class persondetail {
  constructor(name, age, dob, gender, ph) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.gender = gender;
    this.ph = ph;
  }
}

class person1detail extends persondetail {
  constructor(name, age, dob, gender, ph) {
    super(name, age, dob, gender, ph);
  }
  person1() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.dob);
    console.log(this.gender);
    console.log(this.ph);
  }
}

const p1 = new person1detail("Dharanikumar K", "30", "04-06-1992", "Male", "9999999999");

p1.person1();
