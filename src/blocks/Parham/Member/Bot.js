import * as Blockly from "blockly";

const blockName = "parham_member_bot";

const blockData = { 
  "message0": "%1 Is Bot?",
  "args0": [
    {
      "type": "input_value",
      "name": "member",
      "check": "member"
    }
  ],
  "output": "Boolean",
  "colour": "#5b80a5",
  "tooltip": "Is Bot?",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_member = Blockly.Python.valueToCode(block, 'member', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_member}.bot`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};