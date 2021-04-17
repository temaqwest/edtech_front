<template>
  <div>
    <uni_profile v-if="this.$store.state.user.user.role === 'ROLE_UNIVERSITY'"></uni_profile>
    <job_profile v-if="this.$store.state.user.user.role === 'ROLE_ORGANIZATION'"></job_profile>
  </div>
</template>

<script>

import uni_profile from '@/components/uni_profile'
import job_profile from '@/components/job_profile'
export default {
  name: 'Profile',
  components: {
    uni_profile,
    job_profile,
  },
  data () {
    return {

    }
  }
}
</script>