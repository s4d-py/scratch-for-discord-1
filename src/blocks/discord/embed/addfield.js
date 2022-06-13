import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_field";

const blockData = {
    "message0": "Add field %1 with title %2 with description %3 Inline? %4",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
          "type": "input_value",
          "name": "TITLE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DESC",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "INLINE",
          "check": "Boolean"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a Field to your embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    let title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
    let desc = Blockly.Python.valueToCode(block, 'DESC', Blockly.Python.ORDER_ATOMIC);
  let inline = Blockly.Python.valueToCode(block, 'INLINE', Blockly.Python.ORDER_ATOMIC);
    const code = `embedVar.add_field(name=${title}, value=${desc}, inline=${inline})\n`;
    return code;
};