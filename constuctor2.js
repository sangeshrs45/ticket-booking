class Bike{
    constructor (color,engine,brand,model,speed){
        this.color =color;
        this.engine = engine;
        this.brand=brand;
        this.model=model;
        this.speed=speed;
    }
    bikedetails() {
        console.log(`Color: ${this.color}, Engine: ${this.engine}, Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed}`);
    }
    
}
let customer1 = new Bike("black","150cc","honda","2024","100km/h");
let customer2 = new Bike("black", "200cc", "pulsar", "2023", "150km/h");
let customer3 = new Bike("green", "180cc", "tvs50", "2022", "60km/h");
let customer4 = new Bike("White", "250cc", "xcel", "2024", "80km/h");
let customer5 = new Bike("Green", "300cc", "platina", "2025", "100km/h");

for(let i =0;i< 5;i++){
customer1.bikedetails()
customer2.bikedetails()
customer3.bikedetails()
customer4.bikedetails()
customer5.bikedetails()
}