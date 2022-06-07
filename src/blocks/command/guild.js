import * as Blockly from "blockly/core";

const blockName = "command_guild";

const blockData = {
    "message0": "Command server",
    "colour": "#d85e47",
    "tooltip": "",
    "output": "Server",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
    const code = ["ctx.guild", Blockly.Python.ORDER_NONE];
    return code;
};