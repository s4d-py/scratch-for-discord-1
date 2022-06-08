import * as Blockly from "blockly";

const blockName = "parham_replitdb_deleteitem";

const blockData = {
  "message0": "Delete Item %1 From Replit DB",
  "args0": [
    {
      "type": "input_value",
      "name": "delete",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 255,
  "tooltip": "Get All Items From Replit",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_delete = Blockly.Python.valueToCode(block, 'delete', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `del replit.db[${value_delete}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};