<template>
  <button @click="$emit('select', member)">{{ member.name }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    member: {
      required: true
    }
  }
})
</script>
