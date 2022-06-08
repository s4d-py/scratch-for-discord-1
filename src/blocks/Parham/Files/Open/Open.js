import * as Blockly from "blockly";

const blockName = "parham_files_open";

const blockData = {
  "message0": "Open File %1 %2 Then %3",
  "args0": [
    {
      "type": "input_value",
      "name": "file",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "open",
      "check": "open"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Open File Then",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_file = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  var statements_open = Blockly.Python.statementToCode(block, 'open');
  // TODO: Assemble Python into code variable.
  var code = `with open(${value_file}, "w", encoding="utf8") as file:
${statements_open}\n`;
  return code;
};