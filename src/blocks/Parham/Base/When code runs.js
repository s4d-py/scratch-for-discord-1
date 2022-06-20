import * as Blockly from "blockly";

const blockName = "parham_whencoderuns";

const blockData = {
  "message0": "When code runs %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "whencoderuns"
    }
  ],
  "colour": "#F5AB1A",
  "tooltip": "When code runs",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var statements_whencoderuns = Blockly.Python.statementToCode(block, 'whencoderuns');
  // TODO: Assemble Python into code variable.
  var code = `if True:
${statements_whencoderuns}\n`;
  return code;
};