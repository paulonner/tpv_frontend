<template>
  <v-navigation-drawer app dark floating v-model="$store.state.showDrawer">
    <v-list dense nav>
      <v-list-item two-line>
        <v-list-item-avatar @click="$router.push({ name: 'Home' })">
          <v-img src="@/assets/logo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list expand>
        <v-list-group no-action>
          <v-list-item slot="activator">
            <v-list-item-icon>
              <v-icon>mdi-cogs</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Administración</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push({ name: 'Users' })">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TpvDrawer',
  data: () => ({
    title: 'Administrador'
  })
}
</script>
