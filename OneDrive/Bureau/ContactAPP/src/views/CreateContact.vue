<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Add Contact</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label position="floating">Name</ion-label>
                <ion-input v-model="contact.name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="contact.email"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Phone</ion-label>
                <ion-input v-model="contact.phone"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="addContact">Add</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: "CreateContact",
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
            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            contacts.push(this.contact);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
ion-content {
    --background: white;
}
</style>
