<template>
    <div class="header">
        <div class="login"></div>
        <span class="center">{{title}}</span>
        <div class="right">
            <icon-info></icon-info>
        </div>
    </div>
</template>
<script>
import IconInfo from '@/components/svg/IconInfo'
export default {
  name: 'Header',
  props: ['title'],
  components: {
    IconInfo
  }
}
</script>

<style lang="stylus" scoped>
.header
    position fixed
    top 0
    width 100%
    background #ff0000
    height 40px
    line-height 40px
    .right
        float right
        overflow hidden
        width 40px
        height 40px
</style>
