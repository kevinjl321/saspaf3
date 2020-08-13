<template>
  <div id="home">
    <home></home> <!-- TODO: navbar and footer links work with vuescrollto-->
    <impact></impact>
    <mission></mission>
    <upcoming></upcoming>
    <donate></donate>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Impact from '@/components/Impact.vue'
import Mission from '@/components/Mission.vue'
import Upcoming from '@/components/Upcoming.vue'
import Donate from '@/components/Donate.vue'

export default {
  name: 'Home',
  components: {
    home: Home,
    impact: Impact,
    mission: Mission,
    upcoming: Upcoming,
    donate: Donate,
  },
}
</script>

<style scoped>


</style>
