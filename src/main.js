import { createApp } from 'vue'
import App from './App.vue'
//IMPORTAMOS LA CONSTANTE DE ROUTER.JS
import router from './Router';

const app = createApp(App);
//DEBEMOS INCLUIR LOS METODOS FILTERS COMO GLOBALES
//PARA LA APLICACION
app.config.globalProperties.$filters = {
    //AQUI LOS METODOS/FILTERS GLOBALES PARA LA APP
    mayuscula(dato) {
        return dato.toUpperCase();
    }
}
app.use(router).mount('#app');





