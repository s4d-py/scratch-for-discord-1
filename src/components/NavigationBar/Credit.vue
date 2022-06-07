<template>
        <b-nav-item @click="credit">Credit</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credit",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                //'Androz, snowflake107 - original s4d\n7coil - Discord blocks',
                html: `<h3 style="background: -webkit-linear-gradient(60deg, #eee, #333);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Original s4d by Androz, snowflake107<br>Discord Blocks by 7coil </h3>Scratch for discord PY is maintained by:
                  <span style="color:#2aa9bd">frostzzone</span>,
                  <span style="color:#ff7b00">Parham</span>`,
                showConfirmButton: true
            })
        },
    }
}
</script>