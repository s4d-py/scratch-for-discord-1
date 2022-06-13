import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_author";

const blockData = {
    "message0": "Add author %1 with name %2 with image url %3 link (optional) %4",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
          "type": "input_value",
          "name": "NAME",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "IMAGE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "LINK",
          "check": "String"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Add a Author to your embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    let name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    let image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  let link = Blockly.Python.valueToCode(block, 'LINK', Blockly.Python.ORDER_ATOMIC);
  let content = []
  if(!(name == null) && name.length) {
    content.push(`name=${name}`)
    }
  if(!(image == null) && image.length) {
    content.push(`icon_url=${image}`)
    }
  if(!(link == null) && link.length) {
    content.push(`url=${link}`)
    }
    const code = `embedVar.set_author(${content.join(' ')})\n`;
    return code;
};

/*
.set_author(name="RealDrewData", url="https://twitter.com/RealDrewData", icon_url="https://pbs.twimg.com/profile_images/1327036716226646017/ZuaMDdtm_400x400.jpg")
*/