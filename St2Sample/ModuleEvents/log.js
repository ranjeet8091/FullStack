const EventEmitter=require("events");

class logging extends EventEmitter{
    logger()
    {
        console.log("login");
        this.emit('logged',{username:"Ranjeet"})
    }
}

const logger=new logging();
module.exports=logger