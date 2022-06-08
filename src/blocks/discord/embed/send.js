import * as Blockly from "blockly";

const blockName = "s4d_create_embed_send";

const blockData = {
  "message0": "Send Embed",
  "output": "MessageEmbed",
  "colour": "#40BF4A",
  "tooltip": "Send your embed",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  var code = 'embed=embedVar';
  return [code, Blockly.Python.ORDER_ATOMIC];
};