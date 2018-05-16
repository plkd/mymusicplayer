<template>
  <div class="playlist">
    <ul class="list">
      <li class="item" v-for="item in playlist" :key="item.id">
        <img :src="item.coverImgUrl" width="80" height="80" alt="">
        <div></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getPlaylist } from '@/api'
export default {
  name: 'playlist',
  data() {
    return {
      playlist: [],
      name: ''
    }
  },
  created() {
    this._getPlaylist()
  },
  methods: {
    _getPlaylist() {
      getPlaylist()
        .then(result => {
          this.playlist = result.playlist
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.playlist
  .list
    list-style none
    .item
      width 100%
      height 100px
      img
        float left
</style>
