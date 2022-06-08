import * as Blockly from "blockly";

const blockName = "parham_insertcode";

const blockData = {
  "message0": "Insert Code %1",
  "args0": [
    {
      "type": "field_multilinetext",
      "name": "code",
      "text": "Code",
      "spellcheck": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#d14081",
  "tooltip": "Insert Code",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var text_code = block.getFieldValue('code');
  // TODO: Assemble Python into code variable.
  var code = `${text_code}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};