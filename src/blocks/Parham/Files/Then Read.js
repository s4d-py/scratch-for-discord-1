import * as Blockly from "blockly";

const blockName = "parham_files_thenread";

const blockData = {
  "message0": "Read File",
  "output": "String",
  "colour": 240,
  "tooltip": "Read File",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'file.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};