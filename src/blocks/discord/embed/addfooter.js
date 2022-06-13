import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_footer";

const blockData = {
    "message0": "Set footer %1 with text %2",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a Footer to your embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    let text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  let content = []
  if(!(text == null) && text.length) {
    content.push(`text=${text}`)
    }
    const code = `embedVar.set_footer(${content.join(' ')})\n`;
    return code;
};