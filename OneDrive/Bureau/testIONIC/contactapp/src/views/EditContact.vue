<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Edit Contact</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-input
                        label="Name"
                        placeholder="Enter name"
                        v-model="contact.name"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input
                        label="Email"
                        placeholder="Enter email"
                        v-model="contact.email"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input
                        label="Phone"
                        placeholder="Enter phone number"
                        v-model="contact.phone"
                    ></ion-input>
                </ion-item>
            </ion-list>
            <ion-button expand="full" @click="updateContact">Update</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonInput,
    IonButton,
} from "@ionic/vue";

export default {
    name: "EditContact",
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonInput,
        IonButton,
    },
    data() {
        return {
            contact: {
                id: null,
                name: "",
                email: "",
                phone: "",
            },
        };
    },
    mounted() {
        this.loadContact();
    },
    methods: {
        loadContact() {
            const id = this.$route.params.id;
            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            const contact = contacts.find(
                (contact) => contact.id === parseInt(id)
            );
            if (contact) {
                this.contact = { ...contact };
            }
        },
        updateContact() {
            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            const index = contacts.findIndex(
                (contact) => contact.id === this.contact.id
            );
            if (index !== -1) {
                contacts.splice(index, 1, this.contact);
                localStorage.setItem("contacts", JSON.stringify(contacts));
                // Émettre un événement pour informer HomePage de la mise à jour
                this.$emit("contactUpdated", this.contact);
                this.$router.push("/home");
            }
        },
    },
};
</script>
