<template>
  <div :style="{ 'background-image': 'url(' + myInfo.profile.backgroundUrl + ')' }" class="bgClass">
    <div class="avatar">
      <img :src="myInfo.profile.avatarUrl" alt="" width="120" height="120">
    </div>
    <h1 class="nickname">{{myInfo.profile.nickname}}</h1>
    <p class="signature">{{myInfo.profile.signature}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getUserInfo} from "../../api";

  export default {
    name: "MyInfo",
    data() {
      return {
        myInfo: {}
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    created() {
      let self = this
      getUserInfo().then(res => {
        self.myInfo = res
      })
    }
  }
</script>

<style scoped lang="stylus">
  .bgClass
    background-repeat: no-repeat
    background-size cover
    color: #fff
</style>
