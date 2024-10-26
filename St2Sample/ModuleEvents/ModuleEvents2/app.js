
const {placeOrder,eventEmiter}=require("./emitEvents")

eventEmiter.on('orderPlaced',()=>{
    console.log("Order Place")
})

placeOrder("Ranjeet");

