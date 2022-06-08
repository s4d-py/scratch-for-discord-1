import * as Blockly from "blockly";

const blockName = "parham_securing_decrypt";

const blockData = {
  "message0": "Decrypt Text  %1 %2 With Key %3",
  "args0": [
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
  "output": null,
  "colour": 210,
  "tooltip": "Decrypt Text With Key",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `Fernet(${value_key}).decrypt(${value_text})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};