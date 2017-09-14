<template>
  <div class="rank">
    <div class="title" @click='showRouter'>{{msg}}</div>
    <div>appid:{{appid}}</div> 
    <div>country:{{country}}</div> 
  </div>
</template>

<script>
export default {
   metaInfo: {
    title: '详情页', // set a title
    meta: [{
      name: 'renderer',
      content: 'webkit'
    }],
    link: [{                 // set link
      rel: 'asstes',
      href: 'https://assets-cdn.github.com/'
    }]
  },
  data() {
    return {
      msg: 'ASO100 hahahaa'
    }
  },
  computed: {
    appid() {
      return this.$route.params.appid;
    },
    country() {
      return this.$route.params.country;
    }
  },
  methods: {
    showRouter(){
      console.log(this.$route.params)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
@import './../assets/css/common.scss';

.title{
  font-size: 24px;
  color: #abcdef;
}

  
</style>
