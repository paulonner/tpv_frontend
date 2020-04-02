<template>
  <v-app-bar app flat elevate-on-scroll>
    <v-app-bar-nav-icon @click="$store.commit('showDrawer')"/>
    <v-toolbar-title>
      Menú principal
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TpvToolbar'
}
</script>
