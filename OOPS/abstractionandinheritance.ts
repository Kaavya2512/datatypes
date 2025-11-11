abstract class FoodService{
    abstract searchRestaurant(food:string):void;
    abstract pay(amount:number):void;
    abstract placeOrder(food:string,qty:number):void;
    closureMessage(msg:string){
        console.log(msg)
    }
}
class Swiggy extends FoodService {
   searchRestaurant(food: string): void{
        console.log("searching the restaurant for the given food:",food)
   }
   pay(amount: number): void{
    console.log("you have successfully paid")

   }
   placeOrder(food: string, qty: number): void{
    console.log("order has been placed")
   }
}


class Zomato extends FoodService {
  searchRestaurant(food: string): void {
    console.log("zomato")
  }
  pay(amount: number): void {
    console.log("zomato");
  }
  placeOrder(food: string, qty: number): void {
    console.log("zomato");
  }
}
const userOrder = new Zomato();
userOrder.searchRestaurant("Pizza");
userOrder.placeOrder("Pizza", 2);
userOrder.pay(2000);