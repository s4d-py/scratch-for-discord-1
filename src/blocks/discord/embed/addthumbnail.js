import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_thumbnail";

const blockData = {
    "message0": "Set thumbnail %1 with image url %2",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
          "type": "input_value",
          "name": "IMAGE",
          "check": "String"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a Thumbnail to your embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    let image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  let content = []
  if(!(image == null) && image.length) {
    content.push(`url=${image}`)
    }
    const code = `embedVar.set_thumbnail(${content.join(' ')})\n`;
    return code;
};