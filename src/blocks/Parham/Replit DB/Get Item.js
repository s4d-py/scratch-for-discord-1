import * as Blockly from "blockly";

const blockName = "parham_replitdb_getitem";

const blockData = {
  "message0": "Get Item %1 From Replit DB",
  "args0": [
    {
      "type": "input_value",
      "name": "get",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 255,
  "tooltip": "Get Item From Replit DB",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_get = Blockly.Python.valueToCode(block, 'get', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `replit.db[${value_get}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};