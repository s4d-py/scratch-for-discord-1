import * as Blockly from "blockly";

const blockName = "parham_embed";

const blockData = {
  "message0": "Make Embed %1 Title %2 Description %3 Color %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "title",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "description",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "color",
      "check": "Colour"
    }
  ],
  "output": "embed",
  "colour": "#40BF4A",
  "tooltip": "Create Perfect Embed",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var value_description = Blockly.Python.valueToCode(block, 'description', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `disnake.Embed(title=${value_title}, description=${value_description}, color=${value_color})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};