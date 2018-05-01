<template>
  <h1>{{ header }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import State from './logic/state'

export default Vue.extend({
  name: 'Application',
  data() {
    return {
      header: State.Instance.header
    }
  }
})
</script>
