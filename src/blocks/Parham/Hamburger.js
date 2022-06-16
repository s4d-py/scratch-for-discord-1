import * as Blockly from "blockly";

const blockName = "parham_hamburger";

const blockData = {
  "message0": "Hamburger 🍔",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Hamburger 🍔",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = '# Hamburger 🍔\n';
  return code;
};