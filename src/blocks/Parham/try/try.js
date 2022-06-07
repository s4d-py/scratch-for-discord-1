import * as Blockly from "blockly";

const blockName = "parham_try";

const blockData = {
  "message0": "Try: %1 Except: %2",
  "args0": [
    {
      "type": "input_statement",
      "name": "try"
    },
    {
      "type": "input_statement",
      "name": "except"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Try Except",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var statements_try = Blockly.Python.statementToCode(block, 'try');
  var statements_except = Blockly.Python.statementToCode(block, 'except');
  // TODO: Assemble Python into code variable.
  var code = `try:
${statements_try}
except Exception as error:
${statements_except}`;
  return code;
};