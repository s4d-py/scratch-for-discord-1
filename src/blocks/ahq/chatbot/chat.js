import * as Blockly from "blockly";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "chat_ahq";
const blockData = {
    "message0": "Chat Message %1 %2 Bot Name %3 %4 UserId %5 %6 Channel %7",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "user",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "channel",
            "check": "Channel"
        }
    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = `client.chat({message:${statementsThen}, name:${name}, owner:"scratch-for-discord-469-dev-ahqminessyt", user: 849690256945184828, language:"en"}).then(reply => {
        ${Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_NONE)}.send(String(reply));
        });`;
    return code;
};