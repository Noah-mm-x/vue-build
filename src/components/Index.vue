<template>
  <div class="index">
    <div class="title">{{msg}}</div>
    <p class="content">反间谍法卡兰蒂斯积分</p>
  </div>
</template>

<script>
export default {
   metaInfo: {
    title: '首页', // set a title
    meta: [{                 // set meta
      name: 'keyWords',
      content: 'My Example App'
    },{
      name: 'renderer',
      content: 'webkit'
    }],
    link: [{                 // set link
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  },
  data () {
    return {
      msg: 'ASO100'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
@import './../assets/css/common.scss';

.index{
  .title{
    font-size: 24px;
    color: #abcdef;
  }
  .content{
    font-size: 26px;
    @include dot(200px)
  }
}
  
</style>
