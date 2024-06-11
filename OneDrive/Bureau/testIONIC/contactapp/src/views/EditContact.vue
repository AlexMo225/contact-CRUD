<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Modify Contact</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-label position="floating">Name</ion-label>
                    <ion-input
                        v-model="contact.name"
                        placeholder="Entrez le nom"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Phone</ion-label>
                    <ion-input
                        v-model="contact.phone"
                        placeholder="Entrez le téléphone"
                    ></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input
                        v-model="contact.email"
                        placeholder="Entrez l'email"
                    ></ion-input>
                </ion-item>
            </ion-list>
            <div class="ion-padding-top">
                <ion-button class="green-button" expand="block" @click="saveContact"
                    >Save</ion-button
                >
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    IonLabel,
} from "@ionic/vue";

export default {
    name: "EditContactPage",
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
        IonLabel,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const contact = ref({
            id: null,
            name: "",
            phone: "",
            email: "",
        });

        const loadContact = () => {
            const id = route.params.id;
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
            loadContact();
        });

        const saveContact = () => {
            let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
            const index = contacts.findIndex((c) => c.id === contact.value.id);
            if (index !== -1) {
                contacts[index] = { ...contact.value };
                localStorage.setItem("contacts", JSON.stringify(contacts));
                window.dispatchEvent(new CustomEvent("contact-updated"));
                router.push("/home");
            }
        };

        return {
            contact,
            saveContact,
        };
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
