import * as Blockly from "blockly";

const blockName = "parham_securing_cryptgeneratekey";

const blockData = {
  "message0": "Generate Key",
  "output": "key",
  "colour": 210,
  "tooltip": "Generate Key For \"cryptography\" & Save Them On DB To Use!",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Fernet.generate_key()';
  return code;
};