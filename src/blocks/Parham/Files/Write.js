import * as Blockly from "blockly";

const blockName = "parham_files_write";

const blockData = {
  "message0": "Write Text %1 %2 On File %3",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "file",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Write Text On File",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `open(${value_file}).write(${value_text})`;
  return code;
};