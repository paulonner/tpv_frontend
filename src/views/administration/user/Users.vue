<template>
<v-app dark>
    <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    :search="search"
    color="accent"
  >
    <template v-slot:top dark>
      <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>
              <v-spacer></v-spacer>
          <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="accent" class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.pass" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.avatar" label="Protein (g)"></v-text-field>
                    <img v-bind:src="desserts.avatar" width="200"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</v-app>

</template>
<script>
export default {
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: 'Nombre',
        align: 'name',
        sortable: false,
        value: 'name'
      },
      { text: 'Id', value: 'id' },
      { text: 'Correo electronico', value: 'email' },
      { text: 'Contraseña', value: 'pass' },
      { text: 'Foto', value: 'avatar' },
      { text: 'Acciones', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      id: 0,
      email: '',
      pass: '',
      avatar: ''
    },
    defaultItem: {
      name: '',
      id: 0,
      email: '',
      pass: '',
      avatar: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'Jonh Wick',
          id: 159,
          email: 'jonh-wick@mail.com',
          pass: '2345tsdfghmnbvc',
          avatar: 'p'
        },
        {
          name: 'Alice Abernathy',
          id: 237,
          email: 'alice-abernathy@mail.com',
          pass: '2345yhgfdsasdfgh',
          avatar: 'p'
        },
        {
          name: 'Lara Croft',
          id: 262,
          email: 'lara-croft@gmail.com',
          pass: 'asdfghjklk345678',
          avatar: 'p'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
