import Blockly from "blockly/core";

const blockName = "fz_emoji_exist";

const blockData = {
    "message0": "emoji %1 exists?",
    "args0": [
        {
            "type": "input_value",
            "name": "EMOJI",
            "check":  "Emoji" 
        },
    ],
    "output": "Boolean",
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const emoji = Blockly.JavaScript.valueToCode(block, "EMOJI", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${emoji} !== undefined`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};