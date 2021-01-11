const ow = require('./mock_openwhisk')
async function test () {
    let result = await ow.invoke({actionName: "alexa-frontend", params: {utter : 'open smarthome to I love Taylor Swift'}})
    console.log(result)

}
test()
