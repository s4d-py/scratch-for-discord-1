import * as Blockly from "blockly";

const blockName = "parham_replitdb_getallitems";

const blockData = {
  "message0": "Get All Items From Replit DB",
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

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'replit.db.keys()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};