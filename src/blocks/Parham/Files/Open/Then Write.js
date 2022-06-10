import * as Blockly from "blockly";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "parham_files_thenwrite";

const blockData = {
  "message0": "Write Text %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Write Text On File",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `file.write(${value_text})\n`;
  return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_FILES_OPEN",
        types: [
            "parham_files_open"
        ]
    }
]);