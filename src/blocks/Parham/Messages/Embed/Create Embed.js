import * as Blockly from "blockly";

const blockName = "parham_embedcreate";

const blockData = {
  "message0": "%1 Create Embed %2 : %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      "width": 15,
      "height": 15,
      "alt": "This Block Currently Isn't Working",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "embed",
      "check": "embed"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Create Embed",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(/*block*/) {
  // var statements_embed = Blockly.Python.statementToCode(block, 'embed');
  // TODO: Assemble Python into code variable.
  var code = '';
  return code;
};