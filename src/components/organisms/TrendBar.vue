<template>
  <v-toolbar dense>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <date-input />
    <date-input />
    <upload-btn />
  </v-toolbar>
</template>

<script>
import DateInput from '@/components/molecules/DateInput';
import UploadBtn from '@/components/atoms/UploadBtn';

export default {
  name: 'TrendBar',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    'date-input': DateInput,
    'upload-btn': UploadBtn
  }
}
</script>