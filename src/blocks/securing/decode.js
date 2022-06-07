import * as Blockly from "blockly";

const blockName = "parham_decoding";

const blockData = {
  "type": "parham_decoding",
  "message0": "Decode  %1 With Method  %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "method",
      "options": [
        [
          "base64",
          "base64"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 195,
  "tooltip": "Decode String",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python['parham_decoding'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  // TODO: Assemble Python into code variable.
  if (dropdown_method == "base64") {
    var code = `base64.b64decode(${value_text}.encode("ascii")).decode("ascii")`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};