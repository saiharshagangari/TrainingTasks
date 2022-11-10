let itemDesc : string = "Parle -G Biskoot"
let itemQuant :number = 5
let itemCode = "PG05"
let itemCost : number = 5
let itemMfgDate : Date = new Date()

let anytype = 5 as any;
anytype = "Any type is now string" as string;
anytype = true as boolean;

function getItem (itemCode) : 
    {
        itemDesc : string ;
        itemQuant :number ;
        itemCode ;
        itemCost : number ;
        itemMfgDate : Date ;
    }
    {
        return {itemDesc,itemQuant,itemCode,itemCost,itemMfgDate};
    }

function setItem(item){}

let item = getItem(itemCode);
let newitem = item; //type-inference

item.itemCost = 4  ;
console.log(item.itemCost)
setItem(item)
///////////////////////////////////////Interfaces////////////////////////
let carName:string = "baleno";
var carMileage :number = 20.7;
var carColor:string = "grey";
var carRegNumber:string = "ABC123";
var carTopSpeed: number = 150;
var carRegDate = new Date();


interface Car
{
    name:string;
    readonly mileage:number;
    topspeed:number;
    color:string;
    regDate : Date;
    regNumber:string;
    startCar() : string; // type 1 of creating a method
    stopCar ?: () => string;//type 2 of creating a method
}
function getCarDetails(registratioNumber:string) : Car
{
    //return {carName,carMileage,carTopSpeed,carColor,carRegNumber};
    return null
}

function manufactureCar (car:Car)
{
    //car.mileage = 4.5; // can't assign it is readonly property
}

function EngineOn(){return "Engine started";}
function EngineOff(){return "Engine Stoppped";}
manufactureCar({
    name:"ms baleno",
    topspeed:150,
    mileage:20.7,
    color:"red",
    regDate:new Date(),
    regNumber:"ABC456",
    startCar() {return "Engine started"},
    //stopCar () {return "Engine Stopeed"} //since it is optional no need to mention
})


////////////////Restricting possible values with Enums////////////////////////////
interface Menu 
{
    dish:string;
    price:number;
    dishCode:string;
    //dishType:DishType //resulsts DishType[DishType["Soup"] = 0] = "Soup" -1
    //dishType : DishType; //results DishType["Soup"] = "soup"
    dishType : "Soups" | "Desserts" | "Main Course" | "Thick Shakes";
}
//enum DishType{"Soup","Starters","Main Course","Desserts","ThickShakes"} -1
//enum DishType {"Soup" = "soup","Starters"="starters","Main Course"="main course","Desserts" = "desserts"}

function OrderFood(food:Menu)
{

}

OrderFood({
    dish:"Waffles",
    price:120,
    dishCode:"55GHI",
    //dishType:DishType.Desserts //valid
    dishType : "Soups" // doesn't produce any code. Treats it just like a string
});


////////////////////////Union Types/////////////////////////////
let input : number | boolean;
input = 5; //valid
input = true; //valid

//another way of putting above statement

type newType = number | boolean;
let anotherinput : newType;
anotherinput = 78; //valid
anotherinput = false //valid

////////problem - type inferencing ////////////
let pi : number;
let myinput : newType;
//pi = myinput; //Error since myinput can be a number or a boolean value

if(typeof myinput === "number")
{
    pi = myinput;
}
else
{
    let boolPi = myinput;
}
    





