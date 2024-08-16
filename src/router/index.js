import { createRouter, createWebHistory } from 'vue-router' // Importa vue-router
import HomePage from '../views/HomePage.vue' // Importa el componente HomePage
import AboutPage from '../views/AboutPage.vue' // Importa el componente AboutPage
import ServicesPage from '../views/ServicesPage.vue' // Importa el componente ServicesPage

// Constantes para guardar un arreglo de rutas
const routes = [
    {
        name: 'homePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'aboutPage',
        path: '/about',
        component: AboutPage
    },
    {
        name: 'servicesPage',
        path: '/services',
        component: ServicesPage
    },
];

// Inicialización de las rutas de la aplicación
const router = createRouter({
    history: createWebHistory(), // Configura el historial del navegador para manejar la navegación
    routes
});

export default router; // Exporta el router para ser usado en la aplicación