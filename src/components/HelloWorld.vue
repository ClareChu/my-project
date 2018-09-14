<template>
  <div class="hello">
    <div @click="clickFull()" class="full-screen">全屏</div>
    <iframe :class="isFull?'full':''" id="ifr" src="http://yun.baiyug.cn/vip/index.php?url=http://ww//ww//://://www.iqiyi.com/v_19rr96agog.html"></iframe>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isFull:false
    }
  },
  methods:{
    clickFull(){
      console.log('click')
      this.isFull = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  /* height:100%; */
}
.full-screen{
  position: absolute;
  background: #fff;
  height: 30px;
  top:170px;
  right: 20px;
}
#ifr{
  width: 100%;
  height: 200px;
}
.full{
  width: 100%;
  height: 100%;
}
</style>
