import * as Blockly from "blockly";

const blockName = "parham_botping";

const blockData = {
  "message0": "Bot Ping",
  "output": "Number",
  "colour": 230,
  "tooltip": "Bot Ping",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'round(s4dbot.latency * 1000)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};