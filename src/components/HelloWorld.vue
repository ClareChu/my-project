
<template>
  
    <div class="hello">
      <iframe :class="isFull?'full':''" id="ifr" :src='vvurl'></iframe>    
    </div>
  
   
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      id:'',
      vvurl: 'http://api.visaok.net/?url=https://www.iqiyi.com/v_19rqym70lc.html',
      msg: 'Welcome to Your Vue.js App',
      isFull:false
    }
  },
  created () {
    let id = this.$route.query.id//id为key（根据实际情况）//
    this.id = id
    console.info("id", id==undefined)
    if (id != undefined ){
        this.getData()
    }
    
  },
  methods:{
    clickFull(){
      console.log('click')
      this.isFull = true
    },
    getData(){
      console.log('xxx')
      this.$http('login/test/' + this.id,'get',{}).then(res=>{
        console.log(res.dataInfo.vvurl)
        this.vvurl = 'http://api.visaok.net/?url=' + res.dataInfo.vvurl
      })
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
  height: 100%;
}
.full{
  width: 100%;
  height: 100%;
}
</style>
