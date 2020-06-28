<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="10">
                <v-dialog v-model="dialog" max-width="500px">
                    <v-btn v-slot:activator="{ on }" color="primary" v-on="on" dark class="mb-2">
                        New Item
                    </v-btn>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <FinanceTable></FinanceTable>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import FinanceTable from "@/components/FinanceTable";
    export default {
        name: "HomeView",
        components: {FinanceTable},
        data: function () {
            return {
                dialog: false,
                headers: [{
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                }, {text: 'Calories', value: 'calories'}, {text: 'Fat (g)', value: 'fat'}, {
                    text: 'Carbs (g)',
                    value: 'carbs'
                }, {text: 'Protein (g)', value: 'protein'}, {text: 'Actions', value: 'name', sortable: false}],
                desserts: [],
                editedIndex: -1,
                editedItem: {name: '', calories: 0, fat: 0, carbs: 0, protein: 0},
                defaultItem: {name: '', calories: 0, fat: 0, carbs: 0, protein: 0},
                listPrimitive: null
            }
        },
        computed: {
            formTitle: function () {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },
        watch: {
            dialog: function (val) {
                val || this.close()
            }
        },
        methods: {
            initializeTable: function() {
                let months = 12;
                for (let i=1; i<months+1; i++) {
                    this.headers.push(i);
                }
            },
            subscribeToUpdate: function () {
                this.listPrimitive.onItemAdded(item => {
                    this.desserts.push(item.value)
                });
                this.listPrimitive.onItemUpdated(item => {
                    //update the item at item.index
                    this.desserts.splice(item.index, 1, item.value);
                });
                this.listPrimitive.onItemDeleted(item => {
                    //remove the item at item.index
                    this.desserts.splice(item.index, 1);
                });
            },
            editItem: function (item) {
                this.editedIndex = this.desserts.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true
            },
            deleteItem: function (item) {
                const index = this.desserts.indexOf(item);
                confirm('Are you sure you want to delete this item?') && this.listPrimitive.delete(index)
            },
            close: function () {
                this.dialog = false;
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1
                }, 300)
            },
            save: function () {
                if (this.editedIndex > -1) {
                    this.listPrimitive.update(this.editedIndex, this.editedItem)
                } else {
                    this.listPrimitive.push(this.editedItem)
                }
                this.close()
            }
        }
    };
</script>

<style scoped>

</style>
