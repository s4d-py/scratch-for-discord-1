import * as Blockly from "blockly";

const blockName = "parham_tryexcept";

const blockData = {
  "message0": "Try %1 : %2 Except %3 : %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "try"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "except"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D14081",
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