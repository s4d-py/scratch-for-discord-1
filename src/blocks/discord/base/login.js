import * as Blockly from "blockly/core";

const blockName = "s4d_login";


const blockData = {
    "type": "block_type",
    "message0": "Conect to discord (token) %1 then %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": [ "String" ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "inputsInline": false,
    "colour": "#3333ff",
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var default_token
    const value = Blockly.Python.valueToCode(block, "TOKEN", Blockly.Python.ORDER_ATOMIC);
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
  default_token = value || null;
    const code = `\ndef Run_bot():
  s4dbot = commands.Bot(intents=intents)
${statements}
  s4dbot.run(${default_token})\n`;
    return code;
};