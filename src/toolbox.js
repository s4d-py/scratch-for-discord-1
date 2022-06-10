export default (Blockly, value/*, searching*/) => {
  const allow_toolbox_search = true
  var toolbox_search_category
    if (allow_toolbox_search) {
        toolbox_search_category = `
    
    <category name="Search" colour="#42556e" css-icon="customIcon2 fa fa-search">
    <label text="Search category! Version 1.0"></label>
    <label text=""></label>
    <label text="Want to search?"></label>
    <label text="PC: Right click on the workspace > Search for block"></label>
    <label text="Touch: Hold on the workspace > Search for block"></label>
        <!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->
    </category>
    <sep class="bt"/>
    `
    } else {
        toolbox_search_category = ``
    }
  var toolbox_xml_contents = (`
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">

${toolbox_search_category}

<category name="{{ TOOLBOX_LOGIC }}" colour="#5b80a5">
            <block type="controls_if" />
            <block type="logic_compare">
                <field name="OP">EQ</field>
            </block>
            <block type="logic_operation">
                <field name="OP">AND</field>
            </block>
            <block type="logic_negate" />
            <block type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </block>
            <block type="logic_null" />
            <block type="logic_ternary" />
        </category>
        <category name="{{ TOOLBOX_LOOPS }}" colour="#5ba55b">


            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_whileUntil">
                <field name="MODE">WHILE</field>
            </block>
            <block type="controls_for">
                <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
                <value name="BY">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="controls_forEach">
                <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
            </block>
            <block type="controls_flow_statements">
                <field name="FLOW">BREAK</field>
            </block>
        </category>
        <category name="{{ TOOLBOX_MATH }}" colour="#5b67a5">
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
            <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="B">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_single">
                <field name="OP">ROOT</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">9</field>
                    </shadow>
                </value>
            </block>
            <block type="math_trig">
                <field name="OP">SIN</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">45</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constant">
                <field name="CONSTANT">PI</field>
            </block>
            <block type="math_number_property">
                <mutation divisor_input="false" />
                <field name="PROPERTY">EVEN</field>
                <value name="NUMBER_TO_CHECK">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="math_round">
                <field name="OP">ROUND</field>
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">3.1</field>
                    </shadow>
                </value>
            </block>
            <block type="math_on_list">
                <mutation op="SUM" />
                <field name="OP">SUM</field>
            </block>
            <block type="math_modulo">
                <value name="DIVIDEND">
                    <shadow type="math_number">
                        <field name="NUM">64</field>
                    </shadow>
                </value>
                <value name="DIVISOR">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="math_constrain">
                <value name="VALUE">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="LOW">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="HIGH">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="TO">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
            <block type="math_random_float" />
        </category>
        <category name="{{ TOOLBOX_TEXT }}" colour="#5ba58c">
            <block type="text">
                <field name="TEXT" />
            </block>
						<block type="text_multiline">
									<field name="TEXT" />
					</block>
            <block type="text_join">
                <mutation items="2" />
            </block>
            <block type="text_replace">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="REPLACE">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
                <value name="WITH">
                    <shadow type="text">
                        <field name="TEXT">b</field>
                    </shadow>
                </value>                
            </block>
						<block type="text_isEmpty"/>
						<block type="text_reverse"/>
            <block type="s4d_newline"></block>
            <block type="text_append">
                <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_ends_with">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
            <value name="SUBSTRING">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
            </block>

            <block type="s4d_starts_with">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="SUBSTRING">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>
            <block type="s4d_includes">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
                <value name="SUBSTRING">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value>
            </block>
            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT" />
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_charAt">
                <mutation at="true" />
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
						<block type="text_count"></block>
        </category>
        <category name="{{ TOOLBOX_LISTS }}" colour="#745ba5">
            <block type="lists_create_with">
                <mutation items="0" />
            </block>
            <block type="lists_create_with">
                <mutation items="3" />
            </block>
            <block type="lists_repeat">
                <value name="NUM">
                    <shadow type="math_number">
                        <field name="NUM">5</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_length" />
            <block type="lists_isEmpty" />
            <block type="s4d_includes">
<value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
                <value name="SUBSTRING">
                    <shadow type="text">
                        <field name="TEXT">a</field>
                    </shadow>
                </value></block>
            <block type="lists_sort"/>
						<block type="lists_reverse"/>
            <block type="lists_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getIndex">
                <mutation statement="false" at="true" />
                <field name="MODE">GET</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_setIndex">
                <mutation at="true" />
                <field name="MODE">SET</field>
                <field name="WHERE">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_getSublist">
                <mutation at1="true" at2="true" />
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="push_to_list">
                <value name="LIST">
                    <block type="variables_get">
                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                    </block>
                </value>
            </block>
            <block type="lists_split">
                <mutation mode="SPLIT" />
                <field name="MODE">SPLIT</field>
                <value name="DELIM">
                    <shadow type="text">
                        <field name="TEXT">,</field>
                    </shadow>
                </value>
            </block>
            <block type="lists_sort">
                <field name="TYPE">NUMERIC</field>
                <field name="DIRECTION">1</field>
            </block>
        </category>
        <category name="{{ TOOLBOX_COLORS }}" colour="#a5745b">
            <block type="colour_picker">
                <field name="COLOUR">#ff0000</field>
            </block>
            <block type="colour_random" />
            <block type="fz_color"/>
            <block type="colour_rgb">
                <value name="RED">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
                <value name="GREEN">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="BLUE">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>
            <block type="colour_blend">
                <value name="COLOUR1">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#ff0000</field>
                    </shadow>
                </value>
                <value name="COLOUR2">
                    <shadow type="colour_picker">
                        <field name="COLOUR">#3333ff</field>
                    </shadow>
                </value>
                <value name="RATIO">
                    <shadow type="math_number">
                        <field name="NUM">0.5</field>
                    </shadow>
                </value>
            </block>
        </category>
        <sep class="bt" />
        <category name="{{ TOOLBOX_VARIABLES }}" colour="#a55b80" custom="VARIABLE"/>

<category name="{{ TOOLBOX_FUNCTIONS }}" colour="#995ba5" custom="PROCEDURE" />

<sep class="bt"/>
<category name="{{ TOOLBOX_OTHER }}" colour="#D14081"> 
<block type="text_print">
<value name="TEXT">
      <shadow type="text">
        <field name="TEXT">Hey!</field>
      </shadow>
    </value>
</block>
<block type="s4d_try_and_except"/>
<block type="parham_converttexttonumber">
  <value name="text">
    <shadow type="text">
      <field name="TEXT">1</field>
    </shadow>
  </value>
</block>
<block type="parham_tryexcept"/>
<block type="parham_error"/>
<block type="parham_wait">
  <value name="wait">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="parham_exec"/>
<block type="parham_eval"/>
<block type="parham_insertcode"/>
<block type="parham_inserttext"/>
<block type="parham_nocode"/>
</category>
<sep class="bt"/>
                    <category name="Favorites" colour="#FFFF00" css-icon="customIcon fa fa-star">
                        ${value === null ? "" : value.map(c => `<block type="${c}"/>`)}
                    </category>
				<sep class="bt"/>

   <category name="{{ TOOLBOX_BASE }}" colour="#F46580">
<label text="Mandatory"></label>
<block type="s4d_login">
<value name="TOKEN">
                    <shadow type="text">
                        <field name="TEXT">Your bot token</field>
                    </shadow>
                </value>
<value name="PREFIX">
                    <shadow type="text">
                        <field name="TEXT">!</field>
                    </shadow>
                </value>
<value name="GUILDS">
                    <shadow type="lists_create_with">
                      <mutation items="0" />
                    </shadow>
                </value>
</block>
<label text="For replit"></label>
<block type="env">
<value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">env-name</field>
                    </shadow>
                </value>
            </block>
<block type="webserver">
<value name="URL">
                    <shadow type="text">
                        <field name="TEXT">This site was created to keep bot on 25/8</field>
                    </shadow>
                </value>
</block>
<label text="Base block"></label>
<block type="s4d_on_connected"/>
<label text="Advanced"></label>
<block type="parham_whencoderuns"/>
<label text="Bot Info"></label>
<block type="parham_botping"/>
</category>
<category name="{{ TOOLBOX_E_MESSAGES }}" colour="#41AAC0">
<block type="s4d_on_message"/>
<block type="s4d_message_content"/>
<block type="parham_messageauthor"/>
<block type="s4d_send">
<value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
</block>
<block type="s4d_reply">
<value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
<value name="boolean">
<shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </shadow>
</value>
</block>
<label text="Embed Blocks:"></label>
<block type="s4d_create_embed_then">
  <value name="TITLE">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
  <value name="DESC">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
  <value name="COLOR">
    <shadow type="colour_picker">
      <field name="COLOUR">#ff0000</field>
    </shadow>
  </value>
</block>
<block type="s4d_create_embed_field">
  <value name="TITLE">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
  <value name="DESC">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
<value name="INLINE">
<shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </shadow>
</value>
</block>
<block type="s4d_create_embed_send"/>
<block type="parham_embed">
  <value name="title">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
  <value name="description">
    <shadow type="text">
      <field name="TEXT">Hey!</field>
    </shadow>
  </value>
  <value name="color">
    <shadow type="colour_picker">
      <field name="COLOUR">#ff0000</field>
    </shadow>
  </value>
</block>
</category>
<category name="Channels" colour="#a55b80">
<block type="s4d_get_channel"/>
<block type="s4d_channel_exist"/>
<block type="s4d_send_channel"/>
</category>
<category name="Member" colour="#00e3ff">
<block type="parham_member_bot"/>
</category>
<category name="Commands" colour="#f5ab1a">
<block type="s4d_on_command">
<value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">ping</field>
                    </shadow>
                </value>
<value name="FUNC">
                    <shadow type="text">
                        <field name="TEXT">ping</field>
                    </shadow>
                </value>
</block>
<block type="command_arg">
<value name="VALUE">
                    <shadow type="math_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
</block>
</category>
<category name="Slash" colour="#f5ab1a">
<block type="s4d_on_slash">
<value name="NAME">
                    <shadow type="text">
                        <field name="TEXT">ping</field>
                    </shadow>
                </value>
<value name="DESC">
                    <shadow type="text">
                        <field name="TEXT">Pong!</field>
                    </shadow>
                </value>
</block>
<block type="s4d_inter_reply">
<value name="CONTENT">
                    <shadow type="text">
                        <field name="TEXT">Hey!</field>
                    </shadow>
                </value>
<value name="boolean">
<shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
            </shadow>
</value>
</block>
</category>
<category name="Files" colour="#0066ff">
<block type="parham_files_write"/>
<block type="parham_files_read"/>
<block type="parham_files_open"/>
<block type="parham_files_thenwrite"/>
<block type="parham_files_thenread"/>
</category>
<category name="Securing" colour="#4c79ff">
<block type="parham_securing_code"/>
<label text="cryptography"></label>
<block type="parham_securing_cryptgeneratekey"/>
<block type="parham_securing_crypt"/>
</category>

<category name="Replit DB" colour="#102770">
<label text="For Replit Only"></label>
<block type="parham_replitdb_setitemto"/>
<block type="parham_replitdb_getitem"/>
<block type="parham_replitdb_deleteitem"/>
<block type="parham_replitdb_getallitems"/>
</category>
</xml>
`.replace(/{{\s([A-z]{3,})\s}}/g, (x) => {
        return Blockly.Msg[x.replace("{{ ", "").replace(" }}", "")];
    }))

  // OLD searching code
    /*
    
    // preparing variables for searching
    
        const default_max_length = 250
        var CATEGORYCONTENT;
    
    // set default blocks from BlocklyComponent function code
    
    const toolboxArray = toolbox_xml_contents.split('\n');
                var blocks = []
                var pushed
                var repeat_end = toolboxArray.length;
                for (var count = 0; count < repeat_end; count++) {
                    if ((toolboxArray[count].includes('<block type="')) && !(toolboxArray[count].includes('LINE HIDDEN FROM SEARCH'))) {
                        pushed = (((toolboxArray[count].replaceAll(" ", "")).replaceAll('blocktype="', "")).replaceAll("/", "").replaceAll("<", "").replaceAll('"', "")).replaceAll("'", "").replaceAll("\t", "")
                        pushed = pushed.slice(0, pushed.indexOf('>'));
                        if (!(blocks.includes(pushed))) {
                            blocks.push(pushed)
                        }
                    }
                }
    
    // set the default blocks and run the searching code
    
    const defaultblocks = blocks
    
        if (searching) {
            var newblocks = []
            var check;
            var searchparam = prompt("Search for a block with:")
            if (!(searchparam)) {
                searchparam = "null"
            }
            var searchparamFiltered = ((searchparam.replaceAll("<", "_")).replaceAll(">", "_")).replaceAll("\\", "_")
            searchparam = searchparam.replaceAll(" ", "_").toLowerCase()
            var repeat_end = defaultblocks.length;
            for (var count = 0; count < repeat_end; count++) {
                check = defaultblocks[count];
                if (String(check).includes(String(searchparam)) && !(String(check).includes("LINE HIDDEN FROM SEARCH"))) {
                    newblocks.push(check);
                }
            }
            if (newblocks.length > 1) {
                var s = "s"
            } else {
                var s = ""
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}, found ${newblocks.length} block${s} that matched" web-class="boldtext"></label><block type="${newblocks.join("\"/>\n<block type=\"")}"/>`
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="You searched for: ${searchparamFiltered}" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        } else {
            var length_lessthan_350 = true
            if (defaultblocks.length < default_max_length) {
                var newblocks = defaultblocks
            } else {
                length_lessthan_350 = false
                var newblocks = defaultblocks.slice(0, default_max_length)
            }
            if (newblocks.length > 0) {
                var CATEGORYCONTENT = "<block type=\"" + newblocks.join("\"/>\n<block type=\"") + "\"/>"
                if (length_lessthan_350 == false) {
                    CATEGORYCONTENT = CATEGORYCONTENT + `<label text="${defaultblocks.length - default_max_length} blocks left..." web-class="boldtext"></label>`
                }
            } else {
                var CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label><label text="ㅤ" web-class="boldtext"></label><label text="Hmm, nothing was found..." web-class="boldtext"></label>`
            }
        }
        toolbox_xml_contents = toolbox_xml_contents.replace("<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->", CATEGORYCONTENT)
    
    */
  
    return toolbox_xml_contents
}