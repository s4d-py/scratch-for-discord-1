import * as Blockly from "blockly/core";

const blockName = "s4d_login";


const blockData = {
    "type": "block_type",
    "message0": "Conect to discord (token)%1 (Optional) Command prefix %2 (Optional) List of slash command test servers %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "PREFIX",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "GUILDS",
            "check": [ "Array" ]
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS",
            "check": "base"
        }
    ],
    "colour": "#3333ff",
    "inputsInline": false,
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
  var extra
    const value = Blockly.Python.valueToCode(block, "TOKEN", Blockly.Python.ORDER_ATOMIC);
  const guilds = Blockly.Python.valueToCode(block, "GUILDS", Blockly.Python.ORDER_ATOMIC);
  const prefix = Blockly.Python.valueToCode(block, "PREFIX", Blockly.Python.ORDER_ATOMIC);
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
  if(((prefix == null)||(prefix == undefined)) || !prefix.length) {
    if(((guilds == null)||(guilds == undefined)) || !guilds.length) {
    extra = `intents=intents`
    } else {
      extra = `intents=intents, test_guilds=${guilds}`
    }
  } else {
    if(((guilds == null)||(guilds == undefined)) || !guilds.length) {
    extra = `intents=intents, command_prefix=${prefix}`
    } else {
      extra = `intents=intents, command_prefix=${prefix}, test_guilds=${guilds}`
    }
  }
    const code = `\ndef Run_bot():
  s4dbot = commands.Bot(${extra})
${statements}
  s4dbot.run(${value})\n`;
    return code;
};