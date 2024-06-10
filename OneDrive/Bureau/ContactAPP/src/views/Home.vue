<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Contacts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item
                    v-for="contact in contacts"
                    :key="contact.id"
                    :router-link="`/${contact.id}`"
                >
                    {{ contact.name }}
                    <ion-button
                        fill="clear"
                        color="primary"
                        :router-link="`/${contact.id}/edit`"
                    >
                        Edit
                    </ion-button>
                    <ion-button
                        fill="clear"
                        color="danger"
                        @click="deleteContact(contact.id)"
                    >
                        Delete
                    </ion-button>
                </ion-item>
            </ion-list>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button :router-link="'/create'">
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            contacts: [],
        };
    },
    mounted() {
        this.loadContacts();
    },
    methods: {
        loadContacts() {
            const contacts = JSON.parse(
                localStorage.getItem("contacts") || "[]"
            );
            this.contacts = contacts;
        },
        deleteContact(id) {
            const contacts = this.contacts.filter(
                (contact) => contact.id !== id
            );
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.loadContacts();
        },
    },
};
</script>

<style scoped>
ion-content {
    --background: white;
}
</style>
