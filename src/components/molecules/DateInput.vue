<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DateInput',
  props: {
    label: {
      type: String,
      default: "Date (read only text field)"
    }
  },
  data () {
    return {
      date: ''
    }
  }
}
</script>