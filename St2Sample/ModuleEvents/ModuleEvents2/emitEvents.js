const EventEmitter=require("events");
const eventEmiter=new EventEmitter();

function placeOrder(name)
{
  console.log(name);
  eventEmiter.emit('orderPlaced');
}

module.exports={placeOrder,eventEmiter}