import * as Blockly from "blockly";

const blockName = "s4d_on_slash";

const blockData = {
    "message0": "Create slash command /%3 with description %4 %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS",
            "check": "block"
        },
        {
          "type": "input_value",
          "name": "NAME",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DESC",
          "check": "String"
        }
    ],
    "previousStatement": "base",
    "nextStatement": "base",
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const desc = Blockly.JavaScript.valueToCode(block, "Desc", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `@s4dbot.slash_command(description=${desc})
async def ${name.toLowerCase()}(inter):
${statements}`;
    return code;
};