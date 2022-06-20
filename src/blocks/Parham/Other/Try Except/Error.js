import * as Blockly from "blockly";

const blockName = "parham_error";

const blockData = {
  "message0": "Error",
  "output": "String",
  "colour": "#D14081",
  "tooltip": "Error",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'error';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};