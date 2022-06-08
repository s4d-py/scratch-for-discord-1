import * as Blockly from "blockly";

const blockName = "parham_wait";

const blockData = {
  "message0": "Wait %1 Second",
  "args0": [
    {
      "type": "input_value",
      "name": "wait",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "Wait",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `time.sleep(${value_wait})\n`;
  return code;
};