import Blockly from "blockly/core";

const blockName = "s4d_channel_exist";

const blockData = {
    "message0": "channel %1 exist?",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check":  "Channel" 
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

Blockly.Python[blockName] = function(block) {
    const channel = Blockly.Python.valueToCode(block, "CHANNEL", Blockly.Python.ORDER_ATOMIC);
    const code = [`${channel} is not None`, Blockly.Python.ORDER_NONE ];
    return code;
    
};