import * as Blockly from "blockly";

const blockName = "parham_securing_code";

const blockData = {
  "message0": "%1 %2 Text %3 With Method %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "encode",
          "encode"
        ],
        [
          "decode",
          "decode"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
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
  "output": "String",
  "colour": 210,
  "tooltip": "Code Text With Methods",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  // TODO: Assemble Python into code variable.
  var code = null;
  if (dropdown_mode == "encode") {
    if (dropdown_method == "base64") {
      code = `base64.b64encode(${value_text}.encode("ascii")).decode("ascii")`;
    }
  }
  else if (dropdown_mode == "decode") {
      if (dropdown_method == "base64") {
      code = `base64.b64decode(${value_text}.encode("ascii")).decode("ascii")`;
    }
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};