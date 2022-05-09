import * as Blockly from "blockly/core";

const blockName = "env";
const blockData = {
    "message0": "os.environ[ %1 ]",
    "colour": "#3333ff",
		"args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
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
  const code = [`os.environ[${value}]`, Blockly.Python.ORDER_NONE];
  return code;
};