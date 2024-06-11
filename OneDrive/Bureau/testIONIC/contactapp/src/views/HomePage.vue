<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contact registration</ion-title>
                <ion-buttons slot="end">
                    <router-link :to="{ name: 'CreateContact' }">
                        <ion-button>Add contact</ion-button>
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
                <ion-item
                    v-for="contact in filteredContacts"
                    :key="contact.id"
                    button
                    @click="viewContact(contact.id)"
                >
                <ion-label>
                        <div>
                            <strong>Name:</strong> {{ contact.name }}
                        </div>
                        <div>
                            <strong>Email:</strong> {{ contact.email }}
                        </div>
                        <div>
                            <strong>Phone:</strong> {{ contact.phone }}
                        </div>
                    </ion-label>
                    <ion-button
                        slot="end"
                        @click.stop="editContact(contact.id)"
                    >
                        Modify
                    </ion-button>
                    <ion-button
                        slot="end"
                        color="danger"
                        @click.stop="deleteContact(contact.id)"
                    >
                        Delete
                    </ion-button>
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
import { RouterLink } from "vue-router";

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
        RouterLink,
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
        window.addEventListener("contact-updated", this.loadContacts);
    },
    beforeUnmount() {
        window.removeEventListener("contact-updated", this.loadContacts);
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
        // viewContact(id) {
        //     this.$router.push({ name: "ContactDetails", params: { id } });
        // },
        editContact(id) {
            this.$router.push({ name: "EditContact", params: { id } });
        },
        deleteContact(id) {
            this.contacts = this.contacts.filter(
                (contact) => contact.id !== id
            );
            this.filteredContacts = this.contacts;
            localStorage.setItem("contacts", JSON.stringify(this.contacts));
            window.dispatchEvent(new CustomEvent("contact-updated"));
        },
    },
};
</script>
