class Mobile 
{
     mobileName :string;
     price:number;
     model:string;
     battery:number;
     private support5g:boolean;

     get Supports5g(){return this.support5g}
     get Price(){return this.price;}
     set Price(cost:number){this.price = cost }
}

var iPhone = new Mobile();
iPhone.price = 35000;
iPhone.mobileName = "iPhone 11 pro";
//iPhone.support5g = false; //error.
