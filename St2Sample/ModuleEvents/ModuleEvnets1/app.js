const eventEmitter=require("./eventEmit")

eventEmitter.on('userRegister',()=>{
    console.log("User register handle")
})

eventEmitter.on('userDelete',()=>{
    console.log("user delete handle")
})

eventEmitter.emit('userRegister')

eventEmitter.emit('userDelete')