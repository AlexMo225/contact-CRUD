<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Edit Contact</ion-title>
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
            <ion-button expand="full" @click="updateContact">Update</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: "EditContact",
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
        const id = this.$route.params.id;
        const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        const contact = contacts.find((contact) => contact.id === parseInt(id));
        if (contact) {
            this.contact = contact;
        }
    },
    methods: {
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
                this.$router.push("/");
            }
        },
    },
};
</script>

<style scoped>
ion-content {
    --background: white;
}
</style>
