<template>
  <div>
    <h1>{{ header }}</h1>

    <div v-if="currentMember">
      {{ currentMember.name }} {{ activity }}
      <button @click="selectMember(null)">Ну и хватит</button>
    </div>
    <div v-if="!currentMember">
      Никто не {{ activity }}
    </div>

    <div v-if="members.length">
      <ActionButton 
        v-for="member in members" 
        :member="member" 
        :key="member.name"
        @select="selectMember"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Member, State } from './logic/state'

import ActionButton from './components/ActionButton.vue'

export default Vue.extend({
  name: 'Application',
  components: {
    ActionButton
  },
  data() {
    let state = State.Instance
    return {
      header: state.header,
      members: state.members,
      activity: state.activity,
      currentMember: null
    }
  },
  methods: {
    selectMember(member: Member) {
      console.log(`Member ${member && member.name} selected`)
      this.currentMember = member;
    }
  }
})
</script>
