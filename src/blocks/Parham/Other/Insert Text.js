import * as Blockly from "blockly";

const blockName = "parham_inserttext";

const blockData = {
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "Text"
    }
  ],
  "output": null,
  "colour": "#a55b80",
  "tooltip": "Insert Text",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble Python into code variable.
  var code = text_text;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};