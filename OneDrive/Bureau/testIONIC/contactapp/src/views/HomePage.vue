<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contacts</ion-title>
                <ion-buttons slot="end">
                    <router-link to="/create">
                        <ion-button>Ajouter un contact</ion-button>
                    </router-link>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-searchbar
                v-model="searchQuery"
                @ionInput="filterContacts"
            ></ion-searchbar>
            <ion-list>
                <ion-item v-for="contact in filteredContacts" :key="contact.id">
                    <ion-label>Nom: {{ contact.name }}</ion-label>
                    <ion-label>Email: {{ contact.email }}</ion-label>
                    <ion-label>Numéro: {{ contact.phone }}</ion-label>
                    <ion-button slot="end" @click.stop="editContact(contact.id)"
                        >Modifier</ion-button
                    >
                    <ion-button
                        slot="end"
                        color="danger"
                        @click.stop="deleteContact(contact.id)"
                        >Supprimer</ion-button
                    >
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
} from "@ionic/vue";
import { RouterLink } from "vue-router"; // Correction ici

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonContent,
        IonSearchbar,
        IonList,
        IonItem,
        IonLabel,
        RouterLink, // Modification ici
    },
    data() {
        return {
            searchQuery: "",
            contacts: [],
            filteredContacts: [],
        };
    },
    mounted() {
        this.loadContacts();
    },
    methods: {
        loadContacts() {
            this.contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            this.filteredContacts = this.contacts;
        },
        filterContacts() {
            const query = this.searchQuery.toLowerCase();
            this.filteredContacts = this.contacts.filter(
                (contact) =>
                    contact.name.toLowerCase().includes(query) ||
                    contact.email.toLowerCase().includes(query) ||
                    contact.phone.toLowerCase().includes(query)
            );
        },
        editContact(id) {
            this.$router.push(`/${id}/edit`);
        },
        deleteContact(id) {
            this.contacts = this.contacts.filter(
                (contact) => contact.id !== id
            );
            this.filteredContacts = this.contacts;
            localStorage.setItem("contacts", JSON.stringify(this.contacts));
        },
    },
};
</script>
