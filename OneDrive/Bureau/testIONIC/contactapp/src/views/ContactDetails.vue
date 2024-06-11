<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contact Details</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ contact.name }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>Email: {{ contact.email }}</p>
                    <p>Phone: {{ contact.phone }}</p>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

export default {
    name: "ContactDetails",
    setup() {
        const route = useRoute();
        const contact = ref({});

        const loadContact = (id) => {
            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            const existingContact = contacts.find(
                (contact) => contact.id === Number(id)
            );
            if (existingContact) {
                contact.value = { ...existingContact };
            }
        };

        onMounted(() => {
            loadContact(route.params.id);
        });

        watch(
            () => route.params.id,
            (newId) => {
                loadContact(newId);
            }
        );

        return {
            contact,
        };
    },
};
</script>
