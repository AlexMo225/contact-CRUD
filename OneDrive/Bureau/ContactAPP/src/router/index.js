import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "/src/views/Home.vue";
import CreateContact from "/src/views/CreateContact.vue";
import EditContact from "/src/views/EditContact.vue";
import ContactDetails from "/src/views/ContactDetails.vue";

const routes = [
    {
        path: "/",
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
