const frontend = require('./frontend/index')
const interact = require('./interact/index')
const smarthome = require('./smarthome/smarthome/smarthome-index')
const door = require('./smarthome/door/door-index')
exports.invoke = function invoke(params) {
    return new Promise(async (resolve, reject) => {
        switch (params.actionName) {
            case "alexa-frontend": {
                let result = await frontend.main(params.params)
                // console.log("%s result: %o\n", params.actionName,result)
                resolve(result)
                return;
            }
            case "alexa-interact": {
                let result = await interact.main(params.params)
                // console.log("%s result: %o\n", params.actionName,result)
                resolve(result);
                return;
            }
            case "alexa-smarthome": {
                let result = await smarthome.main(params.params)
                // console.log("%s result: %o\n", params.actionName,result)
                resolve(result);
                return;
            }
            case "alexa-home-door": {
                let result = await door.main(params.params)
                // console.log("%s result: %o\n", params.actionName,result)
                resolve(result);
                return;
            }
        }
    })
}
