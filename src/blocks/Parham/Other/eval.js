import * as Blockly from "blockly";

const blockName = "parham_eval";

const blockData = { 
  "message0": "Eval %1",
  "args0": [
    {
      "type": "input_value",
      "name": "eval",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 255,
  "tooltip": "Eval",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_eval = Blockly.Python.valueToCode(block, 'eval', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `eval(${value_eval})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};