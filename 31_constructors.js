function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){
        console.log(`You drive the ${model}`)
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


const car2 = new Car("Mahindra", "Thar", 2025, "black");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

const car3 = new Car("Dodge", "Charger", 2026, "silver");
console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color);

car1.drive()
car2.drive()
car3.drive()