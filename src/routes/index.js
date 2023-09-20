import {createRouter, createWebHashHistory} from "vue-router"
import TaskOne from "@/views/TaskOne.vue";
import TaskTwo from "@/views/TaskTwo.vue";
import TaskThree from "@/views/TaskThree.vue";

const routes = [
    { path: '/', component: TaskOne },
    { path: '/two', component: TaskTwo },
    { path: '/three', component: TaskThree},
]


export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});