import * as Blockly from "blockly";

const blockName = "parham_files_read";

const blockData = {
  "message0": "Read File %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "file",
      "check": "String"
    },
    {
      "type": "input_dummy"
    }
  ],
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

Blockly.Python[blockName] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `open(${value_file}, encoding="utf8").read()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};