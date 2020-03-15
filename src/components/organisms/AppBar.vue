<template>
  <v-app-bar
    app
    color="primary"
    dense
    dark
  >
    <div class="d-flex align-center">
      <v-toolbar-title>Suntock</v-toolbar-title>
    </div>

    <div class="d-flex align-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <!-- <v-btn text slot="activator"> -->
          <v-btn text v-on="on">
            <!-- <v-icon left>expand_more</v-icon> -->
            <span>盤後資訊</span>
          </v-btn>
        </template>
        <v-list>
          <!-- v-list-tile is changed to v-list-item -->
          <v-list-item v-for="info in afterHours" :key="info.text" router :to="info.route">
            <v-list-item-title>{{ info.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- <v-spacer></v-spacer> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    afterHours: [
      { text: '基本面', route: '/'},
      { text: '財務面', route: '/'},
    ]
  }),
}
</script>