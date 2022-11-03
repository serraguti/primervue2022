<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game">
            </li>
        </ul>
        <button @click="getJuegosAzules()">
            Juegos azules
        </button>
        <div v-html="html"></div>
    </div>

</template>

<script>
    export default {
        name: "PropiedadConmutada",
        computed: {
            //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES
            //Y NO PUEDE RECIBIR PARAMETROS
            juegosRojos() {
                var datos = this.juegos;
                //RECORREMOS LOS JUEGOS Y LOS DEVOLVEMOS EN COLOR ROJO
                for (var i = 0; i < datos.length; i++){
                    var juego = datos[i];
                    juego = "<span style='color:red'>"
                    + juego + "</span>";
                    datos[i] = juego;
                }
                return datos;
            }
        },
        methods: {
            getJuegosAzules() {
                var datos = this.juegos;
                //RECORREMOS LOS JUEGOS Y LOS DEVOLVEMOS EN COLOR ROJO
                for (var i = 0; i < datos.length; i++){
                    var juego = datos[i];
                    this.html += "<h1 style='color:blue'>"
                    + juego + "</h1>";
                }
            }
        },
        data() {
            return {
                juegos: ["Parchis", "Luz roja, Luz verde"
                , "La cuerda", "La galleta", "Canicas"],
                html: ""
            }
        }
    }
</script>