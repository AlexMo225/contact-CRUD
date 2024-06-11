<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Add Contact</ion-title>
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
            <ion-buttons class="button-container" expand="full">
                <ion-button class="green-button" @click="addContact"
                    >Add Contact</ion-button
                >
            </ion-buttons>
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
    name: "CreateContact",
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
                id: Date.now(),
                name: "",
                email: "",
                phone: "",
            },
        };
    },
    methods: {
        addContact() {
            if (
                !this.contact.name ||
                !this.contact.email ||
                !this.contact.phone
            ) {
                alert("Please fill out all fields.");
                return;
            }

            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            contacts.push(this.contact);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            window.dispatchEvent(new CustomEvent("contact-updated"));
            this.$router.push("/home");
        },
    },
};
</script>
<style scoped>
.button-container {
    margin-top: 20px; 
    display: flex;
    justify-content: center; 
}

.green-button {
    --background: green;
    --background-activated: darkgreen;
    --background-focused: darkgreen;
    --background-hover: darkgreen;
}
</style>
