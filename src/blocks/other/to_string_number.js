import * as Blockly from "blockly/core";

const blockName = "command_arg";
const blockData = {
    "message0": "Get argument %1 of command",
    "colour": "#a55b80",
		"args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        },
		],
    "tooltip": null,
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
	const value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC);
  let value1 = value - 1;
  const code = [`args[${value1}]`, Blockly.Python.ORDER_NONE];
  return code;
};