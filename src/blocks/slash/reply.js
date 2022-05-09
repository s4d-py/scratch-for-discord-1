import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_inter_reply";

const blockData = {
    "message0": "Reply to interaction %1 Emphereal? %2",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "MessageEmbed","embed" ]
        },
        {
          "type": "input_value",
          "name": "boolean",
          "check": "Boolean"
        }
    ],
    "colour": "#4C97FF",
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
    const content = Blockly.Python.valueToCode(block, "CONTENT", Blockly.Python.ORDER_ATOMIC);
    const boolean = Blockly.Python.valueToCode(block, "boolean", Blockly.Python.ORDER_ATOMIC);
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")){
          if(contentType === "MessageEmbed"){
            const code = `await inter.response.send_message(${content}, ephemeral = ${boolean})\n`;
            return code;
          }else{
            const code = `await inter.response.send_message(${content}, ephemeral = ${boolean})\n`;
            return code;
          }
        }else if((contentType === "embed") || (!contentType && typeof contentType === "object")){
            const code = `await inter.response.send_message(${content}, ephemeral = ${boolean})\n`;
            return code;
        } else {
            const code = `await inter.response.send_message(${content}, ephemeral = ${boolean})\n`;
            return code;
        }
    } else {
        const code = `await inter.response.send_message(${content}, ephemeral = ${boolean})\n`;
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
          "CONTENT"
        ]
    }
]);