import * as Blockly from "blockly";

const blockName = "parham_messages_author";

const blockData = {
  "message0": "Message Author",
  "output": "member",
  "colour": "#5BA58C",
  "tooltip": "Message Author",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'message.author';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};