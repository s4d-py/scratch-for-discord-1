import * as Blockly from "blockly/core";

const blockName = "webserver";

const blockData = {
    //"type": "block_type",
    "message0": "Create webserver with text %1",
    "args0": [
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        }
    ],
    "colour": "#F46580",
    "tooltip": "Create a Webserver for your repl to make your bot 24/7",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block) {
    const value = Blockly.Python.valueToCode(block, "URL", Blockly.Python.ORDER_ATOMIC);
    const code = `from flask import Flask
from threading import Thread
app = Flask('')

@app.route('/')
def main():
  return ${value}

def run():
    app.run(host="0.0.0.0", port=8080)

def keep_alive():
    server = Thread(target=run)
    server.start()`;
    return code;
} 