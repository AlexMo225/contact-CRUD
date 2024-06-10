<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contact Details</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div v-if="contact">
                <ion-item>
                    <ion-label>Name</ion-label>
                    <div>{{ contact.name }}</div>
                </ion-item>
                <ion-item>
                    <ion-label>Email</ion-label>
                    <div>{{ contact.email }}</div>
                </ion-item>
                <ion-item>
                    <ion-label>Phone</ion-label>
                    <div>{{ contact.phone }}</div>
                </ion-item>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: "ContactDetails",
    data() {
        return {
            contact: null,
        };
    },
    mounted() {
        const id = this.$route.params.id;
        const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        this.contact = contacts.find((contact) => contact.id === parseInt(id));
    },
};
</script>

<style scoped>
ion-content {
    --background: white;
}
</style>
