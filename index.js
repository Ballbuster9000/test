const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateAsGuest();

    const characterId = "KMGd6dagzmsEL4nk6PW8x70YSB9oDjVBuCJN8RrQF8k"

    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse('hi joe', true)

    console.log(response.text);

})();
