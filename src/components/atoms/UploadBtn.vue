<template>
  <v-btn
    :loading="loading"
    :disabled="loading"
    color="white"
    class="ma-2 --text"
    depressed
  >
    <v-icon dark>mdi-cloud-upload</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'UploadBtn',
  data () {
    return {
      loading: false
    }
  }
}
</script>