<template>
  <v-app>
    <tpv-drawer/>
    <tpv-toolbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TpvDrawer from '@/components/layout/TpvDrawer'
import TpvToolbar from '@/components/layout/TpvToolbar'

export default {
  name: 'App',
  components: { TpvDrawer, TpvToolbar },
  data: () => ({
    //
  })
}
</script>
