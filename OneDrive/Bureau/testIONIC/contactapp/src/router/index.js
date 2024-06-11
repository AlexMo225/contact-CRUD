import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../views/HomePage.vue";
import CreateContact from "../views/CreateContact.vue";
import EditContact from "../views/EditContact.vue";
import ContactDetails from "../views/ContactDetails.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/create",
        name: "CreateContact",
        component: CreateContact,
    },
    {
        path: "/:id/edit",
        name: "EditContact",
        component: EditContact,
    },
    {
        path: "/:id",
        name: "ContactDetails",
        component: ContactDetails,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
