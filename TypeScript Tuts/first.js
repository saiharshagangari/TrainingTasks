var itemDesc = "Parle -G Biskoot";
var itemQuant = 5;
var itemCode = "PG05";
var itemCost = 5;
var itemMfgDate = new Date();
var anytype = 5;
anytype = "Any type is now string";
anytype = true;
function getItem(itemCode) {
    return { itemDesc: itemDesc, itemQuant: itemQuant, itemCode: itemCode, itemCost: itemCost, itemMfgDate: itemMfgDate };
}
function setItem(item) { }
var item = getItem(itemCode);
var newitem = item; //type-inference
item.itemCost = 4;
console.log(item.itemCost);
setItem(item);
///////////////////////////////////////Interfaces////////////////////////
var carName = "baleno";
var carMileage = 20.7;
var carColor = "grey";
var carRegNumber = "ABC123";
var carTopSpeed = 150;
var carRegDate = new Date();
function getCarDetails(registratioNumber) {
    //return {carName,carMileage,carTopSpeed,carColor,carRegNumber};
    return null;
}
function manufactureCar(car) {
    //car.mileage = 4.5; // can't assign it is readonly property
}
function EngineOn() { return "Engine started"; }
function EngineOff() { return "Engine Stoppped"; }
manufactureCar({
    name: "ms baleno",
    topspeed: 150,
    mileage: 20.7,
    color: "red",
    regDate: new Date(),
    regNumber: "ABC456",
    startCar: function () { return "Engine started"; }
});
//enum DishType{"Soup","Starters","Main Course","Desserts","ThickShakes"} -1
//enum DishType {"Soup" = "soup","Starters"="starters","Main Course"="main course","Desserts" = "desserts"}
function OrderFood(food) {
}
OrderFood({
    dish: "Waffles",
    price: 120,
    dishCode: "55GHI",
    //dishType:DishType.Desserts //valid
    dishType: "Soups"
});
