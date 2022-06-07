import * as Blockly from "blockly/core";

const blockName = "s4d_try_and_except";

const blockData = {
    "message0": "try %1 %2 if error %3 %4",
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
            "name": "catch"
        }
        
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    const tryy = Blockly.Python.statementToCode(block, "try");
    const catchh = Blockly.Python.statementToCode(block, "catch");
    return `try:
${tryy}
except Exception as err:
${catchh}`;
};