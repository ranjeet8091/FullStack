const logger=require("./log")

logger.on('logged',(detail)=>{
    console.log(`Handled Event ${detail.username}`)
})

logger.logger();