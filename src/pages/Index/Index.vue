<template>
    <div class="index">
        <m-header title="index"></m-header>
        index
        <ul>
          <router-link to="/login" tag="li">log in</router-link>
        </ul>
    </div>
</template>
<script>
import MHeader from '@/components/header/header';
export default {
  name: 'Index',
  data() {
    return {}
  },
  components: {
    MHeader
  }
};
</script>
