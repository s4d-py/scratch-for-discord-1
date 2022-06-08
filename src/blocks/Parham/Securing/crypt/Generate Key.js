import * as Blockly from "blockly";

const blockName = "parham_securing_cryptgeneratekey";

const blockData = {
  "message0": "Generate Key",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "Generate Key",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'key = Fernet.generate_key()\n';
  return code;
};