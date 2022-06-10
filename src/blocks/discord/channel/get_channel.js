import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_channel";

const blockData = {
    "message0": "Get the channel with %2 equal to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": ["String", "Number"]
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.Python[blockName] = function(block){
    let val = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC);
  let value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "NAME"){
      if (!value.startsWith(("'") || ('"'))) {
        value = `'${val}'`
      }
        return [ `disnake.utils.get(s4dbot.get_all_channels(), name=${value})`, Blockly.Python.ORDER_ATOMIC ];
    } else {
      if (value.startsWith(("'") || ('"'))) {
        let valu = val.slice(1, value.length - 1)
        value = Number(valu)
      }
        return [ `disnake.utils.get(s4dbot.get_all_channels(), id=${value})`, Blockly.Python.ORDER_ATOMIC ];
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CHANNEL_VALUE",
        types: [
            "VALUE"
        ]
    }
]);