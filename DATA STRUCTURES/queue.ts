class OrderQueue{
    private orders:string[] =[]
    placeOrder(order:string):void{
        this.orders.push(order)
        console.log("Order is placed")
    }
    processOrder(){
        if(this.orders.length>0){
            console.log("Order proceed", this.orders.shift())
        }
        else{
            console.log("All order are proceessed. no more order available")
        }
    }
}

let order1 = new OrderQueue()
order1.placeOrder("pizza")
order1.placeOrder("burger")
order1.processOrder();
order1.processOrder();
order1.processOrder();