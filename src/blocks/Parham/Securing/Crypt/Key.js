import * as Blockly from "blockly";

const blockName = "parham_securing_cryptkey";

const blockData = {
  "message0": "Key",
  "output": "key",
  "colour": 210,
  "tooltip": "Key",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'key';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};