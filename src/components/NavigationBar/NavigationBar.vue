<template>
    <b-navbar toggleable="lg" type="dark" style="background-color:#161719;user-select:none;" id="navbar nav-main">
        <b-navbar-brand>
            <img src="scratch.png" width="40" draggable="false">
            Scratch For Discord PY
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <CodeModal></CodeModal>
                <FileMenu></FileMenu>
                <EditMenu></EditMenu>
                <ToolboxModal></ToolboxModal>
                <!--<LanguageMenu></LanguageMenu>-->
                <ExamplesMenu></ExamplesMenu>
                <preBuilds></preBuilds>
                <TokenModal></TokenModal>
                <Socials></Socials>
                <b-nav-item href="https://androz2091.gitbook.io/scratch-for-discord/" target="_blank">{{ $t('help') }}</b-nav-item>
                <Credit></Credit>
              <b-nav-item
          class="theme-changer"
          style="width: 32px; height: 32px; margin-top: 5px"
          @click="changeTheme"
        ></b-nav-item>
              <div id="block-counter" style="margin-right: 5px; font-size: 90%"><p style="color:rgb(182, 182, 182);">0 blocks</p></div>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-button style="border-right-color: #161719; border-radius: 0em; border-top-left-radius: 0.25em; border-bottom-left-radius: 0.25em">
                <span contenteditable="true" id="docName">{{ $t("untitled") }}</span>
                </b-button>
                <b-button id="v-step-2" :disabled="!configurationValidated" style="border-radius: 0em; border-top-right-radius: 0.25em; border-bottom-right-radius: 0.25em" @click="exportToCode">
                    <b-icon-download></b-icon-download>
                </b-button>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Blockly from "blockly";
import JSZip from "jszip";
import TokenModal from "./TokenModal.vue";
import FileMenu from "./FileMenu.vue";
import EditMenu from "./EditMenu.vue";
//import LanguageMenu from "./LanguageMenu.vue";
import ExamplesMenu from "./ExamplesMenu.vue";
import CodeModal from "./CodeModal.vue";
import preBuilds from "./preBuilds.vue";
import ToolboxModal from "./ToolboxModal.vue";
import Socials from "./socials.vue";
import Credit from "./Credit";
import localforage from 'localforage';
import r from "./requires";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//import swal from "sweetalert2";
export default {
    name: "navbar",
    components: {
        FileMenu,
        EditMenu,
        //LanguageMenu,
        ExamplesMenu,
        CodeModal,
        TokenModal,
        preBuilds,
        ToolboxModal,
        Credit,
        Socials
    },
    computed: {
        configurationValidated: function () {
            return  this.$store.state.workspace &&
                    this.$store.state.workspace.getAllBlocks().some((block) => block.type === "s4d_login") &&
                    this.$store.state.workspace.getAllBlocks().every((block) => !block.disabled && !block.warning);
        }
    },
    mounted(){
        document.getElementById("docName").addEventListener("input", function() {
            document.title = `Scratch For Discord PY - ${document.querySelector("#docName").textContent}`;
        }, false);
        const element = document.querySelector("#docName");
        element.spellcheck = false;
        element.focus(); 
        element.blur();
    },
    methods: {
        exportToCode(){
            const wrapper = document.createElement('div');
            wrapper.innerHTML = `<h6>${this.$t('download.content.title')}</h6><ul><li style='text-align:left'>${this.$t('download.content.unzipFile')}</li><li style='text-align:left'>${this.$t('download.content.node')}</li><li style='text-align:left'>${this.$t('download.content.start')}</li><li style='text-align:left'>${this.$t('download.content.done')}</li></ul>`;
            this.$swal({
                title: this.$t('download.title'),
                content: wrapper,
                buttons: {
                    cancel: this.$t('download.cancel'),
                    confirm: this.$t('download.confirm')
                },
            }).then(async result => {
                let requires = [`python = "^3.8"`,`disnake 2.5.0`]
                let oldrequires = await localforage.getItem("requires")
                r(requires,oldrequires)
                if(result){
                    const zip = new JSZip();
                    const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
                    const fileName = `${encodeURIComponent(document.querySelector("#docName").textContent).replace(/%20/g, " ")}.zip`;
                    zip.file("blocks.xml", xmlContent);
                    const pythonContent = this.getWorkspaceCode();

                    zip.file("bot.py", pythonContent);
                  zip.file("pyproject.toml", `[tool.poetry]
name = "scratch-for-discord-py-bot"
version = "1.0.0"
description = "A bot make in scratch for discord py"
authors = ["s4d-py"]

[tool.poetry.dependencies]
${requires.join("\n")}`)
                    zip.generateAsync({
                        type: "blob"
                    })
                    .then((blob) => {
                        const a = document.createElement("a");
                        a.style = "display: none";
                        document.body.appendChild(a);
                        const url = window.URL.createObjectURL(blob);
                        a.href = url;
                        a.download = fileName;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    });
                }
            });
        },
      changeTheme() {
      if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
        document.querySelector("html").classList.add("light-them");
        console.log("The darkness has been banished to the beforelands");
      } else {
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.remove("light-them");
        console.log("The darkness has taken over the light");
      }
    },
    }
}
  if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "dark");
  }
  (async() => {
  if (localStorage.getItem("theme") === "light") {
    document.querySelector("html").classList.add("light-them");
      } else {
    await delay(1 * 1000);
     document.querySelector("html").classList.remove("light-them");
      }
       })()
</script>
