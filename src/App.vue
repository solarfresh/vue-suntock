<template>
  <v-app>
    <AppBar/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import AppBar from '@/components/AppBar/AppBar';

export default {
  name: 'App',

  components: {
    AppBar,
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
