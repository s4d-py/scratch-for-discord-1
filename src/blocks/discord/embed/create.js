import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_then";

const blockData = {
    "message0": "Create new embed %1 With Title %2 With Description %3 With color %4 then %5",
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
          "name": "COLOR",
          "check": "Colour"
        },
        {
          "type": "input_statement",
          "name": "THEN"
        }
    ],
    "colour": "#40BF4A",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Create a Perfect embed",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    const statementThen = Blockly.Python.statementToCode(block, "THEN");
    let title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
    let desc = Blockly.Python.valueToCode(block, 'DESC', Blockly.Python.ORDER_ATOMIC);
  let color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
    const code = `embedVar = disnake.Embed(title="${title}", description="${desc}", color=${color})\n${statementThen}\n`;
    return code;
};

/*
  Embed build

    embedVar = discord.Embed(title="Title", description="Desc", color=0x00ff00)
    embedVar.add_field(name="Field1", value="hi", inline=False)
    embedVar.add_field(name="Field2", value="hi2", inline=False)
    await message.channel.send(embed=embedVar)
*/ //