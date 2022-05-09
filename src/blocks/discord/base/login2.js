import * as Blockly from "blockly/core";

const blockName = "s4d_login";


const blockData = {
    "type": "block_type",
    "message0": "Conect to discord (token)%1 then %2 (Optional) Command prefix %3 List of slash command test servers %4 %5 %6",
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
            "type": "input_value",
            "name": "PREFIX",
            "check": [ "String" ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "GUILDS",
            "check": [ "Array" ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
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
  var extra
    const value = Blockly.Python.valueToCode(block, "TOKEN", Blockly.Python.ORDER_ATOMIC);
  const guilds = Blockly.Python.valueToCode(block, "GUILDS", Blockly.Python.ORDER_ATOMIC);
  const prefix = Blockly.Python.valueToCode(block, "PREFIX", Blockly.Python.ORDER_ATOMIC);
    const statements = Blockly.Python.statementToCode(block, "STATEMENTS");
  if(((prefix == null)||(prefix == undefined)) && !prefix.length) {
    if(((guilds == null)||(guilds == undefined)) && !guilds.length) {
    extra = `intents=intents`
    } else {
      extra = `intents=intents, test_guilds=${guilds}`
    }
  } else {
    if(((guilds == null)||(guilds == undefined)) && !guilds.length) {
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