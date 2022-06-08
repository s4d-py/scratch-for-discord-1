import * as Blockly from "blockly";

const blockName = "parham_securing_crypt";

const blockData = {
  "message0": "%1 Text  %2 %3 With Key %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "mode",
      "options": [
        [
          "Encrypt",
          "encrypt"
        ],
        [
          "Decrypt",
          "decrypt"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "key",
      "check": "key"
    }
  ],
  "output": "String",
  "colour": 210,
  "tooltip": "Crypt Text With Key",
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
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = null
  if(dropdown_mode == "encrypt") {
    code = `Fernet(${value_key}).encrypt(${value_text}.encode("ascii")).decode("ascii")`;
  }
  if(dropdown_mode == "decrypt") {
    code = `Fernet(${value_key}).decrypt(${value_text}.encode("ascii")).decode("ascii")`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};