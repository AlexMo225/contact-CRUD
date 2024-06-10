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
export default {
    data() {
        return {
            contact: {},
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
};
</script>
