export default `
    <xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" id="imS!#F]ra4omBhkPrvzS" x="69" y="131">
    <value name="TOKEN">
      <shadow type="text" id="e=spZbR?rd$jI|O@E+5z">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
    <statement name="STATEMENTS">
      <block type="s4d_on_message" id="@|xWe.T11!vyNb;E\`zj)">
        <statement name="STATEMENTS">
          <block type="controls_if" id="]+NPM{Yy[{=Wzy0vBb6|">
            <value name="IF0">
              <block type="logic_compare" id="5PCO8%gi]pobC5E.PC$G">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="s4d_message_content" id="Rs9@~gP(|-^1hF|R(R,z"></block>
                </value>
                <value name="B">
                  <block type="text" id="+_[Q(8cE5@%;Nn$:gA.o">
                    <field name="TEXT">!ping</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="s4d_send" id="i0~iA_3;NXxbFP6KW|3\`">
                <value name="CONTENT">
                  <shadow type="text" id="SkNRe5M:X$aXS+Kjbfhu">
                    <field name="TEXT">Pong!</field>
                  </shadow>
                </value>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>
`;