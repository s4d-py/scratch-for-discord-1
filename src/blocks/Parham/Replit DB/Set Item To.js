import * as Blockly from "blockly";

const blockName = "parham_replitdb_setitemto";

const blockData = {
  "message0": "Replit DB Set Item %1 %2 To %3",
  "args0": [
    {
      "type": "input_value",
      "name": "set",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "to"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "Replit DB Set Item To",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_set = Blockly.Python.valueToCode(block, 'set', Blockly.Python.ORDER_ATOMIC);
  var value_to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `replit.db[${value_set}] = ${value_to}\n`;
  return code;
};