const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();
let author = "tester guy"

(async() => {
    await characterAI.authenticateWithToken(process.env.caitoken); // add this to .env file cuz guest is bad lol

    const characterId = "KMGd6dagzmsEL4nk6PW8x70YSB9oDjVBuCJN8RrQF8k"

    const chat = await characterAI.createOrContinueChat(characterId);
    let introduction = `(OOC: This message has been sent by ${author}.\n\n)`
    let message = "hello" // actual message
    let msg = introduction + message
    
    let response = await chat.sendAndAwaitResponse(msg, true)
    // know's persons username now ig, have fun playing with this

    console.log(response.text);

})();
