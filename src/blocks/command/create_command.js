import * as Blockly from "blockly";

const blockName = "s4d_on_command";

const blockData = {
    "message0": "Create command with name %3 and function name %4 then %1 %2",
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
          "name": "FUNC",
          "check": "String"
        },
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
  let func = Blockly.JavaScript.valueToCode(block, "FUNC", Blockly.JavaScript.ORDER_ATOMIC);
  
  if(func == undefined || !func.length){
    func = name
  }
    const code = `@s4dbot.command(name=${name})
async def ${func}(ctx, *args):
${statements}`;
    return code;
};