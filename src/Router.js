import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/musica", component: MusicaComponent
    }, 
    {
        path: "/cine", component: CineComponent
    }, 
    {
        path: "/hooks", component: CicloVida
    }
]

//CREAMOS UNA CONSTANTE, QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

//POR ULTIMO, EXPORTAMOS LA CONSTANTE router
export default router;